<template>
  <div>
    <wepay-input title="支付金额" description="最多可输入金额500元" :placeholder="123" label="$" info="支付金额给商户" v-model="money">
      <x-button type="primary" slot="button">立即支付 {{money}}</x-button>
    </wepay-input>
  </div>
</template>

<script>
import { WepayInput } from 'vux'

export default {
  components: {
    WepayInput
  },
  data() {
    return {
      money: ''
    }
  }
}
</script>
