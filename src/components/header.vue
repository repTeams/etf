<!--
 * @Date: 2019-08-29 22:30:22
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-30 16:47:15
-->
<template>
    <header class="header">
        <div class="header-wrap">
            <div class="header-left">
                <div class="icon-header-menu"></div>
                <div class="header-logo-mobile"></div>
                <img class="header-logo-pc" src="../static/img/logo.png"
                    alt="logo" srcset="../static/img/logo@2x.png 2x">
                <ul class="header-menu">
                    <li>首页</li>
                    <li>公司介绍</li>
                    <li>新闻媒体</li>
                    <li>联系我们</li>
                    <li>战略合作伙伴</li>
                </ul>
            </div>
            <div class="header-right">
                <el-row >
                    <el-button class="btn-register" round>{{$t('home.register')}}</el-button>
                </el-row>
                <div class="header-lang">
                    <p>简</p>
                    <ul>
                        <li @click="changeLand('zh')">简</li>
                        <li @click="changeLand('tr')">繁</li>
                        <li @click="changeLand('en')">EN</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data () {
        return {

        };
    },
    methods: {
        changeLand (tex) {
            this.$i18n.locale = tex;
        }
    }
};
</script>
<style lang="scss" scoped>
    .header {
        background: rgba(9,14,61,.6);
        padding: 35px 32px 34px;
        width: 100%;
        position: absolute;
        z-index: 10;
        .header-wrap {
            max-width: 1200PX;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header-left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .header-right {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .icon-header-menu {
            width: 52px;
            height: 52px;
            background-image: url('../static/img/home/icon_menu.png');
            background-repeat: no-repeat;
            background-size: 52px 52px;
            cursor: pointer;
            margin-right: 40px;
        }
        .header-menu {
            display: none;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1PX solid #17FFFF;
            padding-top: 8PX;
            // padding-bottom: 24PX;
            margin-left: 37PX;
            > li {
                color: #fff;
                margin-right: 54PX;
                cursor: pointer;
                position: relative;
                padding-bottom: 24PX;
                &.selected, &:hover {
                    color: #17FFFF;
                }
                &::before {
                    content: "";
                    position: absolute;
                    top: -2PX;
                    right: 100%;
                    width: 0;
                    height: 100%;
                    border-bottom: 4PX solid #17FFFF;
                    transition: 0.2s all linear;
                    border-radius: 2PX;
                }
                &:hover::before {
                    width: 100%;
                    right: 0;
                }
                &:hover ~ &::before {
                    right: 0;
                }
            }
            
        }
        .header-logo-pc {
            display: none;
        }
        .header-logo-mobile {
            width: 163px;
            height: 58px;
            background-image: url('../static/img/logo.png');
            background-repeat: no-repeat;
            background-size: 163px 58px;
            cursor: pointer;
        }
        .btn-register {
            padding: 13px 25px;
            border: 1PX solid rgba(255,255,255,.6);
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
    /* 如果设备像素大于等于2，则用2倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min--moz-device-pixel-ratio: 2) {
        .icon-header-menu {
            background-image: url('../static/img/home/icon_menu@2x.png');
        }
        .header-logo-mobile {
            background-image: url('../static/img/logo@2x.png');
        }
    }

    @media only screen and (min-width: 750px) {
        [data-dpr="1"] .header {
            background: transparent;
            font-size: 18PX;
            .btn-register, .header-lang p, .header-lang ul li {
                font-size: 18PX;
            }
            .icon-header-menu {
                display: none;
            }
            .header-menu {
                display: flex;
            }
            .header-logo-mobile {
                display: none;
            }
            .header-logo-pc {
                display: block;
            }
        }
    }
    @media only screen and (max-width: 1030px) {
        [data-dpr="1"] .header {
            font-size: 16PX;
            .btn-register, .header-lang p, .header-lang ul li {
                font-size: 16PX;
            }
            .header-menu {
                margin-left: 30PX;
                > li {
                    margin-right: 30PX;
                }
            }
        }
    }
    @media only screen and (max-width: 860px) {
        [data-dpr="1"] .header {
            .header-menu {
                margin-left: 15PX;
                > li {
                    margin-right: 15PX;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
