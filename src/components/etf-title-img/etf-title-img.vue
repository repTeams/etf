<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="title-img">
      {{titleContent?titleContent:'你还没传文字呢'}}
    </div>
</template>

<script>
export default {
    props: ['titleContent'],
    name: 'cooperation',
    data () {
        return {

        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title-img{
      font-size: 64px;
      text-align: center;
      color: #ffffff;
      font-weight: 500;
      position: relative;
    }
    .title-img:after{
      content:'';
      position: absolute;
      width: 160px;
      height: 138px;
      background: url('./content.png');
      background-size: 100% 100%;
      left: 50%;
      top: -54px;
      opacity: 0.5;
      transform: translateX(-80px);
    }
</style>
