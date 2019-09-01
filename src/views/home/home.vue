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
  }
</style>
