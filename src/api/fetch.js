import Vue from 'vue'
import {
  AjaxPlugin,
  ToastPlugin
} from 'vux'
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)

const Toast = Vue.$vux.toast
const Axios = Vue.http;

const service = Axios.create({
  baseURL: "http://lp-koa.herokuapp.com/",
  timeout: 30 * 1000
})

service.interceptors.request.use(config => {
  //config.data   config.method   config.params
  console.log(config)
  const method = config.method.toLocaleLowerCase()
  if (config.needToken) {
    config.headers['Authorization'] = 123
  }

  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  // console.log(response)
  const res = response.data;

  return res
}, error => {
  console.log("status => " + error.response.status)
  Toast.show({
    type: "text",
    width: '14em',
    text: "服务器忙，请稍后再试...",
    time: 3000,
    position: "bottom"
  })
  return Promise.reject(error)
})


export default service
