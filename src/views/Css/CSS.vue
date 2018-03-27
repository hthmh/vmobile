<template>
  <div>
    <div>
      <h1>1px</h1>
      <pre>
          - `vux-1px-l` 左边框
          - `vux-1px-r` 右边框
          - `vux-1px-t` 上边框
          - `vux-1px-b` 下边框
          - `vux-1px-tb` 上下边框
          - `vux-1px` 全边框
      </pre>
      <p style="margin:30px;" class="vux-1px">1234</p>
      <p style="margin:30px; border:1px solid #c7c7c7;">1234</p>
    </div>
    <div>
      <h1>blank</h1>
      <pre>
        .vux-blank-full 一个汉字
        .vux-blank-half 半个汉字
      </pre>
      <p>
        123
        <i class="vux-blank-full"></i>4
        <i class="vux-blank-half"></i>5
      </p>
    </div>
    <div>
      <h1>center</h1>
      <div style="margin:15px;border:1px solid green;height:100px;border-radius:5px;" :class="item" v-for="item in ['vux-center-h', 'vux-center-v', 'vux-center']">
        <div style="text-align:center;">
          <div style="color:red;">.{{item}}</div>
          <div>Be Cool with Vue and WeUI</div>
        </div>
      </div>
    </div>
    <div>
      <h1>close</h1>
      <span class="vux-close" style="width:14px;height:14px;"></span>
      <span class="vux-close"></span>
      <span class="vux-close" style="width:30px;height:30px;color:#ccc;"></span>
      <span class="vux-close vux-close-2px" style="width:40px;height:40px;color:#ccc;"></span>
    </div>
    <div>
      <h1>reddot</h1>
      <div style="margin:20px;padding:20px; background-color:#ccc;">
        <span class="vux-reddot"></span>
        <br>
        <span class="vux-reddot-border"></span>
        <br>
        <span class="vux-reddot-s"></span>
      </div>
    </div>
    <div>
      <h1>tap-active</h1>
      <span class="vux-tap-active">vux-tap-active</span>
    </div>
    <divider>分隔线</divider>
    <br><br><br>
  </div>
</template>
<script>
export default {
  name: 'css'
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/blank.less';
@import '~vux/src/styles/center';
@import '~vux/src/styles/close.less';
@import '~vux/src/styles/reddot.less';
@import '~vux/src/styles/tap.less';

.vux-close-2px {
  &::before,
  &::after {
    height: 2px;
    margin-top: -1px;
    background-color: green;
  }
}
</style>

