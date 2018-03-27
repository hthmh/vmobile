<template>
  <div>
    <load-more tip="正在加载"></load-more>
    <load-more :show-loading="false" tip="暂无数据" background-color="#fbf9fe"></load-more>
    <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
  </div>
</template>



<script>
import { LoadMore } from 'vux'

export default {
  components: {
    LoadMore
  }
}
</script>
