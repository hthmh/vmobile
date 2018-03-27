import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store'
import './icons'
import {
  AjaxPlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  XButton,
  Group,
  Cell,
  Box,
  Divider
} from 'vux'
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(VueRouter)
Vue.component('x-button', XButton)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('box', Box)
Vue.component('divider', Divider)

FastClick.attach(document.body)

import '@/router_manager'


import '@/utils/vux'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
