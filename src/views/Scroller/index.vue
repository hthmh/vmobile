<template>
  <div>
    <group>
      <cell is-link title="pullup" link="pullup">Pullup</cell>
      <cell is-link title="pulldown" link="pulldown">Pulldown</cell>
      <cell is-link title="pulldownpullup" link="pulldown-pullup">PulldownPullup</cell>
    </group>

    <divider>不带滚动条的水平 scroller</divider>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7">
          <span>{{' ' + i + ' '}}</span>
        </div>
      </div>
    </scroller>

    <divider>显示滚动条的水平 scroller</divider>
    <scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7">
          <span>{{' ' + i + ' '}}</span>
        </div>
      </div>
    </scroller>

    <divider>没有边缘回滚效果的水平 scroller</divider>
    <scroller lock-y scrollbar-x :bounce=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7">
          <span>{{' ' + i + ' '}}</span>
        </div>
      </div>
    </scroller>

    <divider>竖向 scroller scrollTop: {{scrollTop}}</divider>
    <scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
      <div class="box2">
        <p v-for="i in 80">placeholder {{i}}</p>
      </div>
    </scroller>

    <x-button type="primary" @click.native="$refs.scrollerEvent.reset({top:0})">reset</x-button>

    <divider>检查是否滚动到底部</divider>
    <scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
        <p v-for="i in bottomCount">placeholder {{i}}</p>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>

    <divider>显示滚动条的竖向 scroller</divider>
    <scroller lock-x scrollbar-y height="200px" ref="scroller">
      <div class="box2">
        <p v-for="i in 20" v-if="showList1">placeholder {{ i + '' + i }}</p>
        <p v-for="i in 10" v-if="!showList1">placeholder {{ i }}</p>
        <x-button style="margin:10px 0;" type="primary" @click.native="onClickButton">按钮</x-button>
        <group>
          <cell @click.native="onCellClick" title="Title" value="Value"></cell>
        </group>
      </div>
    </scroller>
    <x-button @click.native="changeList" type="primary">改变显示的内容</x-button>
  </div>
</template>



<script>
import { Scroller, Spinner, LoadMore } from 'vux'

export default {
  components: {
    Scroller,
    Spinner,
    LoadMore
  },
  data() {
    return {
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({ top: 0 })
    })
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({ top: 0 })
    })
  },
  methods: {
    onScrollBottom() {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          this.bottomCount += 10
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    },
    onScroll(pos) {
      this.scrollTop = pos.top
    },
    onCellClick() {
      window.alert('cell click')
    },
    onClickButton() {
      window.alert('click')
    },
    changeList() {
      this.showList1 = false
      this.$nextTick(() => {
        this.$refs.scroller.reset({
          top: 0
        })
      })
    }
  }
}
</script>

<style scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
</style>
