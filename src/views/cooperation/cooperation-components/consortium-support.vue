<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <!-- <div class="cooperation-first-item" :style="{'background': 'url('+ cooperationBg + ')'}">
      <p class="cooperation-first-item-title">{{cooperationTitle?cooperationTitle:'你还没传标题呢'}}</p>
      <p class="cooperation-first-item-content">{{cooperationContent?cooperationContent:'你还没传内容呢'}}</p>
    </div> -->
    <div class="cooperation-third-item">
      <div class="cooperation-third-img-warp">
        <img class="cooperation-third-img" :class="className" :src="cooperationBg" alt="">
      </div>
      <div class="cooperation-third-content">
          <span class="cooperation-third-content-title">{{cooperationTitle?cooperationTitle:'你还没传标题呢'}}</span>
          {{cooperationContent?cooperationContent:'你还没传内容呢'}}
      </div>
    </div>
</template>

<script>
export default {
    props: ['cooperationTitle', 'cooperationContent', 'cooperationBg', 'className'],
    name: 'consortiumSupport',
    data () {
        return {

        };
    },
    mounted () {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cooperation-third-item{
        width: 592px;
        margin: 100px 0;
        position: relative;
        .cooperation-third-img-warp{
          width: 232px;
          height: 232px;
          background: rgba(35,41,85,0.8);
          border-radius: 50%;
          text-align: center;
          line-height: 232px;
          margin: -98px auto 0;
          .cooperation-third-img {
            vertical-align: middle;
          }
          .decent{
            width: 132px;
            height: 124px;
          }
          .pantheon{
            width: 192px;
            height: 28px;
          }
          .scc{
            width:125px;
            height: 47px;
          }
          .huusion{
            width:189px;
            height: 28px;
          }
          .conturion{
            width:159px;
            height: 96px;
          }
          .ventures{
            width:191px;
            height: 52px;
          }
          .weh{
            width:177px;
            height: 73px;
          }
        }
        .cooperation-third-content{
          padding: 87px 40px 130px;
          font-size: 16px;
          color: #ffffff;
          position: relative;
          line-height: 33px;
          text-align: justify;
        }
        .cooperation-third-content-title{
          font-size: 20px;
          color: #00FFFF;
          font-weight: bold;
        }
      }
      .cooperation-third-item:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(circle at 50% 0 ,transparent 0%,transparent 150px,rgba(35,41,85,0.8) 150px, rgba(35,41,85,0.8) 100%);
      }
</style>
