<template>
  <div>
    <popup-header left-text="取消" right-text="确定" title="请选择银行卡请选择银行卡"></popup-header>
    <group>
      <x-switch v-model="show1" title="Popup 中使用"></x-switch>
    </group>
    <div v-transfer-dom>
      <popup v-model="show1">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <popup-header left-text="取消" right-text="确定" title="请选择银行卡请选择银行卡请选择银行卡请选择银行卡" :show-bottom-border="false" @on-click-left="show1 = false" @on-click-right="show1 = false"></popup-header>
        <group gutter="0">
          <radio :options="['卡1','卡2','卡3','卡4']"></radio>
        </group>
      </popup>
    </div>
  </div>
</template>



<script>
import { PopupHeader, Popup, TransferDom, XSwitch, Radio } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    PopupHeader,
    Popup,
    XSwitch,
    Radio
  },
  data() {
    return {
      show1: false
    }
  }
}
</script>
