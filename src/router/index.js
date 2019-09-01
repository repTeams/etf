import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: resolve => require(['@/views/home/home'], resolve) // 路由懒加载
    }
  ]
});
