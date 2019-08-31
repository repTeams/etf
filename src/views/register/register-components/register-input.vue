<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
     <ul class="register-iinput-warp">
        <li class="register-iinput-title">
          <div class="register-iinput-title-tips">{{$t('register.first.title')}}</div>
        </li>
        <li>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
            <el-form-item label="" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('register.first.nameTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('register.first.invitationTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('register.first.passwordTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('register.first.passwordTwoTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('register.first.payTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkPass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="$t('register.first.payTwoTips')"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li class="register-btn" @click="changeNext()">
          {{$t('register.first.newBtnTips')}}
        </li>
        <li class="come-black-warp">
          <span class="come-black-tips" @click="comeBlack()">{{$t('register.first.comeBlack')}}</span>
        </li>
      </ul>
</template>

<script>
export default {
    name: 'register-input',
    data () {
        return {
            ruleForm: {

            },
            rules: {

            }
        };
    },
    methods: {
        changeNext () {
            this.$emit('nextFn', 'second');
        },
        comeBlack () {
            this._jumpOtherUrl('/');
        }
    }
};
</script>

<style lang='scss'>
    .register-iinput-warp{
      width: 512px;
      padding: 40px 65px;
      background: rgba(35,41,85,1);
      opacity: 0.8;
      border-radius: 20px;
      position: absolute;
      box-shadow: 1px 1px 14px #153F6C;
      border: 2px solid #153F6C;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    .register-iinput-title{
      width: 450px;
      border-bottom: 1px solid #17FFFF;
      margin-bottom: 40px;
    }
    .register-iinput-title-tips{
      width:98px;
      font-size:28px;
      font-family:SourceHanSansCN;
      font-weight:500;
      color:rgba(23,255,255,1);
      padding: 0 0 19px;
      border-bottom: 2px solid rgba(23,255,255,1);
    }
    .el-input--medium .el-input__inner{
      height: 40px;
      background: #343D7A;
      font-size: 16px;
      color: #FAFAFA;
      border: 0;
    }
    .el-form-item{
      margin-bottom: 20px;
    }
    .register-btn{
      height: 46px;
      text-align: center;
      line-height: 46px;
      background: linear-gradient(to right, #21F1F5, #354EC8);
      cursor: pointer;
      color: #ffffff;
      font-size: 20px;
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
</style>
