<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 20:19:40
-->
<template>
    <div class="hello">
        <ul class="box">
        <li class="active-block" @click="changeLand('zh')">中文</li>
        <li class="active-block" @click="changeLand('en')">英文</li>
        <li class="active-block" @click="changeLand('tr')">繁体</li>
        </ul>
        <h1>我这里是{{$t('navbar.home')}}的啦</h1>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {};
    },
    methods: {
        changeLand (tex) {
            console.log(tex);
            this.$i18n.locale = tex;
        }
    }
};
</script>
<style land="scss">
    .active-block{
        padding:10px;
        border: 1px solid #000;
    }
</style>
