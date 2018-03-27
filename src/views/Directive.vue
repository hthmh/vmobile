<template>
  <div>
    <p v-directive-demo:foo.qwe.asd='1'>directive</p>
  </div>
</template>
<script>
import DirectiveDemo from '@/directives/demo'
export default {
  directives: {
    DirectiveDemo
  }
}
</script>
<style scoped>
p {
  font-size: 18px;
  line-height: 2;
}
</style>
