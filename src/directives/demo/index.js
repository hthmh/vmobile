export default {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    // v-directive-demo:foo.qwe.asd='1'
    el.innerHTML =
      '指令名: ' + s(binding.name) + '<br>' +
      '绑定值: ' + s(binding.value) + '<br>' +
      '指令表达式: ' + s(binding.expression) + '<br>' +
      '传给指令的参数: ' + s(binding.arg) + '<br>' +
      '修饰符: ' + s(binding.modifiers) + '<br>'
    // 'vnode keys: ' + Object.keys(vnode).join(', ')
  }
}
