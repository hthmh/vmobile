<template>
  <div>
    <p style="text-align:center">shake your phone</p>
    <shake @on-shake="shake" :threshold="5"></shake>
  </div>
</template>

<script>
import { Shake } from 'vux'

export default {
  components: {
    Shake
  },
  methods: {
    shake() {
      alert('share')
    }
  }
}
</script>
