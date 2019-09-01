<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="register-mnemonic-main">
      <li class="mnemonics-title">{{$t('register.third.title')}}</li>
      <li class="mnemonics-title-second">
        {{$t('register.third.titleSecond')}}
      </li>
      <li class="textarea-warp">
        <textarea v-model="textareaTex" class="textarea-content" disabled :placeholder="$t('register.third.inputTips')" cols="5" rows="10"></textarea>
      </li>
      <li class="mnenmonics-warp box">
        <div class="mnenmonics-ben-item" :class="{'mnenmonics-ben-itemed': userSlectList.indexOf(item)>=0}" v-for="item in selectList" :key="item" @click="selectClick(item)">{{item}}</div>
      </li>
      <li class="next-btn" @click="changeLost()">返回查看</li>
      <li class="next-btn" @click="verification()">{{$t('register.third.newBtnTips')}}</li>
    </ul>
</template>

<script>
export default {
    name: 'register-mnemonics',
    props: ['inputMessageWords'],
    data () {
        return {
            steep: 'first',
            userWords: '',
            selectList: [],
            userSlectList: [],
            textareaTex: ''
        };
    },
    methods: {
        selectClick (item) {
            let index = this.userSlectList.indexOf(item);
            if (index >= 0) {
                this.userSlectList.splice(index, 1);
            } else {
                this.userSlectList.push(item);
            }
            console.log(item);
            this.textareaTex = this.userSlectList.join(',');
        },
        changeLost () {
            this.$emit('nextFn', 'second');
        },
        /*
        * 打乱数组顺序
        */
        randomsort (a, b) {
            return Math.random() > 0.5 ? -1 : 1;
        },
        verification () {
            let userSlectList = this.userSlectList.join(',');
            if (userSlectList === this.userWords) {
                console.log('要帮忙注册啦');
                this.changeNext();
            } else {
                this.$message({
                    message: '顺序有点不对哦,返回查看一下吧',
                    type: 'warning'
                });
            }
        },
        changeNext () {
            this.$emit('nextFn', 'success');
        },
        fnSelectList () {
            let arr = this.userWords.split(',');
            this.selectList = arr.sort(this.randomsort);
        }
    },
    watch: {
        inputMessageWords (val) {
            console.log(val);
            this.userWords = val;
            this.fnSelectList();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./register-mnemonics.scss";
  .register-mnemonic-main{
    .mnenmonics-warp{
      width: 584px;
      flex-wrap:wrap;
      margin: 0 auto;
      justify-content:space-between;
      padding-top: 20px;
    }
    .mnenmonics-ben-item{
      cursor: pointer;
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #343D7A;
      margin-bottom: 15px;
    }
    .mnenmonics-ben-itemed{
      color: #17FFFF;
      border: 1px solid #17FFFF;
    }
    .mnenmonics-ben-item:hover{
      color: #17FFFF;
      border: 1px solid #17FFFF;
    }
    .next-btn{
      margin-top: 20px;
    }
  }
</style>
