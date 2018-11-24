<template>
    <nav>
        <div>
            <router-link to="/">Hello friends</router-link>
        </div>
        <ul>
            <li>
                <button @click="handleSignOut()" v-show="isAuthenticated()">Sign out</button>
                <button @click="handleSignIn()" v-show="!isAuthenticated()">Sign in</button>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppNav extends Vue {
    private handleSignIn() {
        this.$authenticationService.signIn();
    }

    private handleSignOut() {
        this.$authenticationService.signOut();
    }

    private isAuthenticated() {
        return this.$authenticationService.isAuthenticated();
    }
}
</script>

