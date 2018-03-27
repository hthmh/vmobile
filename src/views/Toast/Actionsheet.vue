<template>
  <div>
    <x-button @click.native="open(1)" type="primary">open1</x-button>
    <x-button @click.native="open(2)" type="primary">open2</x-button>
    <actionsheet v-model="show1" :menus="menus1" :show-cancel="true"></actionsheet>
    <actionsheet v-model="show2" :menus="menus2"></actionsheet>

  </div>
</template>
<script>
import { Actionsheet } from 'vux'
export default {
  components: {
    Actionsheet
  },
  data() {
    return {
      show1: false,
      menus1: {
        menu1: '拍照',
        menu2: '从相册选取'
      },

      show2: false,
      menus2: [
        {
          label:
            'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
          type: 'info'
        },
        {
          label: 'Primary',
          type: 'primary',
          value: 'primary'
        },
        {
          label: 'Warn',
          type: 'warn'
        },
        {
          label: 'Disabled',
          type: 'disabled'
        },
        {
          label: 'Default'
        }
      ]
    }
  },
  beforeDestroy() {
    console.log('actionsheet destroyed')
  },
  methods: {
    open(num) {
      this[`show${num}`] = !this[`show${num}`]
    }
  }
}
</script>
