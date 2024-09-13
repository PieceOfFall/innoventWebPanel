<script setup lang="ts">
//import InnoventButton from '@/components/InnoventButton.vue'
import {
  ctrlPC,
  ctrlLight,
  ctrSequential,
  ctrlBigScreen,
  ctrlMedia,
  ctrlMonitor,
  command
} from '@/api'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

console.log(window.config);


type Region = 'all' | 'center' | 'background' | 'global' | 'outlook'
const selectedTab = ref<Region>('all')

const handleTouchStart = (event: TouchEvent) => {
  // 获取触摸点下的DOM元素
  const touchedElement = event.target as HTMLElement

  // 向被触摸的元素添加 'active' 类
  touchedElement.classList.add('active')
}

const changeRegion = (regionName:Region)=>selectedTab.value = regionName

//#region 总控
//const lightId = ref<number>(1)
const isAllSelect = ref(false)
const isLightSelect = ref(false)
const isEquipmentSelect = ref(false)

const handleAllLight = async (allLightStatus: boolean) => {
  ctrlLight(allLightStatus ? 'poweron' : 'poweroff', 'all')
  await delay(2000)
}

const delay = async (time: number) => new Promise((resolve) => setTimeout(resolve, time))

async function handleAllEquipment(allEquipmentStatus: boolean) {
  const ctrlStatus: 'poweron' | 'poweroff' = allEquipmentStatus ? 'poweron' : 'poweroff'
  ctrlBigScreen(ctrlStatus, 'global')
  await delay(2000)
  ctrlBigScreen(ctrlStatus, 'future')
  await delay(2000)
  ctrlBigScreen(ctrlStatus, 'welcome')
  ctrlPC(ctrlStatus, 'hosts', 'all')
  await delay(2000)
  ctrlPC(ctrlStatus, 'integrated', 'all')
  ctrSequential(ctrlStatus)
}

type EquipmentStatus = 'idle' | 'closing' | 'opening'
let equipmentStatus: EquipmentStatus = 'idle'
let timerStopTime: number | null = null

/**
 * 检查是否需要进行点击处理
 */
function checkHandleNeed(): boolean {
  if (timerStopTime !== null) {
    const timeLeft = (timerStopTime - new Date().getTime()) / 1000

    ElMessage({
      message: `正在${equipmentStatus === 'closing' ? '关闭' : '启动'}中，请${Math.floor(timeLeft)}秒后再试`
    })
    return false
  }
  return true
}

/* 点击事件 */
const allClick = async (value: boolean) => {
  if (!checkHandleNeed()) return
  else {
    equipmentStatus = value ? 'opening' : 'closing'
    timerStopTime = new Date().getTime() + 30 * 1000
    setTimeout(() => {
      equipmentStatus = 'idle'
      timerStopTime = null
    }, 30 * 1000)
  }

  isAllSelect.value = value

  await handleAllLight(value)
  await handleAllEquipment(value)
}

const lightClick = async (value: boolean) => {
  isLightSelect.value = value
  await handleAllLight(value)
}

const equipmentClick = async (value: boolean) => {
  if (!checkHandleNeed()) return
  else {
    equipmentStatus = value ? 'opening' : 'closing'
    timerStopTime = new Date().getTime() + 30 * 1000
    setTimeout(() => {
      equipmentStatus = 'idle'
      timerStopTime = null
    }, 30 * 1000)
  }

  isEquipmentSelect.value = value
  await handleAllEquipment(value)
}

function togglePositioning(value: boolean) {
  ctrlMedia(value ? 'positioning' : 'normal')
}

//#endregion

//#region 中央展台区

//#endregion
</script>

<template>
  <div id="main-container">
    <div class="control-region">
      <div class="logo">
        <img src="@/images/logo.png" />
        <span id="tabBox">
          <div :class="selectedTab === 'all' ? 'selected-tab':'tab'" @click="changeRegion('all')">设备总控</div>
          <div :class="selectedTab === 'center' ? 'selected-tab':'tab'" @click="changeRegion('center')">中心展区</div>
          <div :class="selectedTab === 'background' ? 'selected-tab':'tab'" @click="changeRegion('background')">创立背景</div>
          <div :class="selectedTab === 'global' ? 'selected-tab':'tab'" @click="changeRegion('global')">全球布局</div>
          <div :class="selectedTab === 'outlook' ? 'selected-tab':'tab'" @click="changeRegion('outlook')">未来展望</div>

        </span>
      </div>

      <div class="content">
        <div class="title">
          {{
            selectedTab === 'all'
              ? '设备总控'
              : selectedTab === 'center'
                ? '中央展台区'
                : selectedTab === 'background'
                  ? '创立背景区'
                  : selectedTab === 'global'
                    ? '全球布局区'
                    : '未来展望区'
          }}
        </div>

        <!-- 总控 -->
        <div id="all" v-if="selectedTab === 'all'">
          <div class="btns">
            <div>
              <div class="box">
                <div class="btn" @touchstart="handleTouchStart" @click="allClick(true)">全部开</div>
                <div class="btn" @touchstart="handleTouchStart" @click="allClick(false)">
                  全部关
                </div>
              </div>
            </div>
            <div class="box">
              <div class="btn" @touchstart="handleTouchStart" @click="lightClick(true)">灯全开</div>
              <div class="btn" @touchstart="handleTouchStart" @click="lightClick(false)">
                灯全关
              </div>
            </div>
            <div class="box">
              <div class="btn" @touchstart="handleTouchStart" @click="equipmentClick(true)">
                设备全开
              </div>
              <div class="btn" @touchstart="handleTouchStart" @click="equipmentClick(false)">
                设备全关
              </div>
            </div>
          </div>
          <div class="btns">
            <div class="box">
              <div class="btn" @touchstart="handleTouchStart" @click="ctrlMedia('normal')">
                常规模式
              </div>
              <div class="btn" @touchstart="handleTouchStart" @click="ctrlMedia('positioning')">
                定位模式
              </div>
            </div>

            <div class="box">
              <div class="btn" @touchstart="handleTouchStart" @click="ctrlMonitor('visible')">
                监控显示
              </div>
              <div class="btn" @touchstart="handleTouchStart" @click="ctrlMonitor('hidden')">
                监控隐藏
              </div>
            </div>
          </div>
        </div>

        <!-- 中央区域 -->
        <div id="center" v-if="selectedTab === 'center'">

          <div class="btns">
            <div>
              <div class="box">
                <div class="btn" @touchstart="handleTouchStart" @click="allClick(true)">全部开</div>
                <div class="btn" @touchstart="handleTouchStart" @click="allClick(false)">
                  全部关
                </div>
              </div>
            </div>
          </div>

          <div class="btns">
            <div>
              <div class="box">
                <div class="btn" @touchstart="handleTouchStart" @click="allClick(true)">全部开</div>
                <div class="btn" @touchstart="handleTouchStart" @click="allClick(false)">
                  全部关
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- 创立背景区域 -->
        <div id="background" v-if="selectedTab === 'background'">background</div>

        <!-- 全球布局区域 -->
        <div id="global" v-if="selectedTab === 'global'">global</div>

        <!-- 未来展望区域 -->
        <div id="outlook" v-if="selectedTab === 'outlook'">outlook</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  background-image: url(@/images/中控背景.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  color: #888;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  /* Safari */

  .control-region {
    width: 100%;
    height: 100%;

    .logo {
      padding-top: 80px;
      padding-left: 100px;

      img {
        height: 60px;
      }

      #tabBox {
        float: right;
        display: flex;
        justify-content: space-between;
        margin-right: 100px;

        .tab {
          text-align: center;
          font-size: 20px;
          font-weight: 100;
          padding: 10px 0;
          width: 140px;
          background-color: rgba($color: #ffffffff, $alpha: 0.5);
          border-radius: 30px;
          margin: 0 10px;
          box-shadow: 0px 0px 20px 1px rgba($color: #005CC8, $alpha: 0.25);
          cursor: pointer;
        }

        .selected-tab {
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          padding: 10px 0;
          width: 140px;
          color: #005CC8;
          background-color: rgba($color: #ffffffff, $alpha: 0.5);
          border-radius: 30px;
          margin: 0 10px;
          box-shadow: 0px 0px 20px 1px rgba($color: #005CC8, $alpha: 0.45); 
        }
      }
    }

    .content {
      padding-top: 80px;
      text-align: center;

      .title {
        font-size: 45px;
        font-weight: bold;
        color: #305cc9;
      }

      .btns {
        width: 100%;
        display: flex;
        margin-top: 50px;
        justify-content: space-evenly;

        .box {
          display: flex;
          justify-content: space-between;

          .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            height: 150px;
            width: 150px;
            color: #305cc9;
            font-size: 25px;
            font-weight: bold;
            padding-left: 8px;

            background-image: url(@/images/白色.png);
            background-size: cover;
            background-repeat: no-repeat;

            &:active {
              color: white;
              background-image: url(@/images/蓝色.png);
            }
          }
        }
      }
    }
  }
}
</style>
