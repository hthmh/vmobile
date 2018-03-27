<template>
  <div>
    <group title="自动倒计时">
      <cell title="15s" v-model="value">
        <countdown v-model="time1" @on-finish="finish" v-show="show"></countdown>
      </cell>
    </group>
    <group title="手动模式">
      <x-switch title="开始" v-model="start"></x-switch>
      <cell title="15s">
        <countdown v-model="time2" :start="start" @on-finish="finish2"></countdown>
      </cell>
    </group>
  </div>
</template>



<script>
import { Countdown, XSwitch } from 'vux'

export default {
  components: {
    Countdown,
    XSwitch
  },
  methods: {
    finish(index) {
      this.show = false
      this.value = 'completed'
      console.log('current index', index)
    },
    finish2(index) {
      this.start = false
      this.time = 20
    }
  },
  data() {
    return {
      show: true,
      time1: 15,
      time2: 15,
      value: '',
      start: false
    }
  }
}
</script>
