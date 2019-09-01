<!--
 * @Date: 2019-09-01 19:24:33
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-01 20:53:14
-->
<template>
    <div class="qr-code" @click="hideQrCode" v-show="qrCodeType">
        <img v-show="qrCodeType === 'ios'" src="../views/register/img/img-ios.png"
            alt="download"
            srcset="../views/register/img/img-ios@2x.png">
        <img v-show="qrCodeType === 'android'" src="../views/register/img/img-Android.png"
            alt="download"
            srcset="../views/register/img/img-Android@2x.png">
    </div>
</template>
<script>
export default {
    name: 'qrCode',
    props: {
        qrCode: String
    },
    data () {
        return {
            qrCodeType: this.qrCode
        };
    },
    watch: {
        qrCode () {
            this.qrCodeType = this.qrCode;
        }
    },
    methods: {
        hideQrCode () {
            this.qrCodeType = '';
            this.$emit('update:qrCode', this.qrCodeType);
        }
    }
};
</script>
<style lang="scss" scoped>
    .qr-code {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        z-index: 20;
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
