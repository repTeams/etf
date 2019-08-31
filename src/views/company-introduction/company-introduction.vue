<!--
 * @Date: 2019-08-31 13:29:44
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-31 21:32:44
-->
<template>
    <div class="company-introduction">
        <etfTitle :titleContent="$t('companyIntroduction.title')" />
        <section class="introduction">
            <div class="introduction-left">
                <img src="../../static/img/company-introduction/img_introduction.png"
                    alt="公司简介"
                    srcset="../../static/img/company-introduction/img_introduction@2x.png 2x">
            </div>
            <div class="introduction-right">
                <div class="location">
                    <h1 class="title">{{$t('companyIntroduction.introduction.location.title')}}</h1>
                    <p>{{$t('companyIntroduction.introduction.location.description')}}</p>
                </div>
                <div class="business">
                    <h1 class="title">{{$t('companyIntroduction.introduction.business.title')}}</h1>
                    <ul>
                        <li class="hexagon" v-for="(item, index) in $t('companyIntroduction.introduction.business.business')" :key="index">
                            <i class="innter-arrow-left"></i>
                            {{item}}
                            <i class="innter-arrow-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="core-team">
            <h1>{{$t('companyIntroduction.codeTeam.title')}}</h1>
            <ul>
                <li v-for="(item, index) in $t('companyIntroduction.codeTeam.description')" :key="index">
                    <h1 class="title">{{item.title}}</h1>
                    <p>{{item.description}}</p>
                </li>
            </ul>
        </section>
        <section class="team-members">
            <ul>
                <li v-for="(item, index) in $t('companyIntroduction.teamMembers.members')" :key="index">
                    <img v-if="index === 0" src="../../static/img/company-introduction/img_WillJohnson.png"
                    alt="公司简介"
                    srcset="../../static/img/company-introduction/img_WillJohnson@2x.png 2x">
                    <img v-if="index === 1" src="../../static/img/company-introduction/img_Julian.png"
                    alt="公司简介"
                    srcset="../../static/img/company-introduction/img_Julian@2x.png 2x">
                    <div class="member-description-wrap">
                        <h1>
                            <p>{{item.name}}</p>
                            <p>{{item.position}}</p>
                        </h1>
                        <p>{{item.description}}</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="enterprise-strength">
            <h1>{{$t('companyIntroduction.enterpriseStrength.title')}}</h1>
            <ul>
                <li v-for="(item, index) in $t('companyIntroduction.enterpriseStrength.description')" :key="index">
                    <p>{{item}}</p>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import etfTitle from '@/components/etf-title/etf-title';

export default {
    name: 'companyIntroduction',
    components: {
        etfTitle
    },
    data () {
        return {

        };
    }
};
</script>
<style lang="scss" scoped>
    /* 公用样式 */
    .core-team > h1, .enterprise-strength > h1 {
        display: inline-block;
        background: url('../../static/img/company-introduction/bg_title.png') no-repeat center center;
        width: 100%;
        height: 256px;
        line-height: 256px;
        text-align: center;
        font-size: 64px;
        font-weight: 500;
        color: rgba(254,255,255,1);
        position: absolute;
        left: 50%;
        top: -130px;
        transform: translate(-50%);
    }

    .title {
        font-size: 24px;
        font-weight: 500;
        color: rgba(254,254,255,1);
        line-height: 34px;
        position: relative;
        display: inline-block;
        padding-bottom: 19px;
        &::after {
            content: "";
            position: absolute;
            left: 50%;
            width: 25%;
            top: 100%;
            border-bottom: 6PX solid #17FFFF;
            -webkit-transition: 0.2s all linear;
            transition: 0.2s all linear;
            border-radius: 3PX;
            transform: translateX(-50%);
        }
    }

    .hexagon {
        width: 100px;
        height: 150px;
        line-height: 150px;
        position: relative;
        border-top: 2px solid #17FFFF;
        border-bottom: 2px solid #17FFFF;
        background: rgba(35,41,85,1);
        &::before, .innter-arrow-left {
            content: "";
            position: absolute;
            top: 0;
            left: -40px;
            width: 0;
            height: 0;
            border-top: 75px solid transparent;
            border-bottom: 75px solid transparent;
            border-right: 40px solid #17FFFF;
        }
        &::after, .innter-arrow-right {
            content: "";
            position: absolute;
            top: 0;
            left: 100px;
            width: 0;
            height: 0;
            border-top: 75px solid transparent;
            border-bottom: 75px solid transparent;
            border-left: 40px solid #17FFFF;
            z-index: 1;
        }
    }

    /* 各自的样式 */
    .company-introduction {
        // padding-top: 198px;
        > section {
            max-width: 1200PX;
            margin-left: auto;
            margin-right: auto;
            padding-left: 32px;
            padding-right: 32px;
        }
    }

    .introduction {
        margin-top: 144px;
        text-align: right;
        position: relative;
        .introduction-left {
            position: absolute;
            z-index: 1;
            left: 0;
            top: 10%;
        }
        .introduction-right {
            z-index: 2;
            background: rgba(35,41,85,.8);
            width: 720px;
            display: inline-block;
            position: relative;
            .location {
                padding: 60px 100px 80px;
                text-align: center;
                border-bottom: 1px solid rgba(23,255,255,.4);
                p {
                    font-size: 16px;
                    font-weight: 400;
                    color: rgba(254,254,255,1);
                    line-height: 34px;
                    margin-top: 39px;
                    text-align: left;
                }
            }
            .business {
                padding: 60px;
                text-align: center;
                > ul {
                    position: relative;
                    height: 220px;
                    margin-top: 60px;
                    padding-left: 40px;
                    li {
                        position: absolute;
                        font-size: 24px;
                        color: #17FFFF;
                        font-weight: 500;
                        &:nth-child(2) {
                            left: 180px;
                            top: 75px;
                        }
                        &:nth-child(3) {
                            left: 320px;
                        }
                        &:nth-child(4) {
                            left: 460px;
                            top: 75px;
                        }
                        .innter-arrow-left {
                            left: -38px;
                            border-right-color: rgba(35,41,85,1);
                        }
                        .innter-arrow-right {
                            left: 98px;
                            border-left-color: rgba(35,41,85,1);
                            z-index: 2;
                        }
                    }
                }
            }
        }
    }

    .core-team {
        margin-top: 217px;
        position: relative;
        > ul {
            background: rgba(13,84,191,0);
            border: 2px solid rgba(23, 255, 255, 1);
            padding: 80px 47px 58px;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            flex-wrap: wrap;
            li {
                width: 478px;
                text-align: center;
                h1 {
                    &::after {
                        width: 50%;
                    }
                }
                p {
                    font-size: 16px;
                    font-weight: 400;
                    color: rgba(254,254,255,1);
                    line-height: 34px;
                    text-align: left;
                    margin-top: 40px;
                }
            }
        }
    }

    .enterprise-strength {
        position: relative;
        margin-top: 204px;
        padding-bottom: 102px;
        > ul {
            background: rgba(13,84,191,0);
            border: 2px solid rgba(23, 255, 255, 1);
            padding: 89px 48px 56px;
            li {
                &:not(:first-child) {
                    margin-top: 50px;
                }
                p {
                    font-size: 16px;
                    font-weight:400;
                    color: rgba(254,254,255,1);
                    line-height: 34px;
                }
            }
        }
    }

    .team-members {
        margin-top: 70px;
        > ul {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            flex-wrap: wrap;
            li {
                width: 568px;
                height: 680px;
                position: relative;
            }
        }
        .member-description-wrap {
            background: rgba(29,34,71,.8);
            padding: 40px;
            width: 80%;
            position: absolute;
            right: 10px;
            top: 280px;
            > h1 {
                position: relative;
                padding-bottom: 18px;
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    width: 10%;
                    top: 100%;
                    border-bottom: 6PX solid #17FFFF;
                    -webkit-transition: 0.2s all linear;
                    transition: 0.2s all linear;
                    border-radius: 3PX;
                }
                p:first-child {
                    font-size: 28px;
                    font-weight: 400;
                    color: #17FFFF;
                    line-height: 34px;
                }
                p:last-child {
                    font-size: 24px;
                    font-weight: 400;
                    color: rgba(254,254,255,1);
                    line-height: 34px;
                    margin-top: 18px;
                }
            }
            > p {
                margin-top: 46px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(254,254,255,1);
                line-height: 34px;
                height: 160px;
            }
        }
    }

    /* 如果设备像素大于等于2，则用2倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min--moz-device-pixel-ratio: 2) {
        .core-team, .enterprise-strength {
            > h1 {
                background: url('../../static/img/company-introduction/bg_title@2x.png') no-repeat center center;
                background-size: auto 256px;
            }
        }
        
    }
    /* 如果设备像素大于等于3，则用3倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 3),
    screen and (min--moz-device-pixel-ratio: 3) {
        .core-team, .enterprise-strength {
            > h1 {
                background: url('../../static/img/company-introduction/bg_title@2x.png') no-repeat center center;
                background-size: auto 256px;
            }
        }
    }

    @media only screen and (max-width: 750px) {
        .title {
            font-size: 30px;
        }
        .introduction .introduction-right .location p,
        .core-team > ul li p,
        .team-members .member-description-wrap > p,
        .enterprise-strength > ul li p {
            font-size: 28px;
            line-height: 45px;
        }
        .team-members {
            > ul {
                li {
                    height: 860px;
                }
            }
            .member-description-wrap {
                > p {
                    height: 100%;
                }
            }
        }
        .introduction {
            .introduction-right {
                .location {
                    padding: 60px 40px 80px;
                }
            }
        }
        .enterprise-strength {
            margin-top: 0;
        }
    }
    @media only screen and (max-width: 800px) {
        .introduction {
            .introduction-right {
                width: 100%;
                .business {
                    > ul {
                        padding-left: 20px;
                        li {
                            &:nth-child(2) {
                                left: 160px;
                            }
                            &:nth-child(3) {
                                left: 300px;
                            }
                            &:nth-child(4) {
                                left: 440px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1140px) {
        .core-team {
            > ul {
                li {
                    width: 100%;
                    &:not(:last-child) {
                        margin-bottom: 80px;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1220px) {
        .team-members {
            > ul {
                li {
                    width: 100%;
                }
            }
        }
    }
    @media only screen and (max-width: 1920px) {
        [data-dpr="3"] {
            .company-introduction > section {
                padding-left: 0;
                padding-right: 0;
            }
            .title {
                font-size: 30px;
            }
            .introduction .introduction-right .location p,
            .core-team > ul li p,
            .team-members .member-description-wrap > p,
            .enterprise-strength > ul li p {
                font-size: 28px;
                line-height: 45px;
            }
            .team-members {
                > ul {
                    li {
                        height: 780px;
                    }
                }
                .member-description-wrap {
                    > p {
                        height: 100%;
                    }
                }
            }
            .introduction {
                .introduction-right {
                    .location {
                        padding: 60px 40px 80px;
                    }
                }
            }
            .enterprise-strength {
                margin-top: 0;
            }
            .core-team {
                > ul {
                    li {
                        width: 100%;
                        &:not(:last-child) {
                            margin-bottom: 80px;
                        }
                    }
                }
            }
            .team-members {
                > ul {
                    li {
                        width: 100%;
                    }
                }
                .member-description-wrap {
                    top: 180px;
                }
            }
        }
    }
</style>
