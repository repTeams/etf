<!--
 * @Date: 2019-09-07 00:50:23
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-07 21:33:43
-->
<template>
    <div id="picVerificationCode" @click="freshCode"></div>
</template>
<script>
import createVerificationCode from '@/static/utils/verification-code';

export default {
    name: 'verificationCode',
    data () {
        return {
            code: ''
        };
    },
    mounted () {
        this.freshCode();
    },
    methods: {
        freshCode () {
            this.code = createVerificationCode(document.querySelector('#picVerificationCode'), 5);
            this.$emit('update:verificationCode', this.code);
        }
    }
};
</script>
<style lang="scss" scoped>
    #picVerificationCode {
        display: inline-block;
        width: 160px;
        // height:40px;
        background: #ddd;
        // line-height: 40px;
        padding: 0;
        position: relative;
        text-align: center;
        -khtml-user-select: none;
        user-select: none;
        cursor: pointer;
        overflow: hidden;
    }

    // #picVerificationCode .code-spot{
    //     position: absolute;
    //     width: 4px;
    //     height: 4px;
    //     border-radius: 50%;
    // }
</style>
