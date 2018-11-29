import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from '@/App.vue';
import authenticationService from '@/services/authentication.service';
import router from '@/router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(authenticationService);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
