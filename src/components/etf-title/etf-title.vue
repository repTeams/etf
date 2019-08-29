<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="etf-title">
      <span class="etf-titl-color">
        {{titleContent?titleContent:'你还没传文字呢'}}
      </span>
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
  .etf-title{
    max-width: 100%;
    width: 936px;
    height: 280px;
    background: url(./bg.png);
    background-size: 100% 100%;
    text-align: center;
    line-height: 280px;
    margin: 0 auto;
  }
  .etf-titl-color{
    font-size: 70px;
    font-weight: bold;
    background-image:-webkit-linear-gradient(left,#17FFFF,#0F5CDF);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }
</style>
