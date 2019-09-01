<!--
 * @Date: 2019-08-31 21:42:49
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-01 21:00:15
-->
<template>
    <div class="footer">
        <ul>
            <li class="company">
                <h1 class="company-name">{{$t('footer.company.name')}}</h1>
                <img src="../static/img/footer/logo_footer.png"
                    alt="logo"
                    srcset="../static/img/footer/logo_footer@2x.png 2x, ../static/img/footer/logo_footer@2x.png 3x">
                <p class="address">
                    <img src="../static/img/footer/icon_address.png"
                        alt="logo"
                        srcset="../static/img/footer/icon_address@2x.png 2x, ../static/img/footer/icon_address@2x.png 3x"
                        width="19px" height="20px">
                    {{$t('footer.company.address')}}
                </p>
                <p class="phone">
                    <img src="../static/img/footer/icon_phone.png"
                        alt="logo"
                        srcset="../static/img/footer/icon_phone@2x.png 2x, ../static/img/footer/icon_phone@2x.png 3x"
                        width="20px" height="24px">
                    {{$t('footer.company.phone')}}15570866258
                </p>
            </li>
            <li class="server">
                <h1 class="title">{{$t('footer.server.name')}}</h1>
                <ul>
                    <li v-for="(item, index) in $t('footer.server.list')" :key="index">
                        <router-link :to="item.route" >
                            {{item.name}}
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="download">
                <h1 class="title">{{$t('footer.download.name')}}</h1>
                <p>{{$t('footer.download.description')}}</p>
                <button class="btn-mobile-download btn-ios" @click="download('ios')">
                    <img src="../static/img/home/ios.png"
                            alt="ios"
                            srcset="../static/img/home/ios@2x.png 2x, ../static/img/home/ios@2x.png 3x"
                            width="28px" height="32px">
                    {{$t('footer.download.ios')}}
                </button>
                <button class="btn-mobile-download btn-android" @click="download('android')">
                    <img src="../static/img/home/android.png"
                            alt="android"
                            srcset="../static/img/home/android@2x.png 2x, ../static/img/home/android@2x.png 3x"
                            width="30px" height="36px">
                    {{$t('footer.download.android')}}
                </button>
            </li>
        </ul>
        <QrCodeVue :qrCode.sync="qrCode"/>
    </div>
</template>
<script>
import QrCodeVue from './QrCode.vue';
export default {
    name: 'foot',
    components: {
        QrCodeVue
    },
    data () {
        return {
            qrCode: ''
        };
    },
    methods: {
        download (type) {
            this.qrCode = type;
        }
    }
};
</script>
<style lang="scss" scoped>
    .title {
        font-size: 24px;
        font-weight: 400;
        color: rgba(252,252,253,1);
        position: relative;
        padding-bottom: 20px;
        margin-bottom: 40px;
        display: inline-block;
        &::after {
            content: "";
            position: absolute;
            left: 0;
            width: 50%;
            top: 100%;
            border-bottom: 6PX solid #17FFFF;
            -webkit-transition: 0.2s all linear;
            transition: 0.2s all linear;
            border-radius: 3PX;
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
        box-shadow: 0px 10px 27px 0px rgba(8, 12, 76, 0.59);
        border-radius: 36px;
        font-size: 18px;
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
        &:focus,
        &:hover {
            color: #409EFF;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
        img {
            margin-right: 12px;
        }
    }
    .footer {
        background:rgba(3,5,28,.82);
        padding: 80px 20px 74px;
        border-top: 2px solid #09F3F9;
        > ul {
            max-width: 1200PX;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            li {
                > img {
                    margin-top: 36px;
                }
            }
        }
        .company {
            .company-name {
                font-size: 32px;
                font-weight: 400;
                color: rgba(255,255,255,1);
            }
            .address, .phone {
                font-size: 16px;
                font-weight: 400;
                color: rgba(252,252,253,1);
                line-height: 27px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img {
                    margin-right: 10px;
                }
            }
            .address {
                margin-top: 39px;
            }
            .phone {
                margin-top: 28px;
            }
        }
        .server {
            > ul {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                li {
                    font-size: 18px;
                    font-weight: 400;
                    color: rgba(252,252,253,1);
                    &:not(:last-child) {
                        margin-bottom: 23px;
                    }
                    a {
                        color: rgba(252,252,253,1);
                        text-decoration: none;
                    }
                }
            }
        }
        .download {
            p {
                font-size: 16px;
                font-weight: 400;
                color: rgba(255,255,255,1);
            }
            .btn-ios {
                margin-top: 32px;
                background: linear-gradient(-90deg, rgba(1, 234, 204, 1), rgba(53, 78, 200, 1));
            }
            .btn-android {
                margin-top: 24px;
                background: linear-gradient(90deg, rgba(52, 80, 200, 1), rgba(133, 59, 255, 1));
            }
        }
    }
    @media only screen and (max-width: 750px) {
        .footer {
            > ul {
                justify-content: center;
            }
            .company {
                text-align: center;
                .address, .phone {
                    font-size: 22px;
                    justify-content: center;
                }
            }
            .server {
                display: none;
            }
            .download {
                display: none;
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        .footer {
            > ul {
                justify-content: space-around;
            }
        }
        .download {
            display: none;
        }
    }
    @media only screen and (max-width: 1920px) {
        [data-dpr="3"] .footer {
            > ul {
                justify-content: center;
            }
            .company {
                text-align: center;
                .address, .phone {
                    font-size: 22px;
                    justify-content: center;
                }
            }
            .server {
                display: none;
            }
            .download {
                display: none;
            }
        }
    }
</style>
