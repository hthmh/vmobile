<template>
  <div>
    <br>
    <p style="text-align:center;">
      <inline-loading></inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <span style="vertical-align:middle;display:inline-block;font-size:14px;">加载中&nbsp;&nbsp;</span><inline-loading></inline-loading>
    </p>
    <br>
    <p style="text-align:center;">
      <inline-loading></inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;加载中</span>
    </p>
  </div>
</template>



<script>
import { InlineLoading } from 'vux'

export default {
  components: {
    InlineLoading
  }
}
</script>
