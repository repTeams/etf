<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <div class="new-detail-main">
        <etf-title :titleContent="$t('newDetail.title')"></etf-title>
        <div class="new-detail-warp">
          <el-breadcrumb class="meate-warp" separator=">">
            <el-breadcrumb-item>{{$t('newDetail.newAdress')}}</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">{{$t('newDetail.secondAdress')}}</a></el-breadcrumb-item>
            <el-breadcrumb-item class="lost-meate">{{$t('newDetail.newDetail')}}</el-breadcrumb-item>
          </el-breadcrumb>
          <ul class="content-warp">
            <li class="content-title">{{$t('newDetail.newTitle')}}</li>
            <li class="content-title-second">{{$t('newDetail.newTime')}}</li>
            <li class="new-detail-content">
              <p class="new-detail-content-item">{{$t('newDetail.WHBFirst')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB2019')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB1')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB2')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB3')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB4')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB5')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB6')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB7')}}</p>
              <p class="new-detail-content-item">{{$t('newDetail.WHB8')}}</p>
            </li>
            <li class="other-title">
              {{$t('newDetail.LOST')}}
            </li>
            <li class="other-title">
              {{$t('newDetail.NEWX')}}
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import etfTitle from '@/components/etf-title/etf-title';
export default {
    name: 'new-detail-detail',
    components: {
        etfTitle
    },
    data () {
        return {

        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .new-detail-main{
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 101px;
    .new-detail-warp{
      padding: 0 20px;
      .meate-warp{
        margin-top: 150px;
        line-height: 64px;
        height: 64px;
        background: rgba(35,41,85,0.8);
        padding-left: 39px;
        .el-breadcrumb__inner{
          color: #ffffff;
        }
        .el-breadcrumb__inner:hover{
          color: #17FFFF;
        }
        a{
          color: #ffffff;
        }
        a:hover{
          color: #17FFFF;
        }
        .lost-meate{
          .el-breadcrumb__inner{
            color: #17FFFF;
          }
        }
      }
      .content-warp{
        padding: 0 61px 70px;
        margin-top: 20px;
        background: rgba(35,41,85,0.8);
      }
      .content-title{
        font-size: 32px;
        color: #ffffff;
        text-align: center;
        padding: 80px 0 40px;
      }
      .content-title-second{
        font-size: 18px;
        color: #FEFEFE;
        text-align: center;
        padding-bottom: 59px;
        border-bottom: 1px solid #00FFFF;
      }
      .new-detail-content{
        color: #FEFEFF;
        font-size: 16px;
        text-indent: 32px;
        line-height: 34px;
        padding-top: 60px;
      }
      .new-detail-content-item{
        text-align: justify;
        margin-bottom: 50px;
      }
      .other-title{
        font-size: 16px;
        color: #ffffff;
        padding-bottom: 25px;
        cursor: pointer;
      }
      .other-title:hover{
        color: #00FFFF;
      }
    }
  }
</style>
