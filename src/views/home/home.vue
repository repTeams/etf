<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-30 13:46:57
-->
<template>
    <div>
        <HomeMobileVue class="home-mobile" />
        <HomePcVue class="home-pc" />
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
    },
    mounted () {
        this.isCanScrollToTop();
        window.addEventListener('scroll', this.isCanScrollToTop);
    },
    destroyed () {
        window.removeEventListener('scroll', this.isCanScrollToTop);
    },
    methods: {
        isCanScrollToTop () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let browserHeight = window.outerHeight;
            if (scrollTop > browserHeight) {
                this.isScrollTop = true;
            } else {
                this.isScrollTop = false;
            }
        },
        scrollTop () {
            let timer = setInterval(() => {
                document.body.scrollTop -= 400;
                document.documentElement.scrollTop -= 400;
                if (document.body.scrollTop <= 0 && document.documentElement.scrollTop <= 0) {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    clearInterval(timer);
                }
            }, 40);
        }
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
    @media only screen and (min-width: 750px) {
        .home-mobile {
            display: none;
        }
        .home-pc {
            display: block;
        }
    }
</style>
