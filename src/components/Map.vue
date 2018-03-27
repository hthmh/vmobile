<template>
  <div>
    <div :id="id"></div>
  </div>
</template>

<script>
import ol from 'openlayers'
import 'openlayers/dist/ol.css'
import dataList from '@/assets/data.js'
import svg1 from '@/assets/1.svg'
import svg2 from '@/assets/2.svg'
export default {
  props: {
    id: {
      type: String,
      default: 'map'
    },
    zoom: {
      type: Number,
      default: 14
    },
    center: {
      type: Array,
      default() {
        return [14088744, 5452297]
      }
    }
  },
  data() {
    return {
      map: null,
      defaultStyle: function() {
        return new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: svg1
          })
        })
      },
      activeStyle: function() {
        return new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: svg2
          }),
          zIndex: 99
        })
      }
    }
  },
  methods: {
    initMap() {
      var view = new ol.View({
        center: this.center,
        zoom: this.zoom
      })
      this.map = new ol.Map({
        layers: [this.arcgisTile()],
        target: this.id,
        loadTilesWhileAnimating: true,
        controls: ol.control.defaults({
          attribution: false,
          zoom: false,
          dragAble: false
        }),
        interactions: ol.interaction.defaults({
          doubleClickZoom: false,
          altShiftDragRotate: false,
          pinchRotate: false
        }),
        view: view
      })
    },
    arcgisTile() {
      return new ol.layer.Tile({
        source: new ol.source.TileArcGISRest({
          url:
            'http://111.26.182.9:6080/arcgis/rest/services/jilin_beijing/MapServer'
        }),
        id: 'gaode' + new Date().getTime()
      })
    },
    createPointLayer: function(layerId, list) {
      var _this = this
      var features = []
      var map = this.map
      if (map.getOverlayById(layerId)) {
        map.removeOverlay(map.getOverlayById(layerId))
      }
      _this.saveData = {}
      list.forEach(function(obj) {
        var point = ol.proj.fromLonLat(obj.point)
        var feature = new ol.Feature(new ol.geom.Point(point))
        feature.setProperties(obj)
        feature.setStyle(_this.defaultStyle)
        features.push(feature)
      })
      var vectorSource = new ol.source.Vector({
        features: features
      })
      var vectorLayerOptions = {
        id: layerId,
        source: vectorSource
      }
      var vectorLayer = new ol.layer.Vector(vectorLayerOptions)
      _this.map.addLayer(vectorLayer)
    },
    mapClick() {
      var _this = this
      this.map.on('click', function(e) {
        _this.changeBlue()
        var feature = _this.map.forEachFeatureAtPixel(
          e.pixel,
          feature => feature
        )
        if (feature) {
          feature.setStyle(_this.activeStyle)
          // var data = feature.getProperties()
        }
        _this.$emit('mapClick', feature)
      })
    },
    changeBlue() {
      var _this = this
      var layer = this.getTreeLayer('layerId')
      var features = layer.getSource().getFeatures()
      features.forEach(function(feature) {
        feature.setStyle(_this.defaultStyle)
      })
    },
    getTreeLayer: function(id) {
      // 根据id获取vertor图层
      var _this = this
      var rtValue = undefined
      var layers = _this.map.getLayers().getArray()
      for (var key in layers) {
        var layerId = layers[key].get('id')
        if (layerId === id) rtValue = layers[key]
      }
      return rtValue
    }
  },
  mounted() {
    this.initMap()
    this.createPointLayer('layerId', dataList)
    this.mapClick()
  }
}
</script>
<style>
#map {
  height: 100vh;
}
</style>
