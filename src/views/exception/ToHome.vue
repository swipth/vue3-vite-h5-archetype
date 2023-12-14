<!--
 * @Author: swipth
 * @Description: 结果页封装组件
-->
<template>
  <div class="d-flex align-items-center flex-column justify-content-center" style="height: 75%">
    <slot></slot>
    <div class="mt-3">
      <van-button plain type="primary" round size="small" class="btn" @click="handleLink">返回首页</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function handleLink() {
  router.replace("/");
}
</script>

<style scoped>
.btn {
  width: 99px;
  height: 32px;
}
</style>
