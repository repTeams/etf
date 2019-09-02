<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-02 16:03:37
-->
<template>
    <div>
        <HomeMobileVue class="home-mobile" />
        <HomePcVue class="home-pc" style="overflow: hidden;" />
    </div>
</template>

<script>
import HomeMobileVue from './HomeMobile.vue';
import HomePcVue from './HomePc.vue';

export default {
    name: 'home',
    components: {
        HomeMobileVue,
        HomePcVue
    },
    data () {
        return {
            isScrollTop: false
        };
    }
};
</script>
<style scoped lang="scss">
    .home-mobile {
        display: block;
    }
    .home-pc {
        display: none;
    }
    @media only screen and (min-width: 751px) {
        [data-dpr="1"] .home-mobile {
            display: none;
        }
        [data-dpr="1"] .home-pc {
            display: block;
        }
    }
</style>
