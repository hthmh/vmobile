<template>
  <div>
    <p>module形式的store</p>
    <br>
    <x-button type="primary" @click.native="updateNowTime(dateFormat(new Date()))">更改app-tableData</x-button>
    <br>
    <p>app模块里的nowTime</p>
    <p>{{nowTime}}</p>
    <br><br>
    <p>test模块里的asd</p>
    <p>{{asd}}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { dateFormat } from 'vux'
export default {
  computed: {
    //需要在模快里声明namespaced: true,
    // ...mapState('app', {
    //   nowTime: state => state.nowTime
    // }),
    ...mapState('app', ['nowTime', 'pageLoading']),
    ...mapState({
      asd: state => state.test.asd
    })
  },
  methods: {
    dateFormat,
    ...mapActions('app', ['updateNowTime'])
  }
}
</script>
