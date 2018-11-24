<template>
    <FriendsList title="Private friends" v-bind:friends="friends"></FriendsList>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import FriendsList from '../components/FriendsList.vue';
import { Friend } from '../models/friend';
import { friendService } from '../services/friend.service';

@Component({
    components: {FriendsList},
})
export default class PrivateFriends extends Vue {
    public friends: Friend[] = [];

    // lifecycle hooks
    public async mounted() {
        this.friends = await friendService.getPrivateFriends();
    }

    // methods
    public async isSignedIn() {
        return await this.$authenticationService.isAuthenticated();
    }
}

</script>

