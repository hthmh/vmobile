<template>
  <div id="app">
    <loading v-model="pageLoading"></loading>
    <view-box ref="viewBox">
      <transition :name="viewTransition" :css="!!pageDirection">
        <keep-alive :include="aliveList">
          <router-view class="router-view"></router-view>
        </keep-alive>
      </transition>
    </view-box>
  </div>
</template>

<script>
import { Loading, ViewBox } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      aliveList: ['homeList']
    }
  },
  components: { Loading, ViewBox },
  computed: {
    ...mapState('app', ['pageLoading', 'pageDirection', 'homeScrollTop']),
    viewTransition() {
      if (!this.pageDirection) return ''
      return 'vpage-' + (this.pageDirection === 'go' ? 'in' : 'out')
    }
  },
  watch: {
    $route(params) {
      document.title = params.name || params.path.substr(1)
      // this.$route.matched[0].name || this.$route.matched[0].path.substr(1)
      if (params.path === '/') {
        setTimeout(() => {
          this.box = document.querySelector('#homeList')
          if (this.box) {
            this.box.removeEventListener('scroll', this.scrollHandler, false)
            this.box.addEventListener('scroll', this.scrollHandler, false)
          }
        }, 1000)
      } else {
        this.box &&
          this.box.removeEventListener('scroll', this.scrollHandler, false)
      }
    }
  },
  methods: {
    ...mapActions('app', ['updateHomeScrollTop'])
  },
  mounted() {
    this.scrollHandler = () => {
      this.box = document.querySelector('#homeList')
      this.updateHomeScrollTop(this.box.scrollTop)
    }
  },
  beforeDestroy() {
    this.box &&
      this.box.removeEventListener('scroll', this.scrollHandler, false)
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/reset.css';
@import '../node_modules/vux/src/styles/1px.less';
@import '~vux/src/styles/center';
body {
  background-color: #fbf9fe;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#vux_view_box_body {
  padding-bottom: 0;
  // -webkit-overflow-scrolling: touch;
}
.router-view {
  width: 100%;
}
.vpage-out-enter-active,
.vpage-out-leave-active,
.vpage-in-enter-active,
.vpage-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vpage-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vpage-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vpage-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vpage-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
