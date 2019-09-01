<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-01 21:07:59
-->
<template>
    <ul class="register-mnemonic-main">
        <li class="mnemonics-title">{{$t('register.second.title')}}</li>
        <li class="mnemonics-title-second">
            {{$t('register.second.titleSecond')}}
        </li>
        <li class="textarea-warp">
            <textarea v-model="mnemonics" disabled class="textarea-content" :placeholder="$t('register.second.inputTips')" cols="5" rows="10"></textarea>
        </li>
        <li class="next-btn" @click="changeNext()">{{$t('register.second.newBtnTips')}}</li>
    </ul>
</template>

<script>
import { Decrypt } from './aes';
export default {
    name: 'register-mnemonics',
    data () {
        return {
            mnemonics: '192 168 107 135 752 633 368 455 122 355 478 622'
        };
    },
    methods: {
        getMnemonics () {
            this.$axios.post(
                '/user/words',
                {}
            ).then(res => {
                console.log(res);
                if (res.code === '000') {
                    this.mnemonics = Decrypt(res.data);
                } else {
                    this.$message({
                        message: res.message,
                        type: 'warning'
                    });
                }
            });
        },
        changeNext () {
            let obj = {
                words: this.mnemonics
            };
            this.$emit('nextFn', 'third', obj);
        }
    },
    mounted () {
        this.getMnemonics();
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./register-mnemonics.scss";
</style>
