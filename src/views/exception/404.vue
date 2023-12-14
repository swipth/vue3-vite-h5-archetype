<!--
 * @Author: swipth
 * @Description:  404
-->
<template>
  <to-home>
    <van-image :src="NotFound"></van-image>
    <h3 class="mt-1">抱歉！您的请求资源丢失了～</h3>
  </to-home>
</template>

<script setup lang="ts">
import NotFound from "./../../assets/images/common/404.png";
import ToHome from "./ToHome.vue";
</script>

<style scoped lang="less">
h3 {
  color: #aca9a9;
}
</style>
