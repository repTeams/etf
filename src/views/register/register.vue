<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="register-pc-main">
        <ul class="register-pc-warp">
          <li class="register-pc-title">
            <div class="register-pc-title-tips">注册</div>
          </li>
          <li>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
              <el-form-item label="" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="" prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入邀请码"></el-input>
              </el-form-item>
              <el-form-item label="" prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入登录密码"></el-input>
              </el-form-item>
              <el-form-item label="" prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请再次输入登录密码"></el-input>
              </el-form-item>
              <el-form-item label="" prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入支付密码"></el-input>
              </el-form-item>
              <el-form-item label="" prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请再次输入支付密码"></el-input>
              </el-form-item>
            </el-form>
          </li>
          <li class="register-btn">
            下一步
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            ruleForm: {

            },
            rules: {

            }
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .register-pc-main{
      width: 100%;
      height: 100vh;
      background: url(../../static/img/bg_pc1.png);
      background-size: cover;
      background-position: center center;
      position: relative;
    }
    .register-pc-warp{
        width: 512px;
        height: 578px;
        padding: 40px 65px;
        background: rgba(35,41,85,1);
        opacity: 0.8;
        border-radius: 0.266667rem;
        position: absolute;
        box-shadow: 1px 1px 14px #153F6C;
        border: 2px solid #153F6C;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      .register-pc-title{
        width: 450px;
        border-bottom: 1px solid #17FFFF;
        margin-bottom: 40px;
      }
      .register-pc-title-tips{
        width:98px;
        font-size:28px;
        font-family:SourceHanSansCN;
        font-weight:500;
        color:rgba(23,255,255,1);
        padding: 0 0 19px;
        border-bottom: 2px solid rgba(23,255,255,1);
      }
      .register-pc-main .el-input--medium .el-input__inner{
        height: 40px;
        background: #343D7A;
        font-size: 16px;
        color: #FAFAFA;
        border: 0;
      }
      .register-pc-main .el-form-item{
        margin-bottom: 20px;
      }
      .register-pc-main .register-btn{
        height: 46px;
        text-align: center;
        line-height: 46px;
        background: linear-gradient(to right, #21F1F5, #354EC8);
        cursor: pointer;
        color: #ffffff;
        font-size: 20px;
      }
</style>
