<template>
  <div>
    <checklist title="基本使用" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></checklist>
    <div style="padding:15px;">
      <x-button @click.native="labelPosition = labelPosition === 'left' ? '' : 'left'" type="primary">切换label位置</x-button>
      <x-button @click.native="selectFirst" type="primary">选择第一个值</x-button>
      <x-button @click.native="selectFirstTwo" type="primary">选择前两个值</x-button>
      <x-button @click.native="selectLeft" type="primary">选择剩下的值</x-button>
    </div>

    <checklist title="默认选中 China 和 Japan (禁用操作)" disabled label-position="left" :options="commonList" v-model="checklist002" @on-change="change"></checklist>

    <checklist title="最多可选中2个" :options="commonList" v-model="checklist003" :max=2 @on-change="change"></checklist>

    <checklist title="max=1（单选模式）" :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>

    <checklist title="打乱选项顺序" random-order :options="checklist005" v-model="checklist005Value" @on-change="change"></checklist>

    <checklist ref="demoObject" title="使用 Object 类型的选项列表，key 必须为字符串" :options="objectList" v-model="objectListValue" @on-change="change"></checklist>
    <group>
      <cell-box>{{ objectListValue }}</cell-box>
      <cell-box>{{ fullValues }}</cell-box>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" @click.native="fullValues = $refs.demoObject.getFullValue()">getFullValue()</x-button>
    </div>

    <checklist title="包含 inlineDesc 属性的 Object 类型选项列表" :options="inlineDescList" v-model="inlineDescListValue" @on-change="change"></checklist>

    <checklist title="异步选项列表" :max="3" :options="asyncList" v-model="asyncListValue" @on-change="change"></checklist>

    <divider>相关</divider>
    <group title="参见">
      <cell title="Checker" is-link link="/checker"></cell>
    </group>
  </div>
</template>



<script>
import { CellBox, Checklist } from 'vux'

export default {
  mounted() {
    setTimeout(() => {
      this.asyncList = ['A', 'B', 'C', 'D']
    }, 3000)
  },
  components: {
    Checklist,
    CellBox
  },
  methods: {
    change(val, label) {
      console.log('change', val, label)
    },
    selectFirst() {
      this.checklist001 = ['China']
    },
    selectFirstTwo() {
      this.checklist001 = ['China', 'Japan']
    },
    selectLeft() {
      this.checklist001 = this.commonList.filter(
        val => !this.checklist001.includes(val)
      )
    }
  },
  data() {
    return {
      fullValues: [],
      labelPosition: '',
      error: '',
      commonList: ['China', 'Japan', 'America'],
      checklist001: [],
      checklist0011: [],
      checklist002: ['China', 'Japan'],
      checklist003: ['China', 'Japan'],
      checklist005: ['01', '02', '03'],
      checklist005Value: [],
      objectList: [
        { key: '1', value: '001 value' },
        { key: '2', value: '002 value' },
        { key: '3', value: '003 value' }
      ],
      objectListValue: ['1', '2'],
      inlineDescList: [
        {
          key: '1',
          value: 'Tiger is good',
          inlineDesc:
            'Tiger is the king of mountainTiger is the king of mountain'
        },
        {
          key: '2',
          value: 'Lion is better',
          inlineDesc: 'Lion is the king of woods'
        },
        { key: '3', value: 'Camel is best, no inline-desc' }
      ],
      inlineDescListValue: [1],
      asyncList: [],
      asyncListValue: [],
      radioValue: ['China']
    }
  }
}
</script>

<style scoped>
.error {
  padding-left: 15px;
  line-height: 28px;
  color: #888;
  font-size: 12px;
}
</style>
