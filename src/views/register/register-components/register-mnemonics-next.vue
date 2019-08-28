<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="register-mnemonic-main">
      <li class="mnemonics-title">验证您的钱包助记词</li>
      <li class="mnemonics-title-second">
        请根据您记下的助记词，按顺序点击，验证您备份的助记词正确无误
      </li>
      <li class="textarea-warp">
        <textarea class="textarea-content" placeholder="你能通过输入助记词重置密码，请使用空格分割助记词" cols="5" rows="10"></textarea>
      </li>
      <li class="mnenmonics-warp box">
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
        <div class="mnenmonics-ben-item">sdfrt</div>
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
            this.$emit('nextFn', 'success');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./register-mnemonics.scss";
  .register-mnemonic-main{
    .mnenmonics-warp{
      width: 584px;
      flex-wrap:wrap;
      margin: 0 auto;
      justify-content:space-between;
      padding-top: 60px;
    }
    .mnenmonics-ben-item{
      cursor: pointer;
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #343D7A;
      margin-bottom: 25px;
    }
    .mnenmonics-ben-item:hover{
      color: #17FFFF;
      border: 1px solid #17FFFF;
    }
    .next-btn{
      margin-top: 20px;
    }
  }
</style>
