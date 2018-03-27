<template>
  <div>
    <div style="padding:15px;">
      <x-button @click.native="showPosition('top')" type="primary">Top</x-button>
      <x-button @click.native="showPosition('middle')" type="primary">Middle</x-button>
      <x-button @click.native="showPosition('bottom')" type="primary">Bottom</x-button>
      <x-button @click.native="showPosition('')" type="primary">Default</x-button>
    </div>

    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">基础用法</toast>
    <group>
      <x-switch title="基础用法" v-model="show1"></x-switch>
      <x-switch title="type:text" v-model="show2"></x-switch>
      <x-switch title="type:cancel" v-model="show3"></x-switch>
      <x-switch title="type:warn" v-model="show4"></x-switch>
      <x-switch title="time:1s" v-model="show5"></x-switch>
      <x-switch title="long text" v-model="show6"></x-switch>
    </group>

    <toast v-model="show1" @on-hide="onHide">基础用法</toast>
    <toast v-model="show2" type="text">success</toast>
    <toast v-model="show3" type="cancel">type:cancel</toast>
    <toast v-model="show4" type="warn">type:warn</toast>
    <toast v-model="show5" :time="1000">time:1s</toast>
    <toast v-model="show6" type="text" width="20em">show me codeshow me codeshow me codeshow me codeshow me codeshow me codeshow me code</toast>

    <group title="设置text">
      <x-switch title="type:success" v-model="show7"></x-switch>
      <x-switch title="type:text" v-model="show8"></x-switch>
    </group>

    <toast v-model="show7" text="Hello World"></toast>
    <toast v-model="show8" type="text" text="Hello World"></toast>

    <group title="插件形式调用">
      <x-switch title="默认" v-model="show9" @on-change="onChange"></x-switch>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" @click.native="$vux.toast.text('How are you~', 'top')">use text function</x-button>
    </div>
  </div>
</template>



<script>
import { Toast, XSwitch } from 'vux'
export default {
  components: {
    Toast,
    XSwitch
  },
  methods: {
    showPosition(position) {
      this.position = position
      this.showPositionValue = true
    },
    onHide() {
      console.log('on hide')
    },
    onChange(val) {
      const _this = this
      if (val) {
        this.$vux.toast.show({
          text: 'Hello World',
          onShow() {
            console.log("Plugin: I'm showing")
          },
          onHide() {
            console.log("Plugin: I'm hiding")
            _this.show9 = false
          }
        })
      } else {
        this.$vux.toast.hide()
      }
    }
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      position: 'default',
      showPositionValue: false
    }
  }
}
</script>
