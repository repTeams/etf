<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-02 21:49:59
-->
<template>
    <ul class="new-main">
        <li class="new-title-warp">
          <etf-title :titleContent="$t('new.title')"></etf-title>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_1.png')"
          :newTitle="$t('new.firstTitle')"
          :newContent="$t('new.firstContent')"
          :newTime="$t('new.firstTime')"
          ></new-card>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_2.png')"
          :newTitle="$t('new.secondTitle')"
          :newContent="$t('new.secondContent')"
          :newTime="$t('new.secondTime')"
          ></new-card>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_3.png')"
          :newTitle="$t('new.thirdTitle')"
          :newContent="$t('new.thirdContent')"
          :newTime="$t('new.thirdTime')"
          ></new-card>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_4.png')"
          :newTitle="$t('new.fourthTitle')"
          :newContent="$t('new.fourthContent')"
          :newTime="$t('new.fourthTime')"
          ></new-card>
        </li>
        <el-pagination
          :background='true'
          :prev-text="$t('new.prevTex')"
          :next-text="$t('new.nextTex')"
          layout="prev, pager, next"
          :total="30">
        </el-pagination>
    </ul>
</template>

<script>
import etfTitle from '@/components/etf-title/etf-title';
import newCard from './new-components/new-card';
export default {
    name: 'new',
    components: {
        etfTitle,
        newCard
    },
    data () {
        return {

        };
    }
};
</script>
<style lang="scss">
  .new-main{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 43px 102px;
    .new-title-warp{
      margin-bottom: 156px;
    }
    .el-pagination{
      text-align: center;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
      background: transparent;
      border:1px solid #17FFFF;
      color: #17FFFF;
    }
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
      background: transparent;
      color: #17FFFF;
    }
    .el-pager li{
      font-size: 18px;
    }
  }
</style>
