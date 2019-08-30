<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="register-main">
      <register-input class="zoomIn animated" v-show="steep==='first'" @nextFn="changeNext"></register-input>
      <register-mnemonics class="zoomIn animated" v-show="steep==='second'" @nextFn="changeNext"></register-mnemonics>
      <register-mnemonics-next class="zoomIn animated" v-show="steep==='third'" @nextFn="changeNext"></register-mnemonics-next>
      <register-success class="zoomIn animated" v-show="steep==='success'" @nextFn="changeNext"></register-success>
    </div>
</template>

<script>
import registerInput from './register-components/register-input';
import registerMnemonics from './register-components/register-mnemonics';
import registerMnemonicsNext from './register-components/register-mnemonics-next';
import registerSuccess from './register-components/register-success';
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
            steep: 'success'
        };
    },
    methods: {
        changeNext (tex) {
            this.steep = tex;
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
