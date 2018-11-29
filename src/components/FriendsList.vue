<template>
    <div>
        <AppNav></AppNav>
        <h3 class="text-center">{{ title }}</h3>
        <hr/>
        <div class="card-columns">
            <div v-for="friend in friends" :key="friend.id" class="card">
                <div class="card-header">
                    <h3>{{friend.firstName}}</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <span class="badge alert-info">Name:</span>
                        {{friend.firstName}} {{friend.lastName}}
                    </p>
                    <p class="card-text">
                        <span class="badge alert-info">Location:</span>
                        {{friend.city}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

import AppNav from './AppNav.vue';
import { Friend } from '@/models/friend';

@Component({
    components: {AppNav},
})
export default class FriendsList extends Vue {
    @Prop() private title!: string;
    @Prop() private friends!: Friend[];
}

</script>

