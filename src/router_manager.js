/*
 *路由管理
 */

import router from './router'
import store from './store'

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})


let loadingFlag
router.beforeEach(function (to, from, next) {
  loadingFlag = setTimeout(function () {
    store.state.app.pageLoading = true
  }, 150)
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex) > parseInt(fromIndex) || (toIndex == '0' && fromIndex == '0')) {
      store.state.app.pageDirection = 'go'
    } else {
      // 判断是否是ios左滑返回,去掉动画
      if (!isPush && (Date.now() - endTime) < 377) {
        store.state.app.pageDirection = ''
      } else {
        store.state.app.pageDirection = 'back'
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.state.app.pageDirection = 'go'
  }


  next()

})
router.afterEach(function (to) {
  clearTimeout(loadingFlag)
  store.state.app.pageLoading = false
  isPush = false
})
