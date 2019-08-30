<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-30 22:42:06
-->
<template>
    <div id="app">
        <headerVue v-if="isShowHeader" />
        <router-view/>
    </div>
</template>

<script>
import headerVue from './components/header.vue';

export default {
    name: 'App',
    components: {
        headerVue
    },
    data () {
        return {
            isShowHeader: true
        };
    },
    watch: {
        '$route' () {
            this.isShowHeader = this.$route.name !== 'register';
        }
    }
};
</script>

<style>

</style>
