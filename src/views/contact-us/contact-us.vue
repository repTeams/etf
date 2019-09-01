<!--
 * @Date: 2019-08-31 23:49:16
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-01 17:25:12
-->
<template>
    <div class="about-us">
        <etfTitle :titleContent="$t('aboutUs.title')" />
        <section class="purpose">
            <p>{{$t('aboutUs.purpose1')}}</p>
            <p>{{$t('aboutUs.purpose2')}}</p>
        </section>
        <section class="form-section">
            <div class="form">
                <ul>
                    <li>
                        <div class="input-group">
                            <label>*{{$t('aboutUs.email')}}</label>
                            <input type="text" :placeholder="$t('aboutUs.emailTips')">
                        </div>
                        <div class="input-group">
                            <label>*{{$t('aboutUs.phone')}}</label>
                            <input type="text" :placeholder="$t('aboutUs.phoneTips')">
                        </div>
                    </li>
                    <li>
                        <div class="input-group">
                            <label>*{{$t('aboutUs.leavingMessage')}}</label>
                            <textarea :placeholder="$t('aboutUs.leavingMessageTips')"></textarea>
                        </div>
                    </li>
                </ul>
                <button class="btn btn-submit">{{$t('aboutUs.btnTips')}}</button>
            </div>
        </section>
    </div>
</template>
<script>
import etfTitle from '../../components/etf-title/etf-title.vue';
export default {
    name: 'contactUs',
    components: {
        etfTitle
    }
};
</script>
<style lang="scss" scoped>
    .btn {
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
        box-shadow: 0px 10px 27px 0px rgba(8, 12, 76, 0.59);
        border-radius: 36px;
        font-size: 18px;
        border: 0;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            margin-right: 12px;
        }
    }
    .about-us {
        letter-spacing: 2px;
        overflow: hidden;
        section {
            max-width: 1200PX;
            margin-left: auto;
            margin-right: auto;
        }
        .purpose {
            // margin-top: 76px;
            margin-top: 120px;
            margin-bottom: 56px;
            padding: 0 40px;
            p {
                // font-size: 28px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(255,255,255,1);
                line-height: 30px;
                // line-height: 45px;
                text-align: center;
            }
        }
        .form-section {
            position: relative;
            margin-bottom: 127px;
            padding-left: 60px;
            padding-right: 60px;
            &::before {
                content: '';
                background: url('../../static/img/contact-us/img_bottom.png');
                position: absolute;
                z-index: 1;
                bottom: -80px;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                width: 100%;
                height: 145px;
                background-size: contain;
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            &::after {
                content: url('../../static/img/contact-us/img_shadow.png');
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -4px;
                background-size: contain;
                background-repeat: no-repeat;
                z-index: 2;
                width: calc(100% - 110px);
                overflow: hidden;
            }
        }
        .form {
            background: rgba(35,41,85,1);
            border-radius: 20px 20px 0px 0px;
            box-shadow: 0px 0 16px 4px rgba(40,117,201,1);
            text-align: center;
            padding: 60px 50px;
            position: relative;
            z-index: 2;
            ul {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                li {
                    width: 360px;
                    &:nth-last-child(1) {
                        width: 460px;
                    }
                }
            }
            .input-group {
                margin-bottom: 60px;
                label {
                    display: block;
                    text-align: left;
                    font-size: 18px;
                    font-weight: 400;
                    color: rgba(245,245,245,1);
                    margin-bottom: 28px;
                }
                input, textarea {
                    width: 100%;
                    background:rgba(52,61,122,.4);
                    border: 0;
                    padding: 20px 26px 20px;
                    font-size: 18px;
                    font-weight: 400;
                    font-family: Helvetica, Arial, sans-serif;
                    color: #9B9CAB;
                    &::-webkit-input-placeholder {
                        color: #9B9CAB;
                    }
                    &:-moz-placeholder {
                        color: #9B9CAB;
                    }
                    &::-moz-placeholder {
                        color: #9B9CAB;
                    }
                    &:-ms-input-placeholder{
                        color: #9B9CAB;
                    }
                }
                textarea {
                    height: 240px;
                    resize: none;
                    &::-webkit-input-placeholder {
                        color: #9B9CAB;
                    }
                    &:-moz-placeholder {
                        color: #9B9CAB;
                    }
                    &::-moz-placeholde {
                        color: #9B9CAB;
                    }
                    &:-ms-input-placeholder {
                        color: #9B9CAB;
                    }
                }
            }
            .btn-submit {
                display: inline-block;
                padding: 16px 240px;
                background: linear-gradient(-90deg,rgba(33,241,245,1),rgba(53,78,200,1));
                box-shadow: 0px 3px 16px 0px rgba(40,117,201,1);
                border-radius: 26px;
            }
        }
    }
    /* 如果设备像素大于等于2，则用2倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 750px),
    screen and (min--moz-device-pixel-ratio: 2) and (min-width: 750px) {
        .form-section {
            &::before {
                background-image: url('../../static/img/contact-us/img_bottom@2x.png');
            }
            &::after {
                content: url('../../static/img/contact-us/img_shadow@2x.png');
            }
        }
    }
    /* 如果设备像素大于等于3，则用3倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 3) and (min-width: 750px),
    screen and (min--moz-device-pixel-ratio: 3) and (min-width: 750px) {
        .form-section {
            &::before {
                background-image: url('../../static/img/contact-us/img_bottom@2x.png');
            }
            &::after {
                content: url('../../static/img/contact-us/img_shadow@2x.png');
            }
        }
    }
    /* 如果设备像素大于等于2，则用2倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 750px),
    screen and (min--moz-device-pixel-ratio: 2) and (max-width: 750px) {
        .form-section {
            &::before {
                background-image: url('../../static/img/contact-us/img_bottom_mobile@2x.png');
            }
            &::after {
                content: url('../../static/img/contact-us/img_shadow_mobile@2x.png');
            }
        }
    }
    /* 如果设备像素大于等于3，则用3倍图 */
    @media only screen and (-webkit-min-device-pixel-ratio: 3) and (max-width: 750px),
    screen and (min--moz-device-pixel-ratio: 3) and (max-width: 750px) {
        .form-section {
            &::before {
                background-image: url('../../static/img/contact-us/img_bottom_mobile@2x.png');
            }
            &::after {
                content: url('../../static/img/contact-us/img_shadow_mobile@2x.png');
            }
        }
    }
    @media only screen and (max-width: 1100px) {
        .about-us {
            .form {
                padding: 60px;
                ul {
                    li {
                        width: 100%;
                        &:nth-last-child(1) {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 850px) {
        .about-us {
            .form-section {
                padding-left: 50px;
                padding-right: 50px;
                &::after {
                    width: calc(100% - 100px);
                }
            }
        }
    }
    @media only screen and (max-width: 750px) {
        .about-us {
            .purpose {
                margin-top: 76px;
                p {
                    font-size: 28px;
                    line-height: 45px;
                }
            }
            .form-section {
                padding-left: 32px;
                padding-right: 32px;
                &::before {
                    background-image: url('../../static/img/contact-us/img_bottom_mobile@2x.png');
                }
                &::after {
                    content: url('../../static/img/contact-us/img_shadow_mobile@2x.png');
                    width: calc(100% - 54px);
                    bottom: -8px;
                }
            }
            .form {
                .input-group {
                    label {
                        font-size: 28px;
                    }
                    input, textarea {
                        font-size: 28px;
                        padding: 27px 28px;
                    }
                }
                .btn-submit {
                    font-size: 36px;
                    padding: 26px 209px 28px;
                    border-radius: 44px;
                }
            }
            
        }
    }
    @media only screen and (max-width: 1920px) {
        [data-dpr="3"] .about-us {
            .purpose {
                margin-top: 76px;
                p {
                    font-size: 28px;
                    line-height: 45px;
                }
            }
            .form-section {
                padding-left: 32px;
                padding-right: 32px;
                &::before {
                    background-image: url('../../static/img/contact-us/img_bottom_mobile@2x.png');
                }
                &::after {
                    content: url('../../static/img/contact-us/img_shadow_mobile@2x.png');
                    width: calc(100% - 54px);
                    bottom: -8px;
                }
            }
            .form {
                ul {
                    li {
                        width: 100%;
                        &:nth-last-child(1) {
                            width: 100%;
                        }
                    }
                }
                .input-group {
                    label {
                        font-size: 28px;
                    }
                    input, textarea {
                        font-size: 28px;
                        padding: 27px 28px;
                    }
                }
                .btn-submit {
                    font-size: 36px;
                    padding: 26px 209px 28px;
                    border-radius: 44px;
                }
            }
            
        }
    }
</style>
