<!--
 * @Date: 2019-08-29 22:30:22
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-30 01:58:05
-->
<template>
    <header class="header clearfloat">
        <div class="header-wrap">
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
            max-width: 1200px;
            margin: 0 auto;
        }
        .header-menu {
            width: 52px;
            height: 52px;
            background-image: url('../static/img/home/icon_menu.png');
            background-repeat: no-repeat;
            background-size: 52px 52px;
            cursor: pointer;
        }
        .header-logo {
            width: 163px;
            height: 58px;
            background-image: url('../static/img/logo.png');
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
    /* 如果设备像素大于等于2，则用2倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min--moz-device-pixel-ratio: 2) {
        .header-menu {
            background-image: url('../static/img/home/icon_menu@2x.png');
        }
        .header-logo {
            background-image: url('../static/img/logo@2x.png');
        }
    }
</style>
