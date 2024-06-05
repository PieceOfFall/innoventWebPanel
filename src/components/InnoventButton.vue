<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import _ from 'lodash'

const emit = defineEmits(['click'])
const props = defineProps<{
  throttleDelay: number
}>()

const handleClick = () => {
  emit('click')
}

const throttledClick = _.throttle(handleClick, props.throttleDelay)

onBeforeUnmount(() => {
  throttledClick.cancel()
})
</script>

<template>
  <el-button @click="throttledClick" size="large">
    <slot />
  </el-button>
</template>

<style scoped lang="scss">
.el-button--large {
  padding: 40px 30px;
}
</style>
