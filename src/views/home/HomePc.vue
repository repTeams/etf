<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-02 18:28:50
-->
<template>
    <div class="home-bg">
        <section class="first-screen pc-screen">
            <div class="science-description">
                <h1>{{$t('home.firstScreen.title')}}</h1>
                <p>{{$t('home.firstScreen.subTitle')}}</p>
            </div>
            <img class="img-science" src="../../static/img/home/bg_mobile_pc.png"
                alt="科技改变未来"
                srcset="../../static/img/home/bg_mobile_pc@2x.png 2x, ../../static/img/home/bg_mobile_pc@2x.png 3x">
            <!-- <img class="img-up" src="../../static/img/home/img_down.png"
                alt="向下"
                srcset="../../static/img/home/img_down@2x.png 2x"
                width="44px" height="36px"> -->
        </section>
        <section class="token-bank screen pc-screen">
            <div class="token-bank-mobile">
                <img src="../../static/img/home/img_mobile_pc.png"
                    alt="手机"
                    srcset="../../static/img/home/img_mobile_pc@2x.png 2x">
                <div>
                    <h1 class="half-border screen-title">{{$t('home.tokenBank.title')}}</h1>
                    <p class="screen-description">{{$t('home.tokenBank.description')}}</p>
                    <button class="btn-mobile-download btn-ios" @click="download('ios')">
                        <i class="icon-ios"></i>
                        <!-- <img src="../../static/img/home/ios.png"
                                alt="ios"
                                srcset="../../static/img/home/ios@2x.png 2x"
                                width="28px" height="32px"> -->
                        {{$t('home.tokenBank.iosDownload')}}
                    </button>
                    <button class="btn-mobile-download btn-android" @click="download('android')">
                        <i class="icon-android"></i>
                        <!-- <img src="../../static/img/home/android.png"
                                alt="android"
                                srcset="../../static/img/home/android@2x.png 2x"
                                width="30px" height="36px"> -->
                        {{$t('home.tokenBank.androidDownload')}}
                    </button>
                </div>
            </div>
        </section>
        <section class="white-paper screen pc-screen">
            <div class="white-paper-left">
                <h1 class="half-border screen-title">{{$t('home.whitePaper.title')}}</h1>
                <p class="screen-description">{{$t('home.whitePaper.description')}}</p>
                <button class="btn-mobile-download btn-ios" @click="download('ios')">
                    <i class="icon-ios"></i>
                    <!-- <img src="../../static/img/home/ios.png"
                            alt="ios"
                            srcset="../../static/img/home/ios@2x.png 2x"
                            width="28px" height="32px"> -->
                    {{$t('home.tokenBank.iosDownload')}}
                </button>
            </div>
            <img class="white-paper-img-bg" src="../../static/img/home/img_whitepaper.png"
                alt="白皮书"
                srcset="../../static/img/home/img_whitepaper@2x.png 2x, ../../static/img/home/img_whitepaper@2x.png 3x"
                width="687px" height="627px">
        </section>
        <section class="project-introduction screen pc-screen" :class="{'en-screen': $i18n.locale === 'en'}">
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
        <section class="currency-introduction screen pc-screen" :class="{'en-screen': $i18n.locale === 'en'}">
            <h1 class="half-border screen-title">{{$t('home.currencyIntroduction.title')}}</h1>
            <ul>
                <template v-for="(item, index) in $t('home.currencyIntroduction.section')">
                    <li  :key="index" v-if="index < 3">
                        <h1>
                            <div>
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
                            </div>
                            {{item.title}}
                        </h1>
                        <template v-if="item.description.length > 0">
                            <p v-for="(msg, index) in item.description" :key="index">{{msg}}</p>
                        </template>
                    </li>
                </template>
            </ul>
        </section>
        <section class="currency-introduction screen pc-screen" :class="{'en-screen': $i18n.locale === 'en'}">
            <h1 class="half-border screen-title">{{$t('home.currencyIntroduction.title')}}</h1>
            <ul>
                <template v-for="(item, index) in $t('home.currencyIntroduction.section')">
                    <li  :key="index" v-if="index > 2">
                        <h1>
                            <div>
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
                            </div>
                            {{item.title}}
                        </h1>
                        <template v-if="item.description.length > 0">
                            <p v-for="(msg, index) in item.description" :key="index">{{msg}}</p>
                        </template>
                    </li>
                </template>
            </ul>
        </section>
        <section class="product-advantage pc-screen" :class="{'en-screen': $i18n.locale === 'en'}">
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
            <div class="product-advantage-description clearfloat">
                <img class="float-left" src="../../static/img/home/img_ETF.png"
                    alt="ETF"
                    srcset="../../static/img/home/img_ETF@2x.png 2x"
                    width="559px" height="402px">
                <ul class="float-left">
                    <li>{{$t('home.productAdvantage.title')}}：</li>
                    <li v-for="(item, index) in $t('home.productAdvantage.advantage')" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
        </section>
        <img v-if="isScrollTop" src="../../static/img/home/icon_up.png"
            alt="up"
            srcset="../../static/img/home/icon_up@2x.png 2x"
            width="114px" height="114px"
            @click="scrollTop">
        <QrCodeVue :qrCode.sync="qrCode"/>
    </div>
</template>

<script>
import QrCodeVue from '../../components/QrCode.vue';
export default {
    name: 'homePc',
    components: {
        QrCodeVue
    },
    data () {
        return {
            isScrollTop: false,
            qrCode: ''
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
        },
        download (type) {
            this.qrCode = type;
        }
    }
};
</script>
<style scoped lang="scss">
    @import './Home.scss';
    @mixin img ($width, $height, $url) {
        display: block;
        width: $width;
        height: $height;
        background: url($url);
        background-repeat: no-repeat;
        background-size: contain;
    }
    .en-screen {
        height: auto !important;
    }
    .not-en-section {
        height: 1080PX;
    }
    .pc-screen{
        max-width: 1200PX;
        height: 1080PX;
        margin: 0 auto;
    }
    .icon-ios {
        @include img (28px, 32px, '../../static/img/home/ios.png');
    }

    .home-bg {
        background-image: url('../../static/img/home/bg_home_pc.png');
        background-size: 100% 1080PX;
        > img {
            transform: scale(0.5);
            cursor: pointer;
            z-index: 10;
        }
    }

    .first-screen {
        .science-description {
            position: absolute;
            top: 50%;
            left: -4%;
            transform: translateY(-50%);
            z-index: 1;
            p {
                width: 65%;
            }
        }
        img.img-science {
            position: absolute;
            right: -14%;
            bottom: 0;
        }
        img.img-up {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            animation: slideDown .8s infinite cubic-bezier(0.4, 0, 1, 1);
            cursor: pointer;
        }
    }
    .token-bank {
        position: relative;
        .screen-title {
            margin-top: 0;
        }
        .screen-description {
            width: 70%;
            font-size: 18PX;
            line-height: 39PX;
            letter-spacing: 0;
        }
        .token-bank-mobile {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }
        button {
            margin: 0 auto;
        }
    }

    .white-paper {
        .white-paper-left {
            width: 50%;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            h1 {
                margin-top: 0;
            }
            p {
                font-size: 18PX;
            }
        }
        .white-paper-img-bg {
            position: absolute;
            top: 50%;
            left: auto;
            right: 0;
            transform: translateY(-50%);
        }
    }
    .project-introduction {
        > h1 {
            margin-top: 80PX;
        }
        > ul {
            li {
                h1 {
                    font-size: 20PX;
                }
                p {
                    font-size: 16PX;
                    line-height: 35PX;
                }
            }
        }
    }
    .currency-introduction {
        > h1 {
            max-width: 90%;
        }
        > ul {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            li {
                padding: 24PX;
                width: 32%;
                &:not(:last-child) {
                    margin-bottom: 0;
                }
                h1 {
                    font-size: 20PX;
                    text-align: center;
                    img {
                        margin-right: 0;
                    }
                }
                p {
                    font-size: 16PX;
                    letter-spacing: 2PX;
                    line-height: 28PX;
                    margin-top: 20PX;
                }
            }
        }
    }
    .product-advantage {
        position: relative;
        .product-advantage-description {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            flex-flow: wrap-reverse;
            > ul {
                padding: 0;
                li {
                    &:first-child {
                        font-size: 24PX;
                    }
                    &:not(:first-child) {
                        font-size: 18PX;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1150px) {
        [data-dpr="1"] .white-paper {
            .white-paper-left {
                width: 70%;
                top: 6%;
                left: 50%;
                transform: translateX(-50%);
            }
            .white-paper-img-bg {
                top: 70%;
                right: 50%;
                transform: translate(50%, -50%);
            }
        }
    }
    @media only screen and (max-width: 1100px) {
        [data-dpr="1"] .token-bank {
            .screen-title {
                font-size: 50PX;
            }
        }
    }
    @media only screen and (max-width: 980px) {
        [data-dpr="1"] .token-bank {
            .screen-title {
                font-size: 30PX;
                padding-left: 20PX;
                padding-right: 20PX;
            }
        }
        [data-dpr="1"] .currency-introduction {
            > ul {
                li {
                    p {
                        font-size: 14PX;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 780px) {
        [data-dpr="1"] .token-bank {
            .screen-title {
                font-size: 24PX;
            }
        }
    }
</style>
