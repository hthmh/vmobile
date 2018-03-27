<template>
  <div>
    <h1 style="font-family:Josefin Sans">fsfasfa</h1>
    <div style="padding: 15px;">
      <color-picker :colors="colors1" v-model="color1"></color-picker>
      <br>
      <color-picker :colors="colors1" v-model="color1" size="middle"></color-picker>
    </div>
    <group title="Use in cell">
      <cell :title="'Color:' + color1">
        <color-picker :colors="colors1" v-model="color1" size="small"></color-picker>
      </cell>
    </group>
    <group title="A cell without title">
      <cell primary="content">
        <color-picker :colors="colors1" v-model="color1" size="middle"></color-picker>
      </cell>
    </group>
  </div>
</template>



<script>
import { ColorPicker } from 'vux'

export default {
  components: {
    ColorPicker
  },
  data() {
    return {
      color1: '#FFEF7D',
      colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff']
    }
  }
}
</script>
