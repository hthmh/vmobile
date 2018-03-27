<template>
  <div>
    <group title="默认">
      <x-number name="数量" title="数量"></x-number>
    </group>

    <group title="监听 on-change 事件，在调试窗口中输出">
      <x-number title="数量" :value="0" :min="0" @on-change="change"></x-number>
    </group>

    <group title="设置宽度为100px">
      <x-number title="数量" width="100px"></x-number>
    </group>

    <group title="圆形按钮">
      <x-number title="数量" v-model="roundValue" button-style="round" :min="0" :max="5"></x-number>
    </group>

    <group title="设置步长为0.5">
      <x-number title="数量" :step="0.5"></x-number>
    </group>

    <group title="设置值为1，最小值为-5，最大值为8">
      <x-number title="数量" :min="-5" :max="8" :value="1"></x-number>
    </group>

    <group title="设置可以输入">
      <x-number :value="10" title="数量" fillable></x-number>
    </group>

  </div>
</template>



<script>
import { XNumber, XSwitch } from 'vux'

export default {
  components: {
    XNumber,
    XSwitch
  },
  data() {
    return {
      roundValue: 0
    }
  },
  methods: {
    change(val) {
      console.log('change', val)
    }
  }
}
</script>
