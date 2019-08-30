<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="new-main">
        <li class="new-title-warp">
          <etf-title titleContent="新闻媒体"></etf-title>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_1.png')"
          newTitle="区块链技术开发生态环境尚未完善，前路茫茫?"
          newContent="区块链技术开发生态环境尚未完善，很多区块链技术开发项目落地存在着生态配套设施的问题。 我们对区块链技术应用的认知存在盲区，导致很多区块链底层技术的完善，特别是扩展性问题的,致很多区块链底层技术的完善..."
          newTime="发布时间：2019-08-21  14:20"
          ></new-card>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_2.png')"
          newTitle="区块链技术开发生态环境尚未完善，前路茫茫?"
          newContent="区块链技术开发生态环境尚未完善，很多区块链技术开发项目落地存在着生态配套设施的问题。 我们对区块链技术应用的认知存在盲区，导致很多区块链底层技术的完善，特别是扩展性问题的,致很多区块链底层技术的完善..."
          newTime="发布时间：2019-08-21  14:20"
          ></new-card>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_3.png')"
          newTitle="区块链技术开发生态环境尚未完善，前路茫茫?"
          newContent="区块链技术开发生态环境尚未完善，很多区块链技术开发项目落地存在着生态配套设施的问题。 我们对区块链技术应用的认知存在盲区，导致很多区块链底层技术的完善，特别是扩展性问题的,致很多区块链底层技术的完善..."
          newTime="发布时间：2019-08-21  14:20"
          ></new-card>
        </li>
        <li>
          <new-card
          :newImg="require('./img/img_4.png')"
          newTitle="区块链技术开发生态环境尚未完善，前路茫茫?"
          newContent="区块链技术开发生态环境尚未完善，很多区块链技术开发项目落地存在着生态配套设施的问题。 我们对区块链技术应用的认知存在盲区，导致很多区块链底层技术的完善，特别是扩展性问题的,致很多区块链底层技术的完善..."
          newTime="发布时间：2019-08-21  14:20"
          ></new-card>
        </li>
        <el-pagination
          :background='true'
          prev-text="上一页"
          next-text="下一页"
          layout="prev, pager, next"
          :total="1000">
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
  }
</style>
