import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-e7beb.firebaseio.com/'
// Vue.http.options.root = 'https://vuejs-http-44f4c.firebaseio.com/'
Vue.filter('currency', (value) => {
    return '$' +  value.toLocaleString();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
