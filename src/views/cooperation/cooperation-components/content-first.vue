<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="cooperation-first-item" :style="{'backgroundImage': 'url('+ cooperationBg + ')'}">
      <p class="cooperation-first-item-title">{{cooperationTitle?cooperationTitle:'你还没传标题呢'}}</p>
      <p class="cooperation-first-item-content">{{cooperationContent?cooperationContent:'你还没传内容呢'}}</p>
    </div>
</template>

<script>
export default {
    props: ['cooperationTitle', 'cooperationContent', 'cooperationBg'],
    name: 'cooperation',
    data () {
        return {

        };
    },
    mounted () {
        console.log(this.cooperationBg);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cooperation-first-item{
    width: 591px;
    height: 300px;
    background: #cccccc;
    margin-bottom: 16px;
    background-size: cover;
    .cooperation-first-item-title{
      padding: 79px 0 38px 59px;
      color: #17FFFF;
      font-size: 20px;
    }
    .cooperation-first-item-content{
      font-size: 16px;
      color: #ffffff;
      padding: 0 69px 0 61px;
    }
  }
</style>
