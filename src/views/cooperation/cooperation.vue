<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:15:06
-->
<template>
    <ul class="cooperation-main">
        <li class="title-warp">
          <etf-title :titleContent="$t('cooperation.title')"></etf-title>
        </li>
        <li class="title-img-warp">
          <title-img :titleContent="$t('cooperation.first')"></title-img>
        </li>
        <li class="box cooperation-content-warp cooperation-first-warp cooperation-box-warp">
          <content-first
            :cooperationTitle="$t('cooperation.financingTitle')"
            :cooperationContent="$t('cooperation.financingContent')"
            :cooperationBg="require('./img/img_1.png')">
          </content-first>
          <content-first
            :cooperationTitle="$t('cooperation.ABSTitle')"
            :cooperationContent="$t('cooperation.ABSContent')"
            :cooperationBg="require('./img/img_2.png')">
          </content-first>
          <content-first
            :cooperationTitle="$t('cooperation.IoTTitle')"
            :cooperationContent="$t('cooperation.IoTContent')"
            :cooperationBg="require('./img/img_3.png')">
          </content-first>
          <content-first
            :cooperationTitle="$t('cooperation.chainTitle')"
            :cooperationContent="$t('cooperation.chainContent')"
            :cooperationBg="require('./img/img_4.png')">
          </content-first>
        </li>
        <li class="title-img-warp">
          <title-img :titleContent="$t('cooperation.TaifangTitle')"></title-img>
        </li>
        <li class="cooperation-content-warp cooperation-second-warp box cooperation-box-warp">
          <div class="tai-fang-warp">
            <tai-fang></tai-fang>
          </div>
        </li>
        <li class="title-img-warp">
          <title-img :titleContent="$t('cooperation.supportTitle')"></title-img>
        </li>
        <li class="box cooperation-content-warp cooperation-box-warp">
          <consortium-support
          :cooperationTitle="$t('cooperation.decentTitle')"
          :cooperationContent="$t('cooperation.decentContent')"
          :cooperationBg="require('./img/logo-decent.png')"
          className="decent"></consortium-support>
          <consortium-support
          :cooperationTitle="$t('cooperation.pantheonTitle')"
          :cooperationContent="$t('cooperation.pantheonContent')"
          :cooperationBg="require('./img/logo-pantheon.png')"
          className="pantheon"></consortium-support>
        </li>
        <li class="title-img-warp">
          <title-img :titleContent="$t('cooperation.ETFTitle')"></title-img>
        </li>
        <li class="box cooperation-content-warp cooperation-box-warp">
          <consortium-support
          :cooperationTitle="$t('cooperation.sccTitle')"
          :cooperationContent="$t('cooperation.sccContent')"
          :cooperationBg="require('./img/logo-scc.png')"
          className="scc"></consortium-support>
          <consortium-support
          :cooperationTitle="$t('cooperation.huusionTitle')"
          :cooperationContent="$t('cooperation.huusionContent')"
          :cooperationBg="require('./img/logo-huusion.png')"
          className="huusion"></consortium-support>
          <consortium-support
          :cooperationTitle="$t('cooperation.conturionTitle')"
          :cooperationContent="$t('cooperation.conturionContent')"
          :cooperationBg="require('./img/logo-conturion.png')"
          className="conturion"></consortium-support>
          <consortium-support
          :cooperationTitle="$t('cooperation.venturesTitle')"
          :cooperationContent="$t('cooperation.venturesContent')"
          :cooperationBg="require('./img/logo-ventures.png')"
          className="ventures"></consortium-support>
          <consortium-support
          :cooperationTitle="$t('cooperation.wehTitle')"
          :cooperationContent="$t('cooperation.wehContent')"
          :cooperationBg="require('./img/logo-weh.png')"
          className="weh"></consortium-support>
        </li>
        <li>
          <title-img :titleContent="$t('cooperation.ETFPenpleTitle')"></title-img>
        </li>
        <li class="etf-people-warp cooperation-content-warp box cooperation-box-warp">
          <people-card
          penpleName="Yaros Sivokhin"
          :penpleposition="$t('cooperation.YarosPosition')"
          :peopleBrief="$t('cooperation.YarosBrief')"
          :peopleImg="require('./img/YarosSivokhin.png')"
          ></people-card>
          <people-card
          penpleName="Marc Howland"
          :penpleposition="$t('cooperation.MarcPosition')"
          :peopleBrief="$t('cooperation.MarcBrief')"
          :peopleImg="require('./img/Marc.png')"
          ></people-card>
          <people-card
          penpleName="Nick Olender"
          :penpleposition="$t('cooperation.NickPosition')"
          :peopleBrief="$t('cooperation.NickBrief')"
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
    // background: url('../../static/img/bg_pc.png');
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
  @media screen and (max-width: 1200px) {
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
  @media only screen and (-webkit-min-device-pixel-ratio: 3),
    screen and (min--moz-device-pixel-ratio: 3) {
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
