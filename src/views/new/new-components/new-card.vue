<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="box new-content-item">
      <div class="new-left">
        <img class="new-left-img" :src="newImg" alt="">
      </div>
      <div class="new-right flex">
        <p class="new-title">{{newTitle?newTitle:'我的标题你没传'}}</p>
        <p class="new-content">{{newContent?newContent:'我的内容你没传'}}</p>
        <p class="new-time">{{newTime?newTime:'我的时间你没传'}}</p>
      </div>
    </div>
</template>

<script>
export default {
    props: ['newImg', 'newTitle', 'newContent', 'newTime'],
    name: 'newCard',
    data () {
        return {

        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.new-content-item{
      padding: 18px 16px 19px;
      border:2px solid rgba(23, 255, 255, 0.48);
      box-shadow:0px 5px 32px 0px rgba(30,96,246,1);
      position: relative;
      margin-bottom: 61px;
      .new-left{
        width: 408px;
        height: 233px;
        .new-left-img{
          width: 100%;
          height: 100%;
        }
      }
      .new-right{
        padding: 21px 41px;
        .new-title{
          font-size: 20px;
          color: #17FFFF;
          margin-bottom: 38px;
        }
        .new-content{
          font-size: 16px;
          color: #ffffff;
          margin-bottom: 36px;
        }
        .new-time{
          font-size: 14px;
          color: #9DA0B5;
        }
      }
    }
    .new-content-item:before{
      content:'';
      width: 259px;
      height: 80px;
      background: url('../img/img_left.png');
      background-size: 100% 100%;
      position: absolute;
      bottom: -13px;
      left: -13px;
    }
    .new-content-item:after{
      content:'';
      width: 259px;
      height: 80px;
      background: url('../img/img_right.png');
      background-size: 100% 100%;
      position: absolute;
      right: -18px;
      top: -10px;
    }
    @media screen and (max-width: 1200px) {
      .new-main{
        .new-content-item{
          flex-direction:column;
          align-items: center;
          .new-left{
            width: 100%;
            height: auto;
          }
        }
      }
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 3),
    screen and (min--moz-device-pixel-ratio: 3) {
        .new-main{
        .new-content-item{
          flex-direction:column;
          align-items: center;
          .new-left{
            width: 100%;
            height: auto;
          }
        }
      }
    }
</style>
