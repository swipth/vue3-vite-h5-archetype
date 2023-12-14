<!--
 * @Author: swipth
 * @Description: 403 无权限
-->
<template>
  <to-home>
    <van-image :src="NotPermission"></van-image>
    <h3 class="mt-1">抱歉！您暂无访问权限～</h3>
  </to-home>
</template>

<script setup lang="ts">
import NotPermission from "./../../assets/images/common/403.png";
import ToHome from "./ToHome.vue";
</script>

<style scoped lang="less">
h3 {
  color: #aca9a9;
}
</style>
