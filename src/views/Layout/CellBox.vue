<template>
  <div>
    <group>
      <cell-box is-link link='/'>
        cell-box
      </cell-box>
      <cell-box is-link>
        cell-box hello world hello world hello world
      </cell-box>
      <cell-box>
        cell-box long long long long long long long cell-box long long long long long long long cell-box long long long long long long long cell-box long long long long long long long
      </cell-box>
    </group>
  </div>
</template>

<script>
import { CellBox } from 'vux'

export default {
  components: {
    CellBox
  }
}
</script>
