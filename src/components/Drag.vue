<template>
  <div :class="boxClass" :style="`top:calc(100% - ${minHeight}px)`" ref="target">
    <div class="drag-bar" ref="bar">
      <i></i>
    </div>
    <div class="info-box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
var cH = document.documentElement.clientHeight
export default {
  name: 'drag',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    minHeight: {
      type: Number,
      default: 100
    },
    middleHeight: {
      type: Number,
      default: 0.62 * cH
    }
  },
  computed: {
    boxClass() {
      return this.show ? 'drag-box' : 'drag-box yincang'
    },
    bar() {
      return this.$refs.bar
    },
    target() {
      return this.$refs.target
    },
    small_top() {
      return cH - this.minHeight < 0.5 * cH ? 0.5 * cH : cH - this.minHeight
    },
    middle_top() {
      return cH - this.middleHeight < 0.1 * cH
        ? 0.1 * cH
        : cH - this.middleHeight
    },
    dragDistance() {
      return cH / 10
    } //拖动多少距离触发
  },
  data() {
    return {
      left: 0,
      top: 0,
      direction: 1, //>0向上 <0向下
      position: 2, //从上到下的3个位置0 1 2
      currentX: 0,
      currentY: 0
    }
  },
  updated() {
    var vm = this
    if (vm.position == 1) {
      vm.target.style.top = vm.middle_top + 'px'
    } else if (vm.position == 2) {
      vm.target.style.top = vm.small_top + 'px'
    }
  },
  methods: {
    getCss(o, key) {
      return o.currentStyle
        ? o.currentStyle[key]
        : document.defaultView.getComputedStyle(o, false)[key]
    },
    drag() {
      var vm = this

      if (vm.getCss(vm.target, 'left') !== 'auto') {
        vm.left = vm.getCss(vm.target, 'left')
      }
      if (vm.getCss(vm.target, 'top') !== 'auto') {
        vm.top = vm.getCss(vm.target, 'top')
      }

      vm.target.addEventListener('touchstart', vm.touchstart)
      vm.target.addEventListener('touchend', vm.touchend)
    },
    touchstart(event) {
      var vm = this
      var e = event ? event : window.event
      if (vm.getCss(vm.target, 'left') !== 'auto') {
        vm.left = vm.getCss(vm.target, 'left')
      }
      if (vm.getCss(vm.target, 'top') !== 'auto') {
        vm.top = vm.getCss(vm.target, 'top')
      }
      vm.currentX = e.changedTouches[0].pageX
      vm.currentY = e.changedTouches[0].pageY
      document.addEventListener('touchmove', vm.touchmove)
    },
    touchend(event) {
      var vm = this
      if (vm.getCss(vm.target, 'left') !== 'auto') {
        vm.left = vm.getCss(vm.target, 'left')
      }
      if (vm.getCss(vm.target, 'top') !== 'auto') {
        vm.top = vm.getCss(vm.target, 'top')
      }
      var topH = vm.renderTopHeight(vm.top)
      vm.target.style.transition = '.3s'
      vm.target.style.top = topH + 'px'
      if (vm.position == 0) {
        vm.target.removeEventListener('touchstart', vm.touchstart)
        vm.target.removeEventListener('touchend', vm.touchend)
        vm.bar.addEventListener('touchstart', vm.touchstart)
        vm.bar.addEventListener('touchend', vm.touchend)
      } else {
        vm.bar.removeEventListener('touchstart', vm.touchstart)
        vm.bar.removeEventListener('touchend', vm.touchend)
        vm.target.addEventListener('touchstart', vm.touchstart)
        vm.target.addEventListener('touchend', vm.touchend)
      }

      setTimeout(function() {
        vm.target.style.transition = ''
        vm.$emit('dragend', vm.position, topH)
      }, 200)
      vm.$emit('touchend', vm.position, topH)
      document.removeEventListener('touchmove', vm.touchmove)
    },
    touchmove(event) {
      var vm = this
      var e = event ? event : window.event
      var nowX = e.changedTouches[0].pageX,
        nowY = e.changedTouches[0].pageY
      var disX = nowX - vm.currentX,
        disY = nowY - vm.currentY
      vm.direction = disY
      // vm.target.style.left = parseInt(vm.left) + disX + "px";
      var topH = parseInt(vm.top) + disY
      topH = topH < 0 ? 0 : topH > vm.small_top ? vm.small_top : topH
      vm.target.style.top = topH + 'px'
      if (event.preventDefault) {
        event.preventDefault()
      }
      return false
    },
    renderTopHeight(top) {
      var vm = this
      // console.log(vm.direction)
      top = parseFloat(top)
      if (top > vm.small_top) {
        vm.position = 2
        return vm.small_top
      }
      if (top < 0) {
        vm.position = 0
        return 0
      }

      /*按据哪边近靠近哪边
        if (top > vm.middle_top) {
          if (vm.small_top - top < top - vm.middle_top) {
            //在小到中的区间，靠近底部
            return vm.small_top
          } else {
            return vm.middle_top
          }
        }

        if (top < vm.middle_top) {
          if (top < vm.middle_top - top) {
            //在中到上的区间，靠近上
            return 0
          } else {
            return vm.middle_top
          }
        }*/
      if (top > vm.middle_top) {
        //居下半屏
        if (vm.direction < 0) {
          //向上滑动
          if (vm.small_top - top > vm.dragDistance) {
            vm.position = 1
            return vm.middle_top
          } else {
            vm.position = 2
            return vm.small_top
          }
        } else {
          //向下滑动
          if (top - vm.middle_top > vm.dragDistance) {
            vm.position = 2
            return vm.small_top
          } else {
            vm.position = 1
            return vm.middle_top
          }
        }
      } else {
        if (vm.direction < 0) {
          //向上滑动
          if (vm.middle_top - top > vm.dragDistance) {
            vm.position = 0
            return 0
          } else {
            vm.position = 1
            return vm.middle_top
          }
        } else {
          //向下滑动
          if (top > vm.dragDistance) {
            vm.position = 1
            return vm.middle_top
          } else {
            vm.position = 0
            return 0
          }
        }
      }
    }
  },
  mounted() {
    this.drag()
  }
}
</script>
<style scoped>
.drag-box.yincang {
  top: 100% !important;
  transition: 0.3s;
}
.info-box {
  height: calc(100% - 24px); /* no */
  overflow-x: hidden;
  overflow-y: auto;
}
.drag-box {
  position: fixed;
  /* top: calc(100% - 100px); */ /* no */
  width: 100%;
  background-color: #fff;
  /* bottom: 0; */
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3); /* no */
  z-index: 999999;
  touch-action: none;
}
.drag-box .drag-bar {
  padding: 12px 0 12px; /* no */
  text-align: center;
  /* touch-action: none; */
}
.drag-box .drag-bar i {
  display: block;
  margin: 0 auto;
  width: 28px; /* no */
  height: 4px; /* no */
  border-radius: 4px; /* no */
  background-color: #ddd;
}
</style>
