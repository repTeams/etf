<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="register-success-main">
        <li class="success-img-warp">
          <img class="success-img" src="../img/icon.png" alt="">
        </li>
        <li class="success-tips">
          注册成功，扫码下载app登录！
        </li>
        <li class="code-warp box">
          <div>
            <img class="code-img" src="../img/img-ios.png" alt="">
            <div class="code-tips">IOS系统</div>
          </div>
          <div>
            <img class="code-img" src="../img/img-Android.png" alt="">
            <div class="code-tips">Android系统</div>
          </div>
        </li>
        <li class="come-black-warp">
          <span class="come-black-tips" @click="comeBlack()">返回星美网</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'register-success',
    data () {
        return {

        };
    },
    methods: {
        comeBlack () {
            this._jumpOtherUrl('/');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .register-success-main{
    width: 512px;
    padding: 40px 46px;
    background: rgba(35,41,85,1);
    opacity: 0.8;
    border-radius: 20px;
    position: absolute;
    box-shadow: 1px 1px 14px #153F6C;
    border: 2px solid #153F6C;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .success-img-warp{
      text-align: center;
    }
    .success-img{
      width: 231px;
      height: 141px;
    }
    .success-tips{
      font-size: 32px;
      color: #17FFFF;
      text-align: center;
      padding: 40px 0 60px;
    }
    .code-warp{
      justify-content: space-around;
    }
    .code-img{
      width: 220px;
      height: 220px;
    }
    .code-tips{
      text-align: center;
      color: #ffffff;
      padding: 40px 0 0;
    }
    .come-black-warp{
      position: absolute;
      width:100%;
      text-align: center;
      bottom: -60px;
      left: 0;
      font-size: 22px;
      color: #ffffff;
    }
    .come-black-tips{
      cursor: pointer;
      line-height: 44px;
      display: inline-block;
      border-bottom: 1px solid #ffffff;
    }
    .come-black-tips:hover{
      color: #21F1F5;
      border-color: #21F1F5;
    }
  }
</style>
