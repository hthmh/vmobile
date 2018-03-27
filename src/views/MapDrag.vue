<template>
  <div>
    <v-map @mapClick="mapClick"></v-map>
    <drag ref="drag" :show="showDrag" @dragend="dragend" :minHeight="minHeight" :middleHeight="middleHeight">
      {{pointInfo.id}}
    </drag>
  </div>
</template>
<script>
import VMap from '@/components/Map'
import Drag from '@/components/Drag'
var cH = document.documentElement.clientHeight
export default {
  name: 'vmap',
  components: { VMap, Drag },
  data() {
    return {
      showDrag: false,
      minHeight: 100,
      middleHeight: 0.62 * cH,
      pointInfo: {}
    }
  },
  methods: {
    mapClick(feature) {
      if (feature) {
        this.showDrag = true
        this.pointInfo = feature.getProperties()
        console.log(this.pointInfo)
      }
    },
    dragend(position, top) {}
  }
}
</script>
