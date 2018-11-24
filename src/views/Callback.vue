<template>
    <div>Callback</div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Router from 'vue-router';

import PublicFriends from '@/views/PublicFriends.vue';

@Component
export default class Callback extends Vue {
    public mounted() {
        this.$authenticationService.handleAuthentication()
        .then(() => {
            this.$router.push({path: '/'});
        })
        .catch((error: any) => {
            console.log(error);
            this.$router.push({path: '/'});
        });
    }
}

</script>

