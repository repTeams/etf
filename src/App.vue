<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-29 22:47:33
-->
<template>
    <div id="app">
        <headerVue />
        <router-view/>
    </div>
</template>

<script>
import headerVue from './components/header.vue';

export default {
    name: 'App',
    components: {
        headerVue
    }
};
</script>

<style lang="scss">
  #app{
    background: url('./static/img/bg_pc.png');
    background-size: 100%;
    min-height: 100vh;
  }
  @media screen and (max-width: 750px) {
    #app{
      background: url('./static/img/bg_mobile.png');
    }
  }
</style>
