<template>
  <div>
    <x-button @click.native="showDrag=!showDrag" type="primary">toggle drag</x-button>
    <drag ref="drag" :show="showDrag" @dragend="dragend" :minHeight="minHeight" :middleHeight="middleHeight">
      123
    </drag>
  </div>
</template>
<script>
import Drag from '@/components/Drag'
var cH = document.documentElement.clientHeight
/*
    可根据drag内容获取高度动态改变drag的最小高度和中间高度
    this.$nextTick(() => {
      this.showDrag = true
      this.minHeight = this.$refs.dragTitle.offsetHeight + 28
      this.middleHeight = this.$refs.dragBox.offsetHeight + 28
    }) */
export default {
  components: { Drag },
  data() {
    return {
      showDrag: true,
      minHeight: 100,
      middleHeight: 0.62 * cH
    }
  },
  methods: {
    dragend(position, top) {}
  }
}
</script>
