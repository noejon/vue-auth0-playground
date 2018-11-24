<template>
    <div>
        <AppNav></AppNav>
        <h3>{{ title }}</h3>
        <hr/>
        <div v-for="friend in friends" :key="friend.id">
            <h3>{{friend.firstName}}</h3>
            <div>
                <p>{{friend.firstName}} {{friend.lastName}}</p>
                <p>{{friend.city}}</p>
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

