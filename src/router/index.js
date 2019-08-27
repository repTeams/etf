/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 21:06:23
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: resolve => require(['@/views/home/home'], resolve) // 路由懒加载
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '注册'
        },
        component: resolve => require(['@/views/login/login'], resolve) // 路由懒加载
    }]
});
