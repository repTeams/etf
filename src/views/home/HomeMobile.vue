<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-30 19:24:58
-->
<template>
    <div class="home-bg">
        <section class="first-screen">
            <div class="first-screen-container">
                <h1>{{$t('home.firstScreen.title')}}</h1>
                <p>{{$t('home.firstScreen.subTitle')}}</p>
                <img src="../../static/img/home/img_down.png"
                    alt="向下"
                    srcset="../../static/img/home/img_down@2x.png 2x"
                    width="44px" height="36px">
            </div>
        </section>
        <section class="token-bank screen">
            <h1 class="half-border screen-title">{{$t('home.tokenBank.title')}}</h1>
            <p class="screen-description">{{$t('home.tokenBank.description')}}</p>
            <div class="token-bank-mobile">
                <img src="../../static/img/home/img_mobile.png"
                    alt="手机"
                    srcset="../../static/img/home/img_mobile@2x.png 2x">
                <div>
                    <button class="btn-mobile-download btn-ios">
                        <img src="../../static/img/home/ios.png"
                                alt="ios"
                                srcset="../../static/img/home/ios@2x.png 2x"
                                width="28px" height="32px">
                        {{$t('home.tokenBank.iosDownload')}}
                    </button>
                    <button class="btn-mobile-download btn-android">
                        <img src="../../static/img/home/android.png"
                                alt="android"
                                srcset="../../static/img/home/android@2x.png 2x"
                                width="30px" height="36px">
                        {{$t('home.tokenBank.androidDownload')}}
                    </button>
                </div>
            </div>
        </section>
        <section class="white-paper screen">
            <h1 class="half-border screen-title">{{$t('home.whitePaper.title')}}</h1>
            <p class="screen-description">{{$t('home.whitePaper.description')}}</p>
            <button class="btn-mobile-download btn-ios">
                <img src="../../static/img/home/ios.png"
                        alt="ios"
                        srcset="../../static/img/home/ios@2x.png 2x"
                        width="28px" height="32px">
                {{$t('home.tokenBank.iosDownload')}}
            </button>
            <img class="white-paper-img-bg" src="../../static/img/home/img_whitepaper.png"
                alt="白皮书"
                srcset="../../static/img/home/img_whitepaper@2x.png 2x, ../../static/img/home/img_whitepaper@2x.png 3x"
                width="687px" height="627px">
        </section>
        <section class="project-introduction screen">
            <h1 class="half-border screen-title">{{$t('home.projectIntroduction.title')}}</h1>
            <ul>
                <li v-for="(item, index) in $t('home.projectIntroduction.section')" :key="index">
                    <h1>{{item.title}}</h1>
                    <template v-if="item.description.length > 0">
                        <p v-for="(msg, index) in item.description" :key="index">{{msg}}</p>
                    </template>
                </li>
            </ul>
        </section>
        <section class="currency-introduction screen">
            <h1 class="half-border screen-title">{{$t('home.currencyIntroduction.title')}}</h1>
            <ul>
                <li v-for="(item, index) in $t('home.currencyIntroduction.section')" :key="index">
                    <h1>
                        <!-- 发行全球通用双卡 -->
                        <img v-if="index === 0" src="../../static/img/home/icon_doubleCard.png"
                            :alt="item.title"
                            srcset="../../static/img/home/icon_doubleCard@2x.png 2x"
                            width="87px" height="94px">
                        <!-- STO -->
                        <img v-if="index === 1" src="../../static/img/home/icon_STO.png"
                            :alt="item.title"
                            srcset="../../static/img/home/icon_STO@2x.png 2x"
                            width="87px" height="87px">
                        <!-- 数字资产 -->
                        <img v-if="index === 2" src="../../static/img/home/icon_digitalAssets.png"
                            :alt="item.title"
                            srcset="../../static/img/home/icon_digitalAssets@2x.png 2x"
                            width="94px" height="87px">
                        <!-- 活期理财 -->
                        <img v-if="index === 3" src="../../static/img/home/icon_manageMoney.png"
                            :alt="item.title"
                            srcset="../../static/img/home/icon_manageMoney@2x.png 2x"
                            width="87px" height="87px">
                        <!-- 对冲基金 -->
                        <img v-if="index === 4" src="../../static/img/home/icon_foundation.png"
                            :alt="item.title"
                            srcset="../../static/img/home/icon_foundation@2x.png 2x"
                            width="87px" height="87px">
                        <!-- 柱形图标 -->
                        <img v-if="index === 5" src="../../static/img/home/icon_column.png"
                            :alt="item.title"
                            srcset="../../static/img/home/icon_column@2x.png 2x"
                            width="87px" height="94px">
                        {{item.title}}
                    </h1>
                    <template v-if="item.description.length > 0">
                        <p v-for="(msg, index) in item.description" :key="index">{{msg}}</p>
                    </template>
                </li>
            </ul>
        </section>
        <section class="product-advantage">
            <h1>
                <p>
                    {{$t('home.productAdvantage.question')}}
                    <img src="../../static/img/home/img_question.png"
                    alt="question"
                    srcset="../../static/img/home/img_question@2x.png 2x"
                    width="132px" height="136px">
                </p>
                <p>ETF TOKEN BANK？</p>
            </h1>
            <ul>
                <li>{{$t('home.productAdvantage.title')}}：</li>
                <li v-for="(item, index) in $t('home.productAdvantage.advantage')" :key="index">
                    {{item}}
                </li>
            </ul>
            <img src="../../static/img/home/img_ETF.png"
                alt="ETF"
                srcset="../../static/img/home/img_ETF@2x.png 2x"
                width="559px" height="402px">
        </section>
        <img v-if="isScrollTop" src="../../static/img/home/icon_up.png"
            alt="up"
            srcset="../../static/img/home/icon_up@2x.png 2x"
            width="114px" height="114px"
            @click="scrollTop">
    </div>
</template>

<script>
export default {
    name: 'homeMobile',
    data () {
        return {
            isScrollTop: false
        };
    },
    mounted () {
        this.isCanScrollToTop();
        window.addEventListener('scroll', this.isCanScrollToTop);
    },
    destroyed () {
        window.removeEventListener('scroll', this.isCanScrollToTop);
    },
    methods: {
        isCanScrollToTop () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let browserHeight = window.outerHeight;
            if (scrollTop > browserHeight) {
                this.isScrollTop = true;
            } else {
                this.isScrollTop = false;
            }
        },
        scrollTop () {
            let timer = setInterval(() => {
                document.body.scrollTop -= 400;
                document.documentElement.scrollTop -= 400;
                if (document.body.scrollTop <= 0 && document.documentElement.scrollTop <= 0) {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    clearInterval(timer);
                }
            }, 40);
        }
    }
};
</script>
<style scoped lang="scss">
    @import './Home.scss';
    .first-screen {
        padding-top: 20px;
        img {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            animation: slideDown .8s infinite cubic-bezier(0.4, 0, 1, 1);
            cursor: pointer;
        }
    }
    @media only screen and (min-width: 751px) {
        .home-bg {
            background-image: url('../../static/img/home/bg_home_pc.png');
        }
        .first-screen .first-screen-container {
            background-image: url('../../static/img/home/bg_mobile_pc.png');
            background-size: contain;
            background-position: center 10%;
        }
    }

    /* 如果设备像素大于等于2，则用2倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min--moz-device-pixel-ratio: 2) {
        .home-bg {
            background-image: url('../../static/img/bg_mobile@2x.png');
        }
        .first-screen-container {
            background-image: url('../../static/img/home/bg_mobile@2x.png');
        }
    }
    /* 如果设备像素大于等于3，则用3倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 3),
    screen and (min--moz-device-pixel-ratio: 3) {
        .home-bg {
            background-image: url('../../static/img/bg_mobile@2x.png');
        }
        .first-screen .first-screen-container {
            background-image: url('../../static/img/home/bg_mobile@2x.png');
            background-size: contain;
        }
        .white-paper {
            .white-paper-img-bg {
                top: 56%;
                left: 46%;
                transform: translateX(-50%);
            }
        }
    }
</style>
