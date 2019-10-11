import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import vuetify from './plugins/vuetify'
import store from './store/main-store'
import router from './router/main-router'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
