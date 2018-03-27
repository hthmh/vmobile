<template>
  <div>
    <group title="">
      <cell title="名称" @click.native="onClick" :is-loading="!name" :value="name"></cell>
      <cell title="VUX" value="cool" inline-desc="111111111"></cell>
    </group>
    <group>
      <group-title slot="title">
        自定义grouptitle
        <span class="pull-right">right</span>
      </group-title>
    </group>
    <group title="使用 is-link 显示右边箭头">
      <cell is-link>
        <span slot="title" style="color:green;">
          <span style="vertical-align:middle;">Messages</span>
          <badge text="1"></badge>
        </span>
      </cell>
      <cell title="General" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="> 123 sdf
      </cell>
    </group>

    <group title="折叠面板">
      <cell title="Title 001" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'" @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item">111content 001</cell-box>
        <cell-box class="sub-item">content 001</cell-box>
        <cell-box class="sub-item">content 001</cell-box>
      </template>

      <cell title="Title 002" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></cell>

      <template v-if="showContent002">
        <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
      </template>

      <cell title="Animated" is-link :border-intent="false" :arrow-direction="showContent004 ? 'up' : 'down'" @click.native="showContent004 = !showContent004"></cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>

    </group>

    <group>
      <x-input title="input"></x-input>
    </group>
  </div>
</template>

<script>
import { GroupTitle, CellBox, CellFormPreview, Badge, XInput } from 'vux'

export default {
  components: {
    GroupTitle,
    CellBox,
    CellFormPreview,
    XInput,
    Badge
  },
  data() {
    return {
      name: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false,
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
  },
  methods: {
    onClick() {
      console.log('on click')
    }
  },
  mounted() {
    let that = this
    setTimeout(function() {
      that.name = 'vux demo'
    }, 2000)
  }
}
</script>

<style scoped>
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
