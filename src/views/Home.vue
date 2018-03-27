<template>
  <div id="homeList">
    <h3 class="title">vMobile</h3>

    <group title="样式">
      <cell title="css" link="css" is-link></cell>
      <cell title="图标" link="icon" is-link></cell>
      <cell title="表情" link="wechat-emotion" is-link></cell>
      <cell title="分隔线(Divider)" link="divider" is-link></cell>
      <cell title="遮罩" link="masker" is-link></cell>
      <cell title="步进进度条(flow)" link="flow" is-link></cell>
      <cell title="步进进度条(step)" link="step" is-link></cell>
      <cell title="时间轴" link="timeline" is-link></cell>
      <cell title="按钮" link="button" is-link></cell>
      <cell title="徽章(badge)" link="badge" is-link></cell>
      <cell title="图片模糊(blur)" link="blur" is-link></cell>
      <cell title="表格" link="x-table" is-link></cell>
      <cell title="环形进度条" link="x-circle" is-link></cell>
      <cell title="agree" link="agree" is-link></cell>
      <cell title="wepay" link="wepay" is-link></cell>
      <cell title="XHr" link="x-hr" is-link></cell>
    </group>
    <group title="布局">
      <cell title="Cell" link="cell" is-link></cell>
      <cell title="CellBox" link="cell-box" is-link></cell>
      <cell title="Card" link="card" is-link></cell>
      <cell title="CellFormPreview" link="cellformpreview" is-link></cell>
      <cell title="FormPreview" link="form-preview" is-link></cell>
      <cell title="Panel" link="panel" is-link></cell>
      <cell title="Msg" link="msg" is-link></cell>
      <cell title="Flexbox" link="flexbox" is-link></cell>
      <cell title="Grid" link="grid" is-link></cell>
      <cell title="FullPage" link="fullpage" is-link></cell>
    </group>
    <group title="标签页">
      <cell title="ButtonTab" link="buttontab" is-link></cell>
      <cell title="Tab" link="tab" is-link></cell>
      <cell title="Tabbar" link="tabbar" is-link></cell>
    </group>
    <group title="picker">
      <cell title="XAddress" link="x-address" is-link></cell>
      <cell title="Picker" link="picker" is-link></cell>
    </group>
    <group title="表单">
      <cell title="InlineXNumber" link="inline-x-number" is-link></cell>
      <cell title="XNumber" link="x-number" is-link></cell>
      <cell title="XInput" link="x-input" is-link></cell>
      <cell title="XSwitch" link="x-switch" is-link></cell>
      <cell title="Radio" link="radio" is-link></cell>
      <cell title="CheckIcon" link="check-icon" is-link></cell>
      <cell title="Checker" link="checker" is-link></cell>
      <cell title="Checklist" link="checklist" is-link></cell>
      <cell title="XTextarea" link="x-textarea" is-link></cell>
      <cell title="Selector" link="selector" is-link></cell>
      <cell title="Search" link="search" is-link></cell>
      <cell title="Countdown" link="countdown" is-link></cell>
      <cell title="Countup" link="countup" is-link></cell>
    </group>
    <group title="弹窗">
      <cell title="Toast" link="toast" is-link></cell>
      <cell title="ToastAlert" link="alert" is-link></cell>
      <cell title="ToastConfirm" link="confirm" is-link></cell>
      <cell title="Actionsheet" link="actionsheet" is-link></cell>
      <cell title="Popup" link="popup" is-link></cell>
      <cell title="PopupRadio" link="popup-radio" is-link></cell>
      <cell title="PopupPicker" link="popup-picker" is-link></cell>
      <cell title="PopupHeader" link="popup-header" is-link></cell>
      <cell title="Popover" link="popover" is-link></cell>
    </group>
    <group title="时间日历">
      <cell title="Calendar" link="calendar" is-link></cell>
      <cell title="WeekCalendar" link="week-calendar" is-link></cell>
      <cell title="InlineCalendar" link="inline-calendar" is-link></cell>
      <cell title="DatetimeRange" link="datetime-range" is-link></cell>
      <cell title="DatetimeView" link="datetime-view" is-link></cell>
      <cell title="Datetime" link="datetime" is-link></cell>
      <cell title="Clocker" link="clocker" is-link></cell>
    </group>
    <group title="加载中">
      <cell title="Spinner" link="spinner" is-link></cell>
      <cell title="Loading" link="loading" is-link></cell>
      <cell title="InlineLoading" link="inline-loading" is-link></cell>
      <cell title="LoadMore" link="loadmore" is-link></cell>
    </group>
    <group title="功能">
      <cell title="Sticky" link="sticky" is-link></cell>
      <cell title="Qrcode" link="qrcode" is-link></cell>
      <cell title="Rater" link="rater" is-link></cell>
      <cell title="Range" link="range" is-link></cell>
      <cell title="图片预览" link="previewer" is-link></cell>
      <cell title="轮播" link="swiper" is-link></cell>
      <cell title="滑动删除(swipeout)" link="swipeout" is-link></cell>
      <cell title="上下滚动轮播(marquee)" link="marquee" is-link></cell>
      <cell title="图片懒加载" link="x-img" is-link></cell>
      <cell title="颜色选择器" link="color-picker" is-link></cell>
      <cell title="shake" link="shake" is-link></cell>
    </group>
    <group title="scroller">
      <cell title="scroller" link="scroller"></cell>
      <cell title="Pullup" link="pullup"></cell>
      <cell title="Pulldown" link="pulldown"></cell>
      <cell title="PullupPulldown" link="pullup-pulldown"></cell>
    </group>
    <group title="其他">
      <cell title="vuex" link="vuex" is-link></cell>
      <cell title="directive" link="directive" is-link></cell>
      <cell title="drag分屏" link="drag" is-link></cell>
      <cell title="地图上的drag" link="map-drag" is-link></cell>
      <cell title="svg图标" link="svg-icon" is-link></cell>

    </group>
    <br>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'homeList',
  data() {
    return {}
  },
  computed: {
    ...mapState('app', ['homeScrollTop'])
  },
  methods: {},
  activated() {
    // document.querySelector('#vux_view_box_body').scrollTop = 100
    /* 使用viewBox vux_view_box_body需要设置延时scrollTop才能生效  设置homeList高度百分百可以不用延时*/
    document.querySelector('#homeList').scrollTop = this.homeScrollTop
  },
  mounted() {
    this.$vux.toast.show({
      type: 'text',
      position: 'bottom',
      text: 'hello'
    })
  }
}
</script>

<style>
#homeList {
  height: 100%;
  overflow: scroll;
}
h3.title {
  background-color: #eee;
  text-align: center;
  height: 44px;
  line-height: 44px;
}
</style>
