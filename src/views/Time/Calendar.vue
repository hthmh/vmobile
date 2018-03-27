<template>
  <div>
    <group>
      <calendar :readonly="readonly" v-model="demo1" title="基本使用" disable-past placeholder="placeholder" @on-show="log('show')" @on-hide="log('hide')"></calendar>
    </group>

    <div style="padding:15px;">
      <x-button type="primary" @click.native="readonly = !readonly">切换readonly</x-button>
    </div>

    <group>
      <calendar v-model="demo2" title="设置时间为今天" disable-past></calendar>
    </group>

    <group>
      <calendar @on-change="onChange" v-model="demo3" title="禁止选择未来" disable-future></calendar>
    </group>

    <group>
      <calendar @on-change="onChange" v-model="demo4" title="显示popup头部" show-popup-header popup-header-title="请选择" disable-future></calendar>
    </group>

    <group>
      <calendar placeholder="placeholder" @on-change="onChange" v-model="demo5" title="多选" popup-header-title="请选择" disable-future></calendar>
    </group>

    <group>
      <calendar disable-weekend :display-format="displayFormat" placeholder="请选择" @on-change="onChange" v-model="demo6" title="格式化" popup-header-title="请选择"></calendar>
      <cell-box align-items="flex-start">
        <span class="selected-days">value:</span>
        <div>
          <badge v-for="day in demo6" :text="day" :key="day" style="margin-right:10px;"></badge>
        </div>
      </cell-box>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" @click.native="demo6 = []">清空值</x-button>
    </div>
  </div>
</template>



<script>
import { Calendar, Badge, CellBox } from 'vux'

export default {
  components: {
    Calendar,
    Badge,
    CellBox
  },
  data() {
    return {
      readonly: false,
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY',
      demo4: 'TODAY',
      demo5: [],
      demo6: [],
      displayFormat(value, type) {
        if (type === 'string') {
          return value
        } else {
          return value.length ? value.length + ' days' : ''
        }
      }
    }
  },
  methods: {
    log(str) {
      console.log(str)
    },
    onChange(val) {
      console.log('on change', val)
    }
  }
}
</script>

<style scoped>
.selected-days {
  color: #999;
  width: 90px;
}
</style>
