<template>
    <FriendsList title="Public friends" v-bind:friends="friends"></FriendsList>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import FriendsList from '../components/FriendsList.vue';
import { Friend } from '../models/friend';
import { authenticationService } from '../services/authentication.service';
import { friendService } from '../services/friend.service';

@Component({
    components: {FriendsList},
})
export default class PublicFriends extends Vue {
    public friends: Friend[] = [];

    // lifecycle hooks
    public async mounted() {
        this.friends = await friendService.getPublicFriends();
    }

    // methods
    public async isSignedIn() {
        return await authenticationService.isSignedIn();
    }
}

</script>

