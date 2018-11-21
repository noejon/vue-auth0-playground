<template>
    <FriendsList title="Public friends" v-bind:friends="publicFriends"></FriendsList>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import FriendsList from './FriendsList.vue';
import { Friend } from '../models/friend';
import { authenticationService } from '../services/authentication.service';
import { friendService } from '../services/friend.service';

@Component({
    components: {FriendsList}
})
export default class PublicFriendsList extends Vue {
    publicFriends: Array<Friend> = [];

    // lifecycle hooks
    async mounted() {
        this.publicFriends = await friendService.getPublicFriends();
    }

    // methods
    async isSignedIn() {
        return await authenticationService.isSignedIn();
    }
}

</script>

