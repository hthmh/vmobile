<template>
  <div>
    <divider>带有标题和内容的简单卡片</divider>
    <card :header="{title:'我的钱包'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>1130</span>
          <br/> 积分
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/> 金币
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/> 钻石
        </div>
        <div>
          <span>88</span>
          <br/> 余额
        </div>
      </div>
    </card>

    <br>
    <divider>带有 footer 的卡片</divider>
    <card :header="{title:'商品详情'}" :footer="{title: '查看更多',link:'/panel'}">
      <p slot="content" class="card-padding">自定义内容</p>
    </card>

    <br>
    <divider>使用 header slot 和 content slot</divider>
    <card>
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
        <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
      </div>
    </card>
  </div>
</template>



<script>
import { Card } from 'vux'

export default {
  components: {
    Card
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
