<!--
 * @Date: 2019-08-31 23:49:16
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-01 01:41:06
-->
<template>
    <div class="about-us">
        <etfTitle :titleContent="$t('aboutUs.title')" />
        <section class="purpose">
            <p>{{$t('aboutUs.purpose1')}}</p>
            <p>{{$t('aboutUs.purpose2')}}</p>
        </section>
        <section class="form">
            <ul>
                <li>
                    <div>
                        <label>*{{$t('aboutUs.email')}}</label>
                        <input type="text" :placeholder="$t('aboutUs.emailTips')">
                    </div>
                    <div>
                        <label>*{{$t('aboutUs.phone')}}</label>
                        <input type="text" :placeholder="$t('aboutUs.phoneTips')">
                    </div>
                </li>
                <li>
                    <div>
                        <label>*{{$t('aboutUs.leavingMessage')}}</label>
                        <textarea :placeholder="$t('aboutUs.leavingMessageTips')"></textarea>
                    </div>
                </li>
            </ul>
            <button class="btn btn-submit">{{$t('aboutUs.btnTips')}}</button>
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
        .form {
            height: 513px;
            margin-bottom: 127px;
            background: rgba(35,41,85,1);
            border-radius: 20px 20px 0px 0px;
            box-shadow: 0px 0 16px 4px rgba(40,117,201,1);
            text-align: center;
            .btn-submit {
                display: inline-block;
                margin-top: 60px;
                padding: 16px 240px;
                background: linear-gradient(-90deg,rgba(33,241,245,1),rgba(53,78,200,1));
                box-shadow: 0px 3px 16px 0px rgba(40,117,201,1);
                border-radius: 26px;
            }
        }
    }
</style>
