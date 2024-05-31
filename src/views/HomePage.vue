<script setup lang="ts">
import { onMounted } from 'vue'
import { ElButton } from 'element-plus'
import { sendDataToWebSocket } from '@/plugins/WebSocket'

onMounted(() => {
  sendDataToWebSocket('你好')
})
</script>

<template>
  <div>
    <el-button>第一个开关</el-button>
  </div>
</template>

<style></style>
