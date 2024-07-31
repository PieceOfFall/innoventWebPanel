<script setup lang="ts">
//import InnoventButton from '@/components/InnoventButton.vue'
import { ctrlPC, ctrlLight, ctrRelay, ctrSequential, ctrlBigScreen } from '@/api'
import { ref, reactive } from 'vue'

//const lightId = ref<number>(1)
const isAllSelect = ref(false)
const isLightSelect = ref(false)
const isEquipmentelect = ref(false)

function handleAllLight(allLightStatus: boolean) {
  ctrlLight(allLightStatus ? 'poweron' : 'poweroff', 'all')
}

function handleAllEquipment(allEquipmentStatus: boolean) {
  const ctrlStatus: 'poweron' | 'poweroff' = allEquipmentStatus ? 'poweron' : 'poweroff'
  ctrlPC(ctrlStatus, 'hosts', 'all')
  ctrlPC(ctrlStatus, 'integrated', 'all')
  ctrRelay(ctrlStatus)
  ctrSequential(ctrlStatus)
  ctrlBigScreen(ctrlStatus)
}

const handleTouchStart = (event: TouchEvent) => {
  // 获取触摸点下的DOM元素
  const touchedElement = event.target as HTMLElement

  // 向被触摸的元素添加 'active' 类
  touchedElement.classList.add('active')
}

/* 点击事件 */
const allClick = (value: boolean) => {
  isAllSelect.value = value
  handleAllLight(value)
  handleAllEquipment(value)
}

const lightClick = (value: boolean) => {
  isLightSelect.value = value
  handleAllLight(value)
}

const equipmentClick = (value: boolean) => {
  isEquipmentelect.value = value
  handleAllEquipment(value)
}
</script>

<template>
  <!-- <div id="main-container">
    <div style="margin-top: 10px">信达展厅控制面板</div>
    <el-divider />

    <b>电脑控制</b>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'host', 'welcome')" :throttle-delay="1000">
      顶面欢迎主机开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'host', 'welcome')" :throttle-delay="1000">
      顶面欢迎主机关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'host', 'pipeline')" :throttle-delay="1000">
      产品管线主机开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'host', 'pipeline')" :throttle-delay="1000">
      产品管线主机关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'host', 'global')" :throttle-delay="1000">
      全球布局主机开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'host', 'global')" :throttle-delay="1000">
      全球布局主机关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'host', 'future')" :throttle-delay="1000">
      未来展望主机开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'host', 'future')" :throttle-delay="1000">
      未来展望主机关
    </InnoventButton>

    <br />
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'leaderHost', '1')" :throttle-delay="1000">
      领导来访主机01开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'leaderHost', '1')" :throttle-delay="1000">
      领导来访主机01关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'leaderHost', '2')" :throttle-delay="1000">
      领导来访主机02开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'leaderHost', '2')" :throttle-delay="1000">
      领导来访主机02关
    </InnoventButton>

    <InnoventButton @click="ctrlPC('poweron', 'hosts', 'all')" :throttle-delay="1000">
      所有主机开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'hosts', 'all')" :throttle-delay="1000">
      所有主机关
    </InnoventButton>
    <br />
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'medicine', '1')" :throttle-delay="1000">
      药品展示一体机01开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'medicine', '1')" :throttle-delay="1000">
      药品展示一体机01关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'medicine', '2')" :throttle-delay="1000">
      药品展示一体机02开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'medicine', '2')" :throttle-delay="1000">
      药品展示一体机02关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'medicine', '3')" :throttle-delay="1000">
      药品展示一体机03开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'medicine', '3')" :throttle-delay="1000">
      药品展示一体机03关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'medicine', '4')" :throttle-delay="1000">
      药品展示一体机04开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'medicine', '4')" :throttle-delay="1000">
      药品展示一体机04关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'medicine', '5')" :throttle-delay="1000">
      药品展示一体机05开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'medicine', '5')" :throttle-delay="1000">
      药品展示一体机05关
    </InnoventButton>
    <br />
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'global', '1')" :throttle-delay="1000">
      全球布局一体机01开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'global', '1')" :throttle-delay="1000">
      全球布局一体机01关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'global', '2')" :throttle-delay="1000">
      全球布局一体机02开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'global', '2')" :throttle-delay="1000">
      全球布局一体机02关
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlPC('poweron', 'global', '3')" :throttle-delay="1000">
      全球布局一体机03开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'global', '3')" :throttle-delay="1000">
      全球布局一体机03关
    </InnoventButton>

    <InnoventButton @click="ctrlPC('poweron', 'integrated', 'all')" :throttle-delay="1000">
      所有一体机开
    </InnoventButton>
    <InnoventButton @click="ctrlPC('poweroff', 'integrated', 'all')" :throttle-delay="1000">
      所有一体机关
    </InnoventButton>
    <el-divider />
    <b>音频控制</b>
    <br />

    <InnoventButton @click="ctrlMedia('normal')" :throttle-delay="1000"> 常规模式 </InnoventButton>
    <InnoventButton @click="ctrlMedia('positioning')" :throttle-delay="1000">
      定位模式
    </InnoventButton>
    <br />

    <InnoventButton @click="ctrlMedia('mute', 1)" :throttle-delay="1000">
      静音1：开
    </InnoventButton>
    <InnoventButton @click="ctrlMedia('unmute', 1)" :throttle-delay="1000">
      静音1：关
    </InnoventButton>
    <InnoventButton @click="ctrlMedia('mute', 2)" :throttle-delay="1000">
      静音2：开
    </InnoventButton>
    <InnoventButton @click="ctrlMedia('unmute', 2)" :throttle-delay="1000">
      静音2：关
    </InnoventButton>
    <InnoventButton @click="ctrlMedia('mute', 3)" :throttle-delay="1000">
      静音3：开
    </InnoventButton>
    <InnoventButton @click="ctrlMedia('unmute', 3)" :throttle-delay="1000">
      静音3：关
    </InnoventButton>
    <InnoventButton @click="ctrlMedia('mute', 4)" :throttle-delay="1000">
      静音4：开
    </InnoventButton>
    <InnoventButton @click="ctrlMedia('unmute', 4)" :throttle-delay="1000">
      静音4：关
    </InnoventButton>

    <el-divider />
    <b>灯带控制</b>
    <br />
    <el-input v-model="lightId" placeholder="Please input light id" style="width: 240px"></el-input>
    <br />
    <InnoventButton @click="ctrlLight('poweron', lightId)" :throttle-delay="1000">
      电源：开
    </InnoventButton>
    <InnoventButton @click="ctrlLight('poweroff', lightId)" :throttle-delay="1000"
      >电源：关</InnoventButton
    >
    <InnoventButton @click="ctrlLight('poweron', 'all')" :throttle-delay="1000">
      全开
    </InnoventButton>
    <InnoventButton @click="ctrlLight('poweroff', 'all')" :throttle-delay="1000"
      >全关</InnoventButton
    >

    <br />
    <b>领导来访屏幕控制</b>
    <br />
    <InnoventButton @click="ctrlLeaderScreen('poweron', 1)" :throttle-delay="1000">
      电源1：开
    </InnoventButton>
    <InnoventButton @click="ctrlLeaderScreen('poweroff', 1)" :throttle-delay="1000">
      电源1：关
    </InnoventButton>
    <InnoventButton @click="ctrlLeaderScreen('poweron', 2)" :throttle-delay="1000">
      电源2：开
    </InnoventButton>
    <InnoventButton @click="ctrlLeaderScreen('poweroff', 2)" :throttle-delay="1000">
      电源2：关
    </InnoventButton>
    <br />

    <b>产品管线屏幕控制</b>
    <br />
    <InnoventButton @click="ctrlPipelineScreen('poweron', 1)" :throttle-delay="1000">
      电源1：开
    </InnoventButton>
    <InnoventButton @click="ctrlPipelineScreen('poweroff', 1)" :throttle-delay="1000">
      电源1：关
    </InnoventButton>
    <InnoventButton @click="ctrlPipelineScreen('poweron', 2)" :throttle-delay="1000">
      电源2：开
    </InnoventButton>
    <InnoventButton @click="ctrlPipelineScreen('poweroff', 2)" :throttle-delay="1000">
      电源2：关
    </InnoventButton>
    <br />

    <b>继电器下所有屏幕</b>
    <br />
    <InnoventButton @click="ctrScreen('poweron')" :throttle-delay="1000">开</InnoventButton>
    <InnoventButton @click="ctrScreen('poweroff')" :throttle-delay="1000">关</InnoventButton>
    <br />

    <b>继电器下所有设备</b>
    <br />
    <InnoventButton @click="ctrRelay('poweron')" :throttle-delay="1000">开</InnoventButton>
    <InnoventButton @click="ctrRelay('poweroff')" :throttle-delay="1000">关</InnoventButton>

    <el-divider />
    <b>时序电源所有设备开关</b>
    <br />
    <InnoventButton @click="ctrSequential('poweron')" :throttle-delay="1000">开</InnoventButton>
    <InnoventButton @click="ctrSequential('poweroff')" :throttle-delay="1000">关</InnoventButton>
    <br />

    <b>音箱开关</b>
    <br />
    <InnoventButton @click="ctrSoundBox('poweron')" :throttle-delay="1000">音箱：开</InnoventButton>
    <InnoventButton @click="ctrSoundBox('poweroff')" :throttle-delay="1000"
      >音箱：关</InnoventButton
    >

    <el-divider />
    <b>RS232网关</b>
    <br />

    调色LED
    <br />
    <InnoventButton @click="ctrlLed('mode', 1)" :throttle-delay="1000"> LED场景一 </InnoventButton>
    <InnoventButton @click="ctrlLed('mode', 2)" :throttle-delay="1000"> LED场景二 </InnoventButton>
    <br />

    <el-divider />
    <b>大屏</b>
    <br />

    <InnoventButton @click="ctrlBigScreen('poweron', 'global')" :throttle-delay="1000">
      大屏 全球：开
    </InnoventButton>
    <InnoventButton @click="ctrlBigScreen('poweroff', 'global')" :throttle-delay="1000">
      大屏 全球：关
    </InnoventButton>
    <InnoventButton @click="ctrlBigScreen('poweron', 'welcome')" :throttle-delay="1000">
      大屏 欢迎：开
    </InnoventButton>
    <InnoventButton @click="ctrlBigScreen('poweroff', 'welcome')" :throttle-delay="1000">
      大屏 欢迎：关
    </InnoventButton>
    <InnoventButton @click="ctrlBigScreen('poweron', 'future')" :throttle-delay="1000">
      大屏 未来：开
    </InnoventButton>
    <InnoventButton @click="ctrlBigScreen('poweroff', 'future')" :throttle-delay="1000">
      大屏 未来：关
    </InnoventButton>
  </div> -->
  <div id="main-container">
    <div class="control-region">
      <div class="logo"><img src="@/images/logo.png" /></div>

      <div class="content">
        <div class="title">设备总控</div>
        <div class="btns">
          <div>
            <div class="box">
              <div class="btn" @touchstart="handleTouchStart" @click="allClick(true)">全部开</div>
              <div class="btn" @touchstart="handleTouchStart" @click="allClick(false)">全部关</div>
            </div>
          </div>
          <div class="box">
            <div class="btn" @touchstart="handleTouchStart" @click="lightClick(true)">灯全开</div>
            <div class="btn" @touchstart="handleTouchStart" @click="lightClick(false)">灯全关</div>
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
  overflow: scroll;
  -webkit-user-select: none; /* Safari */

  .control-region {
    width: 100%;
    height: 100%;

    .logo {
      padding-top: 80px;
      padding-left: 100px;
      img {
        height: 60px;
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
        margin-top: 100px;
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
