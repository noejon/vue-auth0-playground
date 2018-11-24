import Vue from 'vue';

import App from '@/App.vue';
import authenticationService from '@/services/authentication.service';
import router from '@/router';

Vue.config.productionTip = false;

Vue.use(authenticationService);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
