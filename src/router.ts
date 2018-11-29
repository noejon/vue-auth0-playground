import Vue from 'vue';
import Router from 'vue-router';

import Callback from '@/views/Callback.vue';
import PrivateFriends from '@/views/PrivateFriends.vue';
import PublicFriends from '@/views/PublicFriends.vue';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated: boolean = router.app.$authenticationService.isAuthenticated();
  if (to.name === 'callback' || isAuthenticated) {
    next();
  } else if (to.name === 'PrivateFriends' && !isAuthenticated ) {
      router.app.$authenticationService.signIn();
  } else {
    next();
  }
});

export default router;
