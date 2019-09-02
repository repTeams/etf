<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="register-main">
      <register-input class="zoomIn animated" v-show="steep==='first'" @nextFn="changeNext"></register-input>
      <register-mnemonics class="zoomIn animated" v-show="steep==='second'" @nextFn="changeNext"></register-mnemonics>
      <register-mnemonics-next class="zoomIn animated" :inputMessageWords="words" v-show="steep==='third'" @nextFn="changeNext"></register-mnemonics-next>
      <register-success class="zoomIn animated" v-show="steep==='success'" @nextFn="changeNext"></register-success>
    </div>
</template>

<script>
import registerInput from './register-components/register-input';
import registerMnemonics from './register-components/register-mnemonics';
import registerMnemonicsNext from './register-components/register-mnemonics-next';
import registerSuccess from './register-components/register-success';
import {Encrypt} from './register-components/aes';
export default {
    name: 'register',
    components: {
        registerInput,
        registerMnemonics,
        registerMnemonicsNext,
        registerSuccess
    },
    data () {
        return {
            steep: 'first',
            registerMessage: {},
            words: '',
            text: ''
        };
    },
    methods: {
        changeNext (tex, registerMessage) {
            if (tex === 'success') {
                this.registerUser();
            } else {
                for (let key in registerMessage) {
                    this.registerMessage[key] = registerMessage[key];
                }
                this.words = this.registerMessage.words;
                this.steep = tex;
            }
        },
        registerUser () {
            this.registerMessage.words = Encrypt(this.registerMessage.words);
            this.$axios.post(
                '/user/register',
                this.registerMessage
            ).then(res => {
                console.log(res);
                if (res.code === '000') {
                    this.steep = 'success';
                } else {
                    this.$message({
                        message: res.message,
                        type: 'warning'
                    });
                }
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .register-main{
    width: 100%;
      height: 100vh;
      background: url(../../static/img/bg_pc1.png);
      background-size: cover;
      background-position: center center;
      position: relative;
  }
</style>
