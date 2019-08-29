<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="cooperation-main">
        <li class="title-warp">
          <etf-title titleContent="战略合作伙伴"></etf-title>
        </li>
        <li class="title-img-warp">
          <title-img titleContent="与新加坡政府的合作"></title-img>
        </li>
        <li class="box cooperation-content-warp cooperation-first-warp cooperation-box-warp">
          <content-first
            cooperationTitle="新加坡金管局国际贸易融资平台"
            cooperationContent="平安区块链(WBH)为新加坡金管 局提供国际贸易融资网络的设计、开 发及部署。"
            :cooperationBg="require('./img/img_1.png')">
          </content-first>
          <content-first
            cooperationTitle="WBH智能ABS平台"
            cooperationContent="WBH智能ABS平台利用区块链技术 有效打破了资产证券化市场发展的瓶 颈。"
            :cooperationBg="require('./img/img_2.png')">
          </content-first>
          <content-first
            cooperationTitle="智慧环保平台"
            cooperationContent="通过连接IoT传感器等物联网设备， 将搜集到的环境数据记录到区块链， 保证了数据的真实性不可篡改"
            :cooperationBg="require('./img/img_3.png')">
          </content-first>
          <content-first
            cooperationTitle="再保险区块链平台"
            cooperationContent="再保险区块链平台将再保交易双方连接到区块链上，实现了保单数据的不可篡改，保证了在日后产生保费时有真实的可追溯数据。"
            :cooperationBg="require('./img/img_4.png')">
          </content-first>
        </li>
        <li class="title-img-warp">
          <title-img titleContent="新加坡以太坊基金会"></title-img>
        </li>
        <li class="cooperation-content-warp cooperation-second-warp box cooperation-box-warp">
          <div class="tai-fang-warp">
            <tai-fang></tai-fang>
          </div>
        </li>
        <li class="title-img-warp">
          <title-img titleContent="国际财团支持"></title-img>
        </li>
        <li class="box cooperation-content-warp cooperation-box-warp">
          <consortium-support
          cooperationTitle="德迅投资"
          cooperationContent="由腾讯控股的联合创始人曾李青于2007年创立。作为一家天使投资公司，主要集中于互联网、无线、互动娱乐等高科技领域。德迅投资的团队来自于腾讯等公司的高层，具有IT、通讯、金融等技术背景及丰富的管理、风险投资运作经验。出色的业绩及业内的美誉，赢得了创业者及投资者的信赖。"
          :cooperationBg="require('./img/logo-decent.png')"
          className="decent"></consortium-support>
          <consortium-support
          cooperationTitle="磐石基金"
          cooperationContent="是一家全球领先的私募股权一级与二级中的基金管理机构。其旗下管理资金达236亿美元，在全球范围内投资约700家私募基金，拥有119个全球投资小组和68名投资专家。磐石基金于2004年加入罗素投资集团。"
          :cooperationBg="require('./img/logo-pantheon.png')"
          className="pantheon"></consortium-support>
        </li>
        <li class="title-img-warp">
          <title-img titleContent="ETF基金"></title-img>
        </li>
        <li class="box cooperation-content-warp cooperation-box-warp">
          <consortium-support
          cooperationTitle="银链资本"
          cooperationContent="成立于2017年，是一家关注比特币、区块链、金融科技的天使基金。星链资本团队成员来自区块链技术、金融、投资银行、加密数字货币以及社交媒体的专家"
          :cooperationBg="require('./img/logo-scc.png')"
          className="scc"></consortium-support>
          <consortium-support
          cooperationTitle="鹄胜资本管理私人有限公司(“鹄胜资本”)"
          cooperationContent="是一个持续发展的基金管理公司，亚胜亚洲增长基是为了投资在亚洲，特别是中国及东南亚一带的增长阶段公司，而设立的私募投资基金"
          :cooperationBg="require('./img/logo-huusion.png')"
          className="huusion"></consortium-support>
          <consortium-support
          cooperationTitle="胜廷投资管理公司(CIM)"
          cooperationContent="是亚洲一家主要投资于中小型企业的私募股权基金公司，总部设于新加坡并在香港和上海设有办事处，提供一站式的金融服务"
          :cooperationBg="require('./img/logo-conturion.png')"
          className="conturion"></consortium-support>
          <consortium-support
          cooperationTitle="Jungle Ventures"
          cooperationContent="是一家新加坡地区的投资于全球范围内的风险投资公司，向早期的创业型公司提供早期的投资和商业组织架构的建设。"
          :cooperationBg="require('./img/logo-ventures.png')"
          className="ventures"></consortium-support>
          <consortium-support
          cooperationTitle="交易所交易基金（Exchange Traded Funds，简称ETF）"
          cooperationContent="，是一种在交易所上市交易的、基金份额可变的一种开放式基金 ;2、ETF基金由四大财团与星美集团联合推出，以数字通证指数为投资对象的ETF基金，通过构建数字通证投资组合，以追踪数字通证指数表现，为投资者带来.盈利回报。"
          :cooperationBg="require('./img/logo-weh.png')"
          className="weh"></consortium-support>
        </li>
        <li>
          <title-img titleContent="ETF基金人员介绍"></title-img>
        </li>
        <li class="etf-people-warp cooperation-content-warp box cooperation-box-warp">
          <people-card
          penpleName="Yaros Sivokhin"
          penpleposition="联合创始人"
          peopleBrief="毕业于美国哥伦比亚大学数据统计专业，曾就职于 Fortune 500 强国际知名企业，擅长互联网大数据分析、数据挖掘及智能合约设计。"
          :peopleImg="require('./img/YarosSivokhin.png')"
          ></people-card>
          <people-card
          penpleName="Marc Howland"
          penpleposition="CEO"
          peopleBrief="Marc 是 Keyturn 的联合创始⼈兼业务开发⼈员，致力于运用区块链技术建⽴供应链中心产品。他曾供职于Goldman Sachs & The Carlyle Group，并对于私人产权以及投资银行有相当丰富的经验。他是 Brown 的经济学学士，并正在哈弗商学院就读工商管理学硕士学位。"
          :peopleImg="require('./img/Marc.png')"
          ></people-card>
          <people-card
          penpleName="Nick Olender"
          penpleposition="首席运营官"
          peopleBrief="毕业于卡内基梅隆大学电子工程博士，8 年科技行业国际营销经验，专注于国际商业策略，尤其是业务⾦融和技术应用程序领域。"
          :peopleImg="require('./img/Nick.png')"
          ></people-card>
        </li>
    </ul>
</template>

<script>
import etfTitle from '@/components/etf-title/etf-title';
import titleImg from '@/components/etf-title-img/etf-title-img';
import contentFirst from './cooperation-components/content-first';
import taiFang from './cooperation-components/tai-fang';
import consortiumSupport from './cooperation-components/consortium-support';
import peopleCard from './cooperation-components/people-card';
export default {
    name: 'cooperation',
    components: {
        etfTitle,
        titleImg,
        contentFirst,
        taiFang,
        consortiumSupport,
        peopleCard
    },
    data () {
        return {

        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cooperation-main{
    background: url('../../static/img/bg_pc.png');
    .title-warp{
      padding:100px 0 152px;
    }
    .title-img-warp{
      padding-bottom: 80px;
    }
    .cooperation-content-warp{
      max-width: 1200px;
      margin: 0 auto;
    }
    .cooperation-first-warp{
      margin-bottom: 84px;
    }
    .cooperation-second-warp{
      position: relative;
      margin-bottom: 102px;
    }
    .cooperation-box-warp{
      flex-wrap:wrap;
      justify-content: space-between;
    }
    .etf-people-warp{
      padding-bottom: 160PX;
    }
    .tai-fang-warp{
      width: 100%;
    }
  }
  @media screen and (max-width: 867px) {
    .cooperation-main{
      background: url('../../static/img/bg_mobile.png');
      background-size: 100%;
      height: 100vh;
      overflow-y: scroll;
    }
    .cooperation-main .cooperation-box-warp {
        justify-content:center;
      .etf-people-item{
        width: 80%;
        max-width: 604px;
      }
      .tai-fang-warp{
        width: 88%;
      }
    }
    .right-content{
      position: relative;
      .right-content-item{
        padding: 30px 40px 30px 50px;
      }
    }
  }
</style>
