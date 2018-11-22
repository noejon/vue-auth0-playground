import Vue from 'vue';
import Router from 'vue-router';
import PrivateFriends from './views/PrivateFriends.vue';
import PublicFriends from './views/PublicFriends.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PublicFriends',
      component: PublicFriends,
    },
    {
      path: '/private-friends',
      name: 'PrivateFriends',
      component: PrivateFriends,
    },
  ],
});
