<template>
  <div>
    <div style="padding: 15px;">
      <button-tab>
        <button-tab-item>今天</button-tab-item>
        <button-tab-item selected>本周</button-tab-item>
        <button-tab-item>本月</button-tab-item>
      </button-tab>
      <br>
      <divider>使用 v-model 设置当前选中项</divider>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item @on-item-click="consoleIndex()">文章</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">商品</button-tab-item>
      </button-tab>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item>文章同步</button-tab-item>
        <button-tab-item>商品同步</button-tab-item>
      </button-tab>
      <br>
      <divider>红点</divider>
      <br>
      <button-tab>
        <button-tab-item selected>所有消息</button-tab-item>
        <button-tab-item>
          <span class="vux-reddot-s">新消息</span>
        </button-tab-item>
      </button-tab>
    </div>
  </div>
</template>



<script>
import { ButtonTab, ButtonTabItem } from 'vux'

export default {
  components: {
    ButtonTab,
    ButtonTabItem
  },
  methods: {
    consoleIndex() {
      console.log('click demo01', this.demo01)
    }
  },
  data() {
    return {
      demo01: 1
    }
  }
}
</script>
