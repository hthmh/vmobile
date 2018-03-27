<template>
  <div style="width: 95%;margin: 0 auto;">
    <br>
    <div>
      <step v-model="step1" background-color='#fbf9fe'>
        <step-item title="步骤一" description="step 1"></step-item>
        <step-item title="步骤二" description="step 2"></step-item>
        <step-item title="步骤三" description="step 3"></step-item>
      </step>
    </div>
    <x-hr></x-hr>
    <div>
      <step v-model="step2" background-color='#ccc' gutter="10px">
        <step-item title="开始"></step-item>
        <step-item title="进行中"></step-item>
        <step-item title="结束"></step-item>
      </step>
      <div class="btn_wrap">
        <x-button type="primary" @click.native="nextStep">下一步{{step2}}</x-button>
      </div>
    </div>
  </div>
</template>



<script>
import { Step, StepItem, XHr } from 'vux'

export default {
  components: {
    Step,
    StepItem,
    XHr
  },
  data() {
    return {
      step1: 1,
      step2: 0
    }
  },
  methods: {
    nextStep() {
      this.step2++
    }
  }
}
</script>

<style lang="less">
.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>
