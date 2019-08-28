<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-29 02:16:03
-->
<template>
    <div class="home-bg">
        <header class="header clearfloat">
            <div class="header-menu float-left"></div>
            <div class="header-logo float-left"></div>
            <div class="header-lang float-right">
                <p>简</p>
                <ul>
                    <li @click="changeLand('zh')">简</li>
                    <li @click="changeLand('tr')">繁</li>
                    <li @click="changeLand('en')">EN</li>
                </ul>
            </div>
            <el-row class="float-right">
                <el-button class="btn-register" round>{{$t('home.register')}}</el-button>
            </el-row>
        </header>
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
        <section class="token-bank">
            <h1 class="half-border">{{$t('home.tokenBank.title')}}</h1>
            <p>{{$t('home.tokenBank.description')}}</p>
            <div class="token-bank-mobile">
                <img src="../../static/img/home/img_mobile.png"
                    alt="手机"
                    srcset="../../static/img/home/img_mobile@2x.png 2x"
                    width="227px" height="476px">
                <div>
                    <button class="btn-mobile-download btn-ios">
                        <img src="../../static/img/home/ios.png"
                                alt="ios"
                                srcset="../../static/img/home/ios@2x.png"
                                width="28px" height="32px">
                        {{$t('home.tokenBank.iosDownload')}}
                    </button>
                    <button class="btn-mobile-download btn-android">
                        <img src="../../static/img/home/android.png"
                                alt="android"
                                srcset="../../static/img/home/android@2x.png"
                                width="30px" height="36px">
                        {{$t('home.tokenBank.androidDownload')}}
                    </button>
                </div>
            </div>
        </section>
        <!-- <ul class="box">
            <li class="active-block" @click="changeLand('zh')">中文</li>
            <li class="active-block" @click="changeLand('en')">英文</li>
            <li class="active-block" @click="changeLand('tr')">繁体</li>
        </ul>
        <h1>我这里是{{$t('navbar.home')}}的啦</h1> -->
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {};
    },
    methods: {
        changeLand (tex) {
            console.log(tex);
            this.$i18n.locale = tex;
        }
    }
};
</script>
<style scoped lang="scss">
    .home-bg {
        background-image: url('../../static/img/bg_mobile.png');
        width: 750px;
        height: 9030px;
        background-repeat: repeat-y;
        background-size: 750px 1208px;
    }
    .header {
        background: rgba(9,14,61,.6);
        padding: 35px 32px 34px;
        width: 100%;
        position: absolute;
        z-index: 10;
        .header-menu {
            width: 52px;
            height: 52px;
            background-image: url('../../static/img/home/icon_menu.png');
            background-repeat: no-repeat;
            background-size: 52px 52px;
            cursor: pointer;
        }
        .header-logo {
            width: 163px;
            height: 58px;
            background-image: url('../../static/img/logo.png');
            background-repeat: no-repeat;
            background-size: 163px 58px;
            cursor: pointer;
            margin-left: 40px;
        }
        .btn-register {
            padding: 13px 25px;
            border: 1px solid rgba(255,255,255,.6);
            font-size: 28px;
            background: rgba(9,14,61,.6);
            border-radius: 26px;
            font-weight: 400;
            color: #17FFFF;
            transform: translateZ(0);
        }
        .header-lang {
            position: relative;
            margin-left: 14px;
            p {
                font-size: 28px;
                font-weight: 400;
                padding: 13px 26px 13px 13px;
                color: rgba(255,255,255,1);
            }
            ul {
                display: none;
                position: absolute;
                background: rgba(255,255,253,.1);
                width: 100%;
                text-align: center;
                padding: 20px 0;
                li {
                    font-size: 28px;
                    color:rgba(255,255,255,1);
                    cursor: pointer;
                    &:hover {
                        color: #17FFFF;
                    }
                }
                li:not(:last-child) {
                    margin-bottom: 20px;
                }
            }
            &::after {
                content: '';
                position: absolute;
                border-top: 8px solid #fff;
                border-right: 8px solid transparent;
                border-left: 8px solid transparent;
                top: calc(50% - 4px);
                right: 0;
                width: 0;
                height: 0;
                transition: all .5s;
            }
            &:hover ul {
                display: block;
            }
            &:hover::after {
                transform: rotate(180deg) translateZ(0);
            }
        }
    }
    .first-screen {
        position: relative;
        text-align: center;
        padding-top: 20px;
        color: #fff;
        .first-screen-container {
            background-image: url('../../static/img/home/bg_mobile.png');
            width: 750px;
            height: 1208px;
            background-repeat: no-repeat;
            background-size: 750px 1208px;
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
            color: #17FFFF;
            padding: 40px 48px 54px;
            width: 82.53%;
            font-size: 64px;
            font-weight: normal;
            margin: 80px auto 60px;
            text-align: center;
        }
        p {
            width: 91.2%;
            margin: 0 auto 58px;
            text-align: center;
            font-size: 28px;
            color: #fff;
            line-height: 44px;
        }
        .token-bank-mobile {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 30px;
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
            .btn-android {
                margin-top: 32px;
                background:linear-gradient(90deg,rgba(52,80,200,1),rgba(133,59,255,1));
            }
        }
    }

    .half-border {
        background: linear-gradient(to left, #17FFFF, #17FFFF) left top no-repeat,
            linear-gradient(to bottom, #17FFFF, #17FFFF) left top no-repeat,
            linear-gradient(to left, #17FFFF, #17FFFF) right bottom no-repeat,
            linear-gradient(to top, #17FFFF, #17FFFF) right bottom no-repeat;
        background-size: 2px 50px, 200px 2px;
    }

    @keyframes slideDown {
        0%, 100% {
            bottom: 20px;
        }
        50% {
            bottom: 10px;
        }
    }

    /* 如果设备像素大于等于2，则用2倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min--moz-device-pixel-ratio: 2) {
        .header-menu {
            background-image: url('../../static/img/home/icon_menu@2x.png');
        }
        .header-logo {
            background-image: url('../../static/img/logo@2x.png');
        }
        .home-bg {
            background-image: url('../../static/img/bg_mobile@2x.png');
        }
        .first-screen-container {
            background-image: url('../../static/img/home/bg_mobile@2x.png');
        }
    }
    /* 如果设备像素大于等于3，则用3倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 3),
    screen and (min--moz-device-pixel-ratio: 3) {}
</style>
