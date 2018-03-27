import Vue from 'vue'
import IconSvg from './SVG'
Vue.component('svg-icon', IconSvg)

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./svg', true, /\.svg$/);
const list = requireAll(req);
// console.log(list)
