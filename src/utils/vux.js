// import {
//   querystring,
//   stringTrim
// } from 'vux'

// querystring.parse('a=b&c=d') // {a:'b',c:'d'}, 默认参数为 location.search

// querystring.stringify({
//   a: 'b',
//   c: 'd'
// }) // 'a=b&c=d'，注意不支持复杂嵌套的结构

// console.log(stringTrim(' 1024 ')) // 1024

/* ============================================================================ */

// import {
//   numberComma,
//   numberPad,
//   numberRandom //生成2个数之间的随机数
// } from 'vux'
// numberComma(21342132) // 21,342,132
// numberComma(21342132, 4) // 2134,2132
// console.log('$' + numberComma('21342132.234')) // 21,342,132.234

// numberPad(1) // 01
// console.log(numberPad(34, 4)) // 0034

// numberRandom(1, 7) // 2

/* ============================================================================ */

// import {
//   dateFormat,
//   dateRange
// } from 'vux' //默认YYYY-MM-DD HH:mm:ss

// console.log(dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss 星期E'))
// console.log(dateRange('2017-01-01', '2017-03-03')) //返回范围内每一天

/* ============================================================================ */

// import {
//   ChinamobileTool
// } from 'vux'
// console.log(ChinamobileTool(15555555555))

/* ============================================================================ */

// import {
//   base64
// } from 'vux'
// console.log(base64.encode('pj'))
// console.log(base64.decode('cGo='))

/* ============================================================================ */

// import {
//   cookie
// } from 'vux'
// cookie.set('foo', 3)
// console.log(cookie.get('foo'))
// cookie.remove('foo')
// // cookie.set('bar', 4, {
// //   domain: 'baidu.com',
// //   path: '/',
// //   expires: 30
// // })

/* ============================================================================ */

// import {
//   querystring
// } from 'vux'

// console.log(querystring.parse(location.search))

// function getUrlKey(name) {
//   return (
//     decodeURIComponent(
//       (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
//         location.href
//       ) || [, ''])[1].replace(/\+/g, '%20')
//     ) || null
//   )
// }
// console.log(getUrlKey("name"))

/* ============================================================================ */
// import Vue from 'vue'
// import {
//   DevicePlugin
// } from 'vux'
// DevicePlugin(Vue)
/*
 this.$device = {
    isAndroid,
    isIpad,
    isIpod,
    isIphone,
    isWechat,
    isAlipay
  }
*/
/* ============================================================================ */



