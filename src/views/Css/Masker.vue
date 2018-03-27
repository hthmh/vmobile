<template>
  <div>
    <x-button @click.native="fullscreen=true" type="primary">全屏masker</x-button>
    <masker :fullscreen="fullscreen" @click.native="fullscreen=false"></masker>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
    <div style="margin: 10px;">
      <masker style="border-radius: 2px;" color="000" :opacity="0.3">
        <div class="m-img" style="background-image:url(http://placeholder.qiniudn.com/560x560/3cc51f/ffffff)"></div>
        <div slot="content" class="m-title">
          VUX
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>

    <div style="margin: 10px;">
      <masker style="border-radius: 2px;" color="000" :opacity="0.5">
        <div class="m-img" style="background-image:url(http://placeholder.qiniudn.com/560x560/3cc51f/ffffff)"></div>
      </masker>
    </div>
  </div>
</template>

<script>
import { Masker } from 'vux'

export default {
  components: {
    Masker
  },
  data() {
    return {
      fullscreen: false,
      list: [
        {
          title: '洗颜新潮流！人气洁面皂排行榜',
          img: 'http://placeholder.qiniudn.com/360x120/3cc51f/ffffff'
        },
        {
          title: '美容用品 & 日用品（上）',
          img: 'http://placeholder.qiniudn.com/360x120/ff0/ffffff'
        },
        {
          title: '远离车内毒气，日本车载空气净化器精选',
          img: 'http://placeholder.qiniudn.com/460x220/f0f/ffffff'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
