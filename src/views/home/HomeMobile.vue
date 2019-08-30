<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-30 13:42:05
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
            <h1 class="half-border">{{$t('home.tokenBank.title')}}</h1>
            <p>{{$t('home.tokenBank.description')}}</p>
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
            <h1 class="half-border">{{$t('home.whitePaper.title')}}</h1>
            <p>{{$t('home.whitePaper.description')}}</p>
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
            <h1 class="half-border">{{$t('home.projectIntroduction.title')}}</h1>
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
            <h1 class="half-border">{{$t('home.currencyIntroduction.title')}}</h1>
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
    /* 公用样式 */
    .screen {
        text-align: center;
        > h1 {
            display: inline-block;
            color: #17FFFF;
            font-size: 64px;
            font-weight: normal;
            margin-bottom: 60px;
            letter-spacing: 6px;
        }
        > p {
            text-align: center;
            font-size: 28px;
            font-weight: 400;
            color: #fff;
        }
    }

    .btn-mobile-download {
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -webkit-transition: .1s;
        transition: .1s;
        font-weight: 500;
        padding: 12px 20px;
        width: 290px;
        height: 72px;
        box-shadow: 0px 10px 27px 0px rgba(8,12,76,0.59);
        border-radius: 36px;
        font-size: 28px;
        border: 0;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }
        &:focus, &:hover {
            color: #409EFF;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
        img {
            margin-right: 12px;
        }
    }

    .btn-ios {
        background: linear-gradient(-90deg,rgba(1,234,204,1),rgba(53,78,200,1));
    }

    .half-border {
        background: linear-gradient(to left, #17FFFF, #17FFFF) left top no-repeat,
            linear-gradient(to bottom, #17FFFF, #17FFFF) left top no-repeat,
            linear-gradient(to left, #17FFFF, #17FFFF) right bottom no-repeat,
            linear-gradient(to top, #17FFFF, #17FFFF) right bottom no-repeat;
        background-size: 2px 50px, 170px 2px;
    }

    section {
        max-width: 1200px;
        margin: 0 auto;
    }

    /* 各自样式 */
    .home-bg {
        background-image: url('../../static/img/bg_mobile.png');
        background-repeat: repeat-y;
        background-size: 100% 1208px;
        /* 加上字间距 */
        p {
            letter-spacing: 2px;
        }
        > img {
            position: fixed;
            bottom: 60px;
            right: 24px;
        }
    }

    .first-screen {
        position: relative;
        text-align: center;
        padding-top: 20px;
        color: #fff;
        .first-screen-container {
            background-image: url('../../static/img/home/bg_mobile.png');
            height: 1208px;
            background-repeat: no-repeat;
            padding-top: 200px;
        }
        h1 {
            font-size: 64px;
        }
        p {
            width: 53.2%;
            margin: 0 auto;
            font-size: 32px;
            margin-top: 36px;
            line-height: 44px;
        }
        img {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            animation: slideDown .8s infinite cubic-bezier(0.4, 0, 1, 1);
            cursor: pointer;
        }
    }

    .token-bank {
        h1 {
            padding: 40px 46px 54px;
            margin-top: 80px;
            letter-spacing: 4px;
        }
        p {
            width: 91.2%;
            margin: 0 auto 58px;
            line-height: 44px;
        }
        .token-bank-mobile {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 30px;
            .btn-android {
                margin-top: 32px;
                background:linear-gradient(90deg,rgba(52,80,200,1),rgba(133,59,255,1));
            }
        }
    }

    .white-paper {
        position: relative;
        z-index: 1;
        height: 1000px;
        h1 {
            padding: 40px 42px;
            margin-top: 120px;
        }
        p {
            width: 90.27%;
            line-height: 42px;
            margin: 0 auto 60px;
        }
        .btn-ios {
            margin: 0 auto;
        }
        .white-paper-img-bg {
            position: absolute;
            top: 38%;
            left: 0;
            z-index: -1;
        }
    }

    .project-introduction {
        > h1 {
            padding: 40px 42px;
            margin-top: 36px;
            margin-bottom: 62px;
        }
        > ul {
            li {
                background: #232955;
                padding: 38px 32px 32px;
                text-align: left;
                h1 {
                    font-size: 30px;
                    color: #17FFFF;
                    font-weight: 400;
                    line-height: 40px;
                    letter-spacing: 4px;
                    + p {
                        margin-top: 36px;
                    }
                }
                p {
                    font-size: 28px;
                    color: #FFFFFF;
                    opacity: .6;
                    line-height: 42px;
                }
            }
            li:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }

    .currency-introduction {
        > h1 {
            padding: 36px 40px 48px 46px;
            margin-top: 120px;
            margin-bottom: 55px;
        }
        > ul {
            li {
                background: #232955;
                padding: 40px 32px 33px 40px;
                text-align: left;
                h1 {
                    font-size: 30px;
                    color: #17FFFF;
                    font-weight: 400;
                    line-height: 40px;
                    letter-spacing: 4px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    img {
                        margin-right: 32px;
                    }
                }
                p {
                    margin-top: 40px;
                    font-size: 28px;
                    color: #FFFFFF;
                    opacity: .6;
                    line-height: 42px;
                    letter-spacing: 4px;
                }
            }
            li:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }

    .product-advantage {
        text-align: center;
        > h1 {
            margin-top: 140px;
            margin-bottom: 67px;
            display: inline-block;
            font-size: 64px;
            color:rgba(23,255,255,1);
            line-height:84px;
            background: linear-gradient(135deg,rgba(29,227,243,1) 0%, rgba(67,64,174,1) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color:transparent;
            > p {
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                letter-spacing: 0;
                font-weight: bold;
                > img {
                    margin-left: 5px;
                }
            }
        }
        > ul {
            padding: 0 40px;
            li {
                font-size: 28px;
                text-align: left;
                color: #DADDDF;
                line-height: 58px;
                letter-spacing: 2px;
                &:first-child {
                    margin-bottom: 30px;
                    color: #85F3F5;
                    font-size: 30px;
                }
            }
        }
        > img {
            margin-bottom: 80px;
        }
    }

    @keyframes slideDown {
        0%, 100% {
            bottom: 20px;
        }
        50% {
            bottom: 10px;
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
