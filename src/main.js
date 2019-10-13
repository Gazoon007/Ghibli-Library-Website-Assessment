import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import vuetify from './plugins/vuetify'
import store from './store/main-store'
import router from './router/main-router'
import InfiniteLoading from 'vue-infinite-loading';
import AOS from 'aos';
import 'aos/dist/aos.css'

Vue.config.productionTip = false;

Vue.use(InfiniteLoading, { /* options */});

Vue.filter('ifIsNull', function (value) {
	if (value === '') {
		return 'No data was given from API'
	} else {
		return value
	}
});

new Vue({
	created() {
		AOS.init();
	},
	vuetify,
	store,
	router,
	render: h => h(App)
}).$mount('#app');
