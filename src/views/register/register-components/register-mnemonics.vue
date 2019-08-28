<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="register-mnemonic-main">
      <li class="mnemonics-title">请记录您的钱包助记词并保存到安全地方</li>
      <li class="mnemonics-title-second">
        若手机丢失或重置，钱包助记词可用于恢复您的账户，任何时候漏您的助记词，建议不要使用截图保存，采用国内纸质媒介保存更加安全
      </li>
      <li class="textarea-warp">
        <textarea class="textarea-content" placeholder="你能通过输入助记词重置密码，请使用空格分割助记词" cols="5" rows="10"></textarea>
      </li>
      <li class="next-btn" @click="changeNext()">下一步</li>
    </ul>
</template>

<script>
export default {
    name: 'register-mnemonics',
    data () {
        return {
            steep: 'first'
        };
    },
    methods: {
        changeNext () {
            this.$emit('nextFn', 'third');
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./register-mnemonics.scss";
</style>
