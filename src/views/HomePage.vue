<script setup lang="ts">
import { onMounted } from 'vue'
import InnoventButton from '@/components/InnoventButton.vue'
import { sendDataToWebSocket } from '@/plugins/WebSocket'

function log1() {
  console.log(1)
}

onMounted(() => {})
</script>

<template>
  <div id="main-container">
    <div>信达展厅控制面板</div>
    <el-divider />

    <b>电脑控制</b>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">顶面欢迎主机开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">顶面欢迎主机关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">产品管线主机开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">产品管线主机关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局主机开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局主机关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">未来展望主机开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">未来展望主机关</InnoventButton>
    <br />
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">领导来访主机01开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">领导来访主机01关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">领导来访主机02开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">领导来访主机02关</InnoventButton>
    <br />
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机01开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机01关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机02开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机02关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机03开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机03关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机04开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机04关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机05开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">药品展示一体机05关</InnoventButton>
    <br />
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局一体机01开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局一体机01关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局一体机02开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局一体机02关</InnoventButton>
    <br />
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局一体机03开</InnoventButton>
    <InnoventButton @click="log1" :throttle-delay="1000">全球布局一体机03关</InnoventButton>
  </div>
</template>

<style scoped lang="scss">
#main-container {
  color: #888;
  overflow: scroll;

  .el-button {
    margin: 10px;
  }
}
</style>
