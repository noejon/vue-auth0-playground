<template>
    <nav>
        <div>
            <router-link to="/">Hello friends</router-link>
        </div>
        <ul>
            <li>
                <button @click="handleSignOut()">Sign out</button>
                <button @click="handleSignIn()">Sign in</button>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { authenticationService } from '../services/authentication.service';

@Component
export default class AppNav extends Vue {
    private handleSignIn() {
        authenticationService.signIn();
    }

    private handleSignOut() {
        authenticationService.signOut();
    }

    private isSignedIn() {
        return authenticationService.isSignedIn();
    }
}
</script>

