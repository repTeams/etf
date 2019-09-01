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
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
            <el-form-item label="" prop="userName">
              <el-input type="text" v-model="ruleForm.userName" autocomplete="off" :placeholder="$t('register.first.nameTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off" :placeholder="$t('register.first.passwordTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="passwordTwo">
              <el-input type="password" v-model="ruleForm.passwordTwo" autocomplete="off" :placeholder="$t('register.first.passwordTwoTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="payPassWord">
              <el-input type="password" v-model="ruleForm.payPassWord" autocomplete="off" :placeholder="$t('register.first.payTips')"></el-input>
            </el-form-item>
            <el-form-item label="" prop="payPassWordTwo">
              <el-input type="password" v-model="ruleForm.payPassWordTwo" autocomplete="off" :placeholder="$t('register.first.payTwoTips')"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input type="text" v-model="ruleForm.inviteCode" autocomplete="off" :placeholder="$t('register.first.invitationTips')"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li class="register-btn" @click="register()">
          {{$t('register.first.newBtnTips')}}
        </li>
        <li class="come-black-warp">
          <span class="come-black-tips" @click="comeBlack()">{{$t('register.first.comeBlack')}}</span>
        </li>
      </ul>
</template>

<script>
// , checkEmail
import { isMob, isValidatePassword } from '@/filters/filters';
export default {
    name: 'register-input',
    data () {
        var userName = (rule, value, callback) => {
            this.ruleForm.isuserName = isMob(value);
            if (!this.ruleForm.isuserName) {
                this.$message({
                    message: '请输入正确的手机号码',
                    type: 'warning'
                });
            } else {
                callback();
            }
        };
        var password = (rule, value, callback) => {
            this.ruleForm.isRulePassword = isValidatePassword(value);
            if (!this.ruleForm.isRulePassword) {
                this.$message({
                    message: '密码由8-20个字符，必由英文字母（区分大小写），和数字或符号组成',
                    type: 'warning'
                });
            } else {
                callback();
            }
        };
        var passwordTwo = (rule, value, callback) => {
            this.ruleForm.isRulePasswordTwo = this.ruleForm.passwordTwo === this.ruleForm.password ? 1 : 0;
            if (!this.ruleForm.isRulePasswordTwo) {
                this.$message({
                    message: '两次密码不一致',
                    type: 'warning'
                });
            } else {
                callback();
            }
        };
        var payPassWord = (rule, value, callback) => {
            this.ruleForm.ispayPassWord = isValidatePassword(value);
            if (!this.ruleForm.ispayPassWord) {
                this.$message({
                    message: '支付密码由8-20个字符，必由英文字母（区分大小写），和数字或符号组成',
                    type: 'warning'
                });
            } else {
                callback();
            }
        };
        var payPassWordTwo = (rule, value, callback) => {
            this.ruleForm.ispayPassWordTwo = this.ruleForm.payPassWord === this.ruleForm.payPassWordTwo ? 1 : 0;
            if (!this.ruleForm.ispayPassWordTwo) {
                this.$message({
                    message: '两次支付密码不一致',
                    type: 'warning'
                });
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                userName: '',
                isuserName: false,
                inviteCode: '',
                password: '',
                isRulePassword: false,
                passwordTwo: '',
                isRulePasswordTwo: false,
                payPassWord: '',
                ispayPassWord: false,
                payPassWordTwo: '',
                ispayPassWordTwo: false
            },
            rules: {
                userName: [
                    { validator: userName, trigger: 'blur' }
                ],
                password: [
                    { validator: password, trigger: 'blur' }
                ],
                passwordTwo: [
                    { validator: passwordTwo, trigger: 'blur' }
                ],
                payPassWord: [
                    { validator: payPassWord, trigger: 'blur' }
                ],
                payPassWordTwo: [
                    { validator: payPassWordTwo, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        register () {
            console.log(this.ruleForm.isuserName, this.ruleForm.isRulePassword, this.ruleForm.isRulePasswordTwo, this.ruleForm.ispayPassWord, this.ruleForm.ispayPassWordTwo);
            if (!this.ruleForm.isuserName || !this.ruleForm.isRulePassword || !this.ruleForm.isRulePasswordTwo || !this.ruleForm.ispayPassWord || !this.ruleForm.ispayPassWordTwo) {
                this.$message({
                    message: '请检查您的注册信息',
                    type: 'warning'
                });
                return;
            }
            console.log('要注册啦');
            this.changeNext();
        },
        changeNext () {
            let obj = {
                userName: this.ruleForm.userName,
                password: this.ruleForm.password,
                payPwd: this.ruleForm.payPassWord,
                inviteCode: this.ruleForm.inviteCode,
                words: ''
            };
            this.$emit('nextFn', 'second', obj);
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
