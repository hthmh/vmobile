<template>
  <div>
    <p>自定义组件 导入本项目icons文件夹内所有图标，用use指向，可随处引用（svg sprite）</p>
    <svg-icon icon="bug" class="red" @click="click"></svg-icon>
    <svg-icon icon="bug" class="red" @click="click"></svg-icon>
    <svg-icon icon="xigua"></svg-icon>
    <svg-icon icon="lanmei"></svg-icon>
    <svg-icon icon="boluo"></svg-icon>
    <svg-icon icon="pingguo"></svg-icon>
    <p>vux x-icon组件 只能使用vux icons文件夹固定图标,每个都是单独引用完整svg</p>
    <x-icon type="at"></x-icon>
    <x-icon type="at"></x-icon>
    <x-icon type="at"></x-icon>
    <x-icon type="at"></x-icon>
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      console.log(1)
    }
  }
}
</script>
<style>
.red {
  color: red;
}
</style>
