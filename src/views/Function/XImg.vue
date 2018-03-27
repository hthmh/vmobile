<template>
  <div>
    container必须指定(选择器),若没有使用viewBox且没有固定盒子则指定为body
    <div v-for="(src,index) in list" style="text-align:center;" :key="index">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="100" container="#vux_view_box_body"></x-img>
    </div>
  </div>
</template>

<script>
import { XImg } from 'vux'
export default {
  components: {
    XImg
  },
  methods: {
    success(src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error(src, ele, msg) {
      console.log('error load', msg, src)
      ele.src = 'http://placeholder.qiniudn.com/375x375/3cc51f/ffffff'
      const span = ele.parentNode.querySelector('span')
      //   span.innerText = 'load error'
      ele.parentNode.removeChild(span)
    }
  },
  data() {
    return {
      list: [
        'https://o5omsejde.qnssl.com/demo/test1.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        'https://o5omsejde.qnssl.com/demo/test0.jpg',
        'https://o5omsejde.qnssl.com/demo/test4.jpg',
        'https://o5omsejde.qnssl.com/demo/test5.jpg',
        'https://o5omsejde.qnssl.com/demo/test6.jpg',
        'https://o5omsejde.qnssl.com/demo/test7.jpg',
        'https://o5omsejde.qnssl.com/demo/test8.jpg'
      ]
    }
  }
}
</script>

<style>
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>
