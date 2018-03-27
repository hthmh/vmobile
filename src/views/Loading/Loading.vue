<template>
  <div>
    <group>
      <x-switch title="Toggle" v-model="show1" @on-change="show1change"></x-switch>
    </group>
    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>
    <div style="padding: 15px;">
      <x-button @click.native="showLoading" type="primary">显示</x-button>
    </div>
    <div style="padding: 15px;">
      <x-button @click.native="showDelayLoading" type="primary">延时显示</x-button>
    </div>
  </div>
</template>



<script>
import { Loading, XSwitch, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Loading,
    XSwitch
  },
  data() {
    return {
      show1: false,
      text1: 'Processing'
    }
  },
  methods: {
    showLoading() {
      this.$vux.loading.show({
        text: 'Loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 2000)
    },
    showDelayLoading() {
      this.$vux.loading.show({
        text: 'Loading',
        delay: 1e3
      })
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 2000)
    },
    show1change(val) {
      if (val) {
        tick(0, percent => {
          if (percent === 100) {
            this.show1 = false
            return
          }
          this.text1 = `${percent}%`
        })
      }
    }
  }
}

function tick(i, cb) {
  setTimeout(function() {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 10)
}
</script>
