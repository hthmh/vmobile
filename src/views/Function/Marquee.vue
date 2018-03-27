<template>
  <div>
    <divider>默认</divider>
    <marquee>
      <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
    </marquee>
    <br>
    <divider>在 cell 中使用</divider>
    <group>
      <cell title="公告">
        <marquee>
          <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">JavaScript is the best language{{i}}</marquee-item>
        </marquee>
      </cell>
    </group>
    <br>
    <divider>异步数据</divider>
    <marquee>
      <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
    </marquee>
  </div>
</template>



<script>
import { Marquee, MarqueeItem } from 'vux'

export default {
  components: {
    Marquee,
    MarqueeItem
  },
  mounted() {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick(i) {
      console.log(i)
    }
  },
  data() {
    return {
      asyncCount: 0
    }
  }
}
</script>

<style scoped>
.align-middle {
  text-align: center;
}
</style>
