// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui' 
import router from './router'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
// import 'element-ui/lib/theme-default/index.css'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import VueHtml5Editor from '../static/js/vue-html5-editor.js'
Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
