import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './router'
Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
