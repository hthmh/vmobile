<template>
  <div>
    <x-button @click.native="open(1)" type="primary">open1</x-button>
    <x-button @click.native="open2" type="primary">open2</x-button>
    <x-button @click.native="open3" type="primary">open3</x-button>

    <alert v-model="show1" title="标题" content="内容"></alert>
  </div>
</template>
<script>
import { AlertModule, Alert } from 'vux'
export default {
  components: {
    Alert
  },
  data() {
    return {
      show1: false,
      show2: false
    }
  },
  methods: {
    open(num) {
      this[`show${num}`] = !this[`show${num}`]
    },
    open2() {
      AlertModule.show({
        title: 'VUX is Cool',
        content: 'Do you agree?',
        onShow() {
          console.log("Module: I'm showing")
        },
        onHide() {
          console.log("Module: I'm hiding now")
        }
      })
    },
    open3() {
      this.$vux.alert.show({
        title: 'Vux is Cool',
        content: 'Do you agree?',
        onShow() {
          console.log("Plugin: I'm showing")
        },
        onHide() {
          console.log("Plugin: I'm hiding")
        }
      })
    }
  }
}
</script>
