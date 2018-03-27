<template>
  <div>
    <group>
      <x-textarea :max="20" placeholder="placeholder" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>
    <group title="和input一起使用">
      <x-input placeholder="标题"></x-input>
      <x-textarea :max="200" name="description" placeholder="placeholder"></x-textarea>
    </group>
    <group title="隐藏计数器">
      <x-textarea :max="20" name="detail" placeholder="placeholder" :show-counter="false"></x-textarea>
    </group>
    <group title="自动高度">
      <x-textarea placeholder="placeholder" :show-counter="false" :rows="1" autosize></x-textarea>
      <x-textarea title="标题" placeholder="placeholder" :show-counter="false" :rows="1" autosize></x-textarea>
    </group>
    <group title="设置高度为200像素">
      <x-textarea title="标题" inline-desc='inline-desc' :max="200" placeholder="placeholder" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
    </group>
  </div>
</template>



<script>
import { XTextarea, XInput } from 'vux'

export default {
  components: {
    XTextarea,
    XInput
  },
  methods: {
    onEvent(event) {
      console.log('on', event)
    }
  }
}
</script>
