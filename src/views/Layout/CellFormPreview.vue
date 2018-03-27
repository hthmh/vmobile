<template>
  <div>
    <group>
      <!-- <cell title="合计" value="￥1024"></cell> -->
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>



<script>
import { CellFormPreview } from 'vux'

export default {
  components: {
    CellFormPreview
  },
  data() {
    return {
      list: [
        {
          label: 'Apple',
          value: '3.29'
        },
        {
          label: 'Banana',
          value: '1.04'
        },
        {
          label: 'Fish',
          value: '8.00'
        }
      ]
    }
  }
}
</script>
