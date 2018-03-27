const _import = file => () =>
  import (`@/views/${file}.vue`)
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'vMobile',
      component: _import('Home')
    },
    /* 样式 */
    {
      path: '/css',
      name: 'vux样式',
      component: _import('Css/CSS')
    },
    {
      path: '/icon',
      name: '图标',
      component: _import('Css/Icon')
    },
    {
      path: '/wechat-emotion',
      name: '微信表情',
      component: _import('Css/WechatEmotion')
    },
    {
      path: '/divider',
      name: '分割线',
      component: _import('Css/Divider')
    },
    {
      path: '/masker',
      name: '遮罩',
      component: _import('Css/Masker')
    },
    {
      path: '/flow',
      name: '步进进度条(flow)',
      component: _import('Css/Flow')
    },
    {
      path: '/step',
      name: '步进进度条(step)',
      component: _import('Css/Step')
    },
    {
      path: '/timeline',
      name: '时间轴',
      component: _import('Css/Timeline')
    },
    {
      path: '/button',
      name: '按钮',
      component: _import('Css/Button')
    },
    {
      path: '/badge',
      name: '徽章',
      component: _import('Css/Badge')
    },
    {
      path: '/blur',
      name: '图片模糊',
      component: _import('Css/Blur')
    },
    {
      path: '/x-table',
      name: '表格',
      component: _import('Css/XTable')
    },
    {
      path: '/x-circle',
      name: '环形进度条',
      component: _import('Css/XCircle')
    },
    {
      path: '/agree',
      component: _import('Css/Agree')
    },
    {
      path: '/wepay',
      component: _import('Css/Wepay')
    },
    {
      path: '/x-hr',
      component: _import('Css/XHr')
    },
    /* 布局 */
    {
      path: '/cell',
      component: _import('Layout/Cell')
    },
    {
      path: '/cell-box',
      component: _import('Layout/CellBox')
    },
    {
      path: '/card',
      component: _import('Layout/Card')
    },
    {
      path: '/cellformpreview',
      component: _import('Layout/CellFormPreview')
    },
    {
      path: '/form-preview',
      component: _import('Layout/FormPreview')
    },
    {
      path: '/panel',
      component: _import('Layout/Panel')
    },
    {
      path: '/msg',
      component: _import('Layout/Msg')
    },
    {
      path: '/flexbox',
      component: _import('Layout/Flexbox')
    },
    {
      path: '/grid',
      component: _import('Layout/Grid')
    },
    {
      path: '/fullpage',
      component: _import('Layout/FullPage')
    },
    /* 标签页 */
    {
      path: '/buttontab',
      component: _import('Tab/ButtonTab')
    },
    {
      path: '/tab',
      component: _import('Tab/Tab')
    },
    {
      path: '/tabbar',
      component: _import('Tab/Tabbar')
    },
    /* Picker */
    {
      path: '/x-address',
      component: _import('Picker/XAddress')
    },
    {
      path: '/picker',
      component: _import('Picker/Picker')
    },
    /* 表单 */
    {
      path: '/inline-x-number',
      component: _import('Form/InlineXNumber')
    },
    {
      path: '/x-number',
      component: _import('Form/XNumber')
    },
    {
      path: '/x-input',
      component: _import('Form/XInput')
    },
    {
      path: '/x-switch',
      component: _import('Form/XSwitch')
    },
    {
      path: '/radio',
      component: _import('Form/Radio')
    },
    {
      path: '/check-icon',
      name: '多选图标',
      component: _import('Form/CheckIcon')
    },
    {
      path: '/checker',
      component: _import('Form/Checker')
    },
    {
      path: '/checklist',
      component: _import('Form/Checklist')
    },
    {
      path: '/x-textarea',
      component: _import('Form/XTextarea')
    },
    {
      path: '/selector',
      component: _import('Form/Selector')
    },
    {
      path: '/search',
      component: _import('Form/Search')
    },
    {
      path: '/countdown',
      component: _import('Form/Countdown')
    },
    {
      path: '/countup',
      component: _import('Form/Countup')
    },
    /* 弹窗 */
    {
      path: '/toast',
      name: '弹窗',
      component: _import('Toast/Toast')
    },
    {
      path: '/alert',
      name: '弹窗-alert',
      component: _import('Toast/ToastAlert')
    },
    {
      path: '/confirm',
      name: '弹窗-confirm',
      component: _import('Toast/ToastConfirm')
    },
    {
      path: '/actionsheet',
      name: '选择器',
      component: _import('Toast/Actionsheet')
    },
    {
      path: '/popup',
      component: _import('Toast/Popup')
    },
    {
      path: '/popup-radio',
      component: _import('Toast/PopupRadio')
    },
    {
      path: '/popup-picker',
      component: _import('Toast/PopupPicker')
    },
    {
      path: '/popup-header',
      component: _import('Toast/PopupHeader')
    },
    {
      path: '/popover',
      component: _import('Toast/Popover')
    },
    /* 时间日历 */
    {
      path: '/calendar',
      name: '弹窗日历',
      component: _import('Time/Calendar')
    },
    {
      path: '/week-calendar',
      name: '日历',
      component: _import('Time/WeekCalendar')
    },
    {
      path: '/inline-calendar',
      name: '页面日历',
      component: _import('Time/InlineCalendar')
    },
    {
      path: '/datetime-range',
      component: _import('Time/DatetimeRange')
    },
    {
      path: '/datetime-view',
      component: _import('Time/DatetimeView')
    },
    {
      path: '/datetime',
      component: _import('Time/Datetime')
    },
    {
      path: '/clocker',
      name: "倒计时",
      component: _import('Time/Clocker')
    },
    /* 加载中 */
    {
      path: '/spinner',
      component: _import('Loading/Spinner')
    },
    {
      path: '/loading',
      component: _import('Loading/Loading')
    },
    {
      path: '/inline-loading',
      component: _import('Loading/InlineLoading')
    },
    {
      path: '/loadmore',
      component: _import('Loading/LoadMore')
    },
    /* 功能 */
    {
      path: '/sticky',
      component: _import('Function/Sticky')
    },
    {
      path: '/qrcode',
      component: _import('Function/Qrcode')
    },
    {
      path: '/rater',
      component: _import('Function/Rater')
    },
    {
      path: '/range',
      component: _import('Function/Range')
    },
    {
      path: '/previewer',
      name: '图片预览',
      component: _import('Function/Previewer')
    },
    {
      path: '/swiper',
      component: _import('Function/Swiper')
    },
    {
      path: '/swipeout',
      component: _import('Function/Swipeout')
    },

    {
      path: '/marquee',
      component: _import('Function/Marquee')
    },
    {
      path: '/x-img',
      component: _import('Function/XImg')
    },
    {
      path: '/color-picker',
      component: _import('Function/ColorPicker')
    },
    {
      path: '/shake',
      component: _import('Function/Shake')
    },
    /* Scroller */
    {
      path: '/scroller',
      component: _import('Scroller/index')
    },
    {
      path: '/pullup',
      component: _import('Scroller/Pullup')
    },
    {
      path: '/pulldown',
      component: _import('Scroller/Pulldown')
    },
    {
      path: '/pulldown-pullup',
      component: _import('Scroller/PulldownPullup')
    },
    /* 其他 */
    {
      path: '/vuex',
      component: _import('Vuex')
    },
    {
      path: '/directive',
      component: _import('Directive')
    },
    {
      path: '/drag',
      component: _import('Drag')
    },
    {
      path: '/map-drag',
      component: _import('MapDrag')
    },
    {
      path: '/svg-icon',
      component: _import('Icon')
    }
  ]
})
