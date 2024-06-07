<script setup lang="ts">
import InnoventButton from '@/components/InnoventButton.vue'
import { ctrlPC } from '@/api/computer'
import { ctrlMedia } from '@/api/media'
import { ctrlLight } from '@/api/light'
import { ctrlLed } from '@/api/led'
import { ctrSoundBox } from '@/api/soundbox'
import { ctrlScreen } from '@/api/screen'
import { ref } from 'vue'

const lightId = ref<number>(1)
</script>

<template>
  <div id="main-container">
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

    <el-divider />
    <b>RS232网关</b>
    <br />

    调色LED
    <br />
    <InnoventButton @click="ctrlLed('poweron')" :throttle-delay="1000"> LED：开 </InnoventButton>
    <InnoventButton @click="ctrlLed('poweroff')" :throttle-delay="1000"> LED：关 </InnoventButton>
    <br />
    音箱开关
    <br />
    <InnoventButton @click="ctrSoundBox('poweron')" :throttle-delay="1000">音箱：开</InnoventButton>
    <InnoventButton @click="ctrSoundBox('poweroff')" :throttle-delay="1000"
      >音箱：关</InnoventButton
    >

    <el-divider />
    <b>大屏</b>
    <br />

    <InnoventButton @click="ctrlScreen('poweron', 1)" :throttle-delay="1000">
      大屏1：开
    </InnoventButton>
    <InnoventButton @click="ctrlScreen('poweroff', 1)" :throttle-delay="1000">
      大屏1：关
    </InnoventButton>
    <InnoventButton @click="ctrlScreen('poweron', 2)" :throttle-delay="1000">
      大屏2：开
    </InnoventButton>
    <InnoventButton @click="ctrlScreen('poweroff', 2)" :throttle-delay="1000">
      大屏2：关
    </InnoventButton>
    <InnoventButton @click="ctrlScreen('poweron', 3)" :throttle-delay="1000">
      大屏3：开
    </InnoventButton>
    <InnoventButton @click="ctrlScreen('poweroff', 3)" :throttle-delay="1000">
      大屏3：关
    </InnoventButton>
  </div>
</template>

<style scoped lang="scss">
#main-container {
  text-align: center;
  color: #888;
  overflow: scroll;

  .el-button {
    margin: 10px;
  }
}
</style>
