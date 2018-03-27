<template>
  <div>
    <group title="值转换 map">
      <x-switch title="默认true" :value-map="['0', '1']" v-model="stringValue"></x-switch>
      <cell title="value" :value="typeof stringValue + ' ' + stringValue"></cell>
    </group>
    <group title="基础用法">
      <x-switch title="默认false"></x-switch>
      <x-switch title="默认true" :inline-desc="value1 + ''" v-model="value1"></x-switch>
    </group>
    <group title="禁用">
      <x-switch title="默认false" disabled></x-switch>
      <x-switch title="默认true" :value="true" disabled></x-switch>
    </group>
    <group title="prevent default">
      <x-switch title="默认false" prevent-default v-model="value2" @on-click="onClick"></x-switch>
    </group>
    <group title="使用html设置title">
      <x-switch disabled title="<span style='color:red'>我是红色</span>"></x-switch>
    </group>
  </div>
</template>



<script>
import { XSwitch } from 'vux'

export default {
  components: {
    XSwitch
  },
  methods: {
    onClick(newVal, oldVal) {
      console.log(newVal, oldVal)
      this.$vux.loading.show({
        text: 'in processing'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.value2 = newVal
      }, 1000)
    }
  },
  data() {
    return {
      value1: true,
      value2: false,
      stringValue: '0'
    }
  }
}
</script>
