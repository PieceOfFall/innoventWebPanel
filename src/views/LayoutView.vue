<script setup lang="ts">
import Header from '@/components/layouts/HeaderView.vue'
import Aside from '@/components/layouts/AsideView.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="main-container">
    <el-container>
      <!-- Header -->
      <!-- <el-header>
        <Header />
      </el-header> -->

      <el-container>
        <!-- Aside -->
        <!-- <el-aside width="400px">
          <Aside />
        </el-aside> -->

        <!-- Main -->
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
#main-container {
  height: 100%;

  .el-container {
    height: 100%;

    .el-container {
      .el-main {
        padding: 0;
        height: 100%;
        width: 100%;
        background-color: #ffffff;
      }

      .el-aside {
        height: 100%;
      }
    }
  }
}
</style>
