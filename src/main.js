/* import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

*/

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  observer: true,
  loading: '/static/img/blank-profile-picture.png',
  error: '/static/img/placeholder-image.png', // https://stackoverflow.com/a/47677814
})
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: (h) => {
    return h(App)
  }
})
