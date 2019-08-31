<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="register-mnemonic-main">
      <li class="mnemonics-title">{{$t('register.second.title')}}</li>
      <li class="mnemonics-title-second">
        {{$t('register.second.titleSecond')}}
      </li>
      <li class="textarea-warp">
        <textarea class="textarea-content" :placeholder="$t('register.second.inputTips')" cols="5" rows="10"></textarea>
      </li>
      <li class="next-btn" @click="changeNext()">{{$t('register.second.newBtnTips')}}</li>
    </ul>
</template>

<script>
export default {
    name: 'register-mnemonics',
    data () {
        return {

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
