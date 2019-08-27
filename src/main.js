/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-28 01:28:27
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './config/config.js';
import VueI18n from 'vue-i18n';
import '@/static/plugins/flexible';
Vue.use(VueI18n);

// 使用多文件管理不同的语言是一个好习惯：
const i18n = new VueI18n({
    // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
    locale: 'zh', // 语言标识
    messages: {
        'zh': require('@/static/lang/zh'),
        'en': require('@/static/lang/en'),
        'tr': require('@/static/lang/tr')
    }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
});
