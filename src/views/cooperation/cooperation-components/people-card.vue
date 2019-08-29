<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="etf-people-item">
      <div class="etf-people-img">
        <img :src="peopleImg" alt="">
      </div>
      <div class="etf-people-name">
        {{penpleName?penpleName:'我的名字还没有'}}
      </div>
      <div class="etf-people-position">
        {{penpleposition?penpleposition:'我的职位还没有'}}
      </div>
      <div class="etf-people-brief">
        {{peopleBrief?peopleBrief:'我的简介还没有'}}
      </div>
    </div>
</template>

<script>
export default {
    props: ['penpleName', 'penpleposition', 'peopleImg', 'peopleBrief'],
    name: 'consortiumSupport',
    data () {
        return {

        };
    },
    mounted () {
        console.log(this.peopleImg);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .etf-people-item{
      text-align: center;
      padding-top: 80px;
      width: 309px;
      .etf-people-name{
        font-size: 28px;
        color: #17FFFF;
        padding: 40px 0 19px;
        font-weight: 400;
      }
      .etf-people-position{
        font-size: 24px;
        color: #FEFEFF;
        padding-bottom: 25px;
      }
      .etf-people-brief{
        font-size: 16px;
        color: #FEFEFF;
        line-height: 34px;
        text-align: left;
      }
    }
</style>
