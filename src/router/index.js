/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 21:06:23
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const vueRouter = new Router({
    routes: [{
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: resolve => require(['@/views/home/home'], resolve) // 路由懒加载
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '注册'
        },
        component: resolve => require(['@/views/register/register'], resolve) // 路由懒加载
    }]
});
vueRouter.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        window.scrollTo(0, 0);
        document.title = to.meta.title;
    }
    next();
});
export default vueRouter;
