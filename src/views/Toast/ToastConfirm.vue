<template>
  <div>
    <group>
      <x-switch title="显示/隐藏" v-model="show"></x-switch>
    </group>
    <group>
      <x-switch title="显示Prompt" v-model="show3"></x-switch>
    </group>
    <group>
      <x-switch title="设置默认输入文字" v-model="show5"></x-switch>
    </group>
    <group>
      <x-switch title="安卓风格" v-model="show2"></x-switch>
    </group>
    <group>
      <x-switch title="阻止自动关闭" v-model="show4"></x-switch>
    </group>
    <div v-transfer-dom>
      <confirm v-model="show" title="确认删除？" @on-cancel="onCancel" @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
        <p style="text-align:center;">确定？</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show3" show-input title="确认删除？" :input-attrs="{type: 'number'}" @on-cancel="onCancel" @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show5" show-input ref="confirm5" title="确认删除？" @on-cancel="onCancel" @on-confirm="onConfirm5" @on-show="onShow5" @on-hide="onHide">
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show2" title="确认删除？" theme="android" @on-cancel="onCancel" @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
        <p style="text-align:center;">1234</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show4" :close-on-confirm="false" title="确认删除？" @on-confirm="onConfirm4">
        <p style="text-align:center;">确定？</p>
      </confirm>
    </div>
    <br>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin" type="primary">显示</x-button>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin2" type="primary">插件形式调用</x-button>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin3" type="primary">插件形式调用prompt</x-button>
    </div>
  </div>
</template>



<script>
import { Confirm, XSwitch, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    XSwitch
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  },
  methods: {
    onCancel() {
      console.log('on cancel')
    },
    onConfirm(msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onConfirm4() {
      console.log('on confirm')
      this.$vux.loading.show({
        transition: '',
        text: 'processing'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.show4 = false
      }, 1000)
    },
    onHide() {
      console.log('on hide')
    },
    onShow() {
      console.log('on show')
    },
    onShow5() {
      this.$refs.confirm5.setInputValue('default')
    },
    onConfirm5(value) {
      this.$refs.confirm5.setInputValue('')
      this.$vux.toast.text('input value: ' + value)
    },
    showPlugin() {
      this.$vux.confirm.show({
        title: 'Title',
        content: 'Content',
        onShow() {
          console.log('plugin show')
        },
        onHide() {
          console.log('plugin hide')
        },
        onCancel() {
          console.log('plugin cancel')
        },
        onConfirm() {
          console.log('plugin confirm')
        }
      })
    },
    showPlugin2() {
      this.showPlugin()
    },
    showPlugin3() {
      const _this = this
      this.$vux.confirm.prompt('123', {
        title: 'Title',
        onShow() {
          console.log('promt show')
          _this.$vux.confirm.setInputValue('set input value')
        },
        onHide() {
          console.log('prompt hide')
        },
        onCancel() {
          console.log('prompt cancel')
        },
        onConfirm(msg) {
          alert(msg)
        }
      })
    }
  }
}
</script>
