<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="cooperation-second-warp box">
      <div>
        <img class="left-img" src="../img/img_5.png" alt="">
        <div class="right-content">
          <p class="right-content-item">2014年6月，以太坊基金会在瑞士注册成立，这是一家非营利 性机构，旨在管理以太币销售中筹措的基金，以更好地为以太 坊和去中心化技术生态系统服务。</p>
          <p class="right-content-item">以太坊基金会正与星美集团的金融专家探讨，以展示世界第二 大区块链如何与其他通证兼容，打造全球区块链通证银行。</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TaiFang',
    data () {
        return {

        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .left-img{
      width: 490px;
      height: 377px;
    }
    .right-content{
      max-width: 892px;
      background: rgba(35,41,85,0.8);
      position: absolute;
      left: 304px;
      top: 114px;
      color: #ffffff;
      font-size: 16px;
      .right-content-item{
        padding: 59px 81px 59px 101px;
      }
      .right-content-item:first-child{
        padding-bottom: 0;
      }
    }
    @media screen and (max-width: 867px) {
    .cooperation-second-warp{
      justify-content: center;
    }
    .right-content{
      position: relative;
      width: 348px;
      margin-top: -350px;
      font-size: 26px;
      left: 270px;
      text-align: justify;
      .right-content-item{
        width: 348px;
        padding: 30px 20px 30px 25px;
      }
    }
  }
</style>
