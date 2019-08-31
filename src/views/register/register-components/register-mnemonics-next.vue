<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="register-mnemonic-main">
      <li class="mnemonics-title">{{$t('register.third.title')}}</li>
      <li class="mnemonics-title-second">
        {{$t('register.third.titleSecond')}}
      </li>
      <li class="textarea-warp">
        <textarea class="textarea-content" :placeholder="$t('register.third.inputTips')" cols="5" rows="10"></textarea>
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
      <li class="next-btn" @click="changeNext()">{{$t('register.third.newBtnTips')}}</li>
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
      padding-top: 30px;
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
