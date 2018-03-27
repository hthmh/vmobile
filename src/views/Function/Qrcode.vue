  <template>
  <div style="text-align:center;margin-top:15px;">
    <divider>默认类型为 img，可以在微信里长按识别</divider>
    <qrcode value="https://vux.li?x-page=demo_qrcode"></qrcode>
    <br>
    <br>
    <divider>类型为 canvas</divider>
    <qrcode value="https://vux.li?x-page=demo_qrcode" type="canvas"></qrcode>
    <br>
    <qrcode :value="value" :fg-color="fgColor" type="canvas"></qrcode>
    <br>
    <span>类型为 canvas: {{value}}</span>
    <br>
    <span>当前颜色: {{fgColor}}</span>
  </div>
</template>



<script>
import { Qrcode } from 'vux'

export default {
  mounted() {
    setInterval(() => {
      this.value = `https://vux.li?t=${Math.random()}`
      this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, 1000)
  },
  components: {
    Qrcode
  },
  data() {
    return {
      value: 'https://vux.li',
      fgColor: '#000000'
    }
  }
}
</script>
