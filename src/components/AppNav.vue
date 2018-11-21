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
    name: string ='app-nav';

    handleSignIn() {
        authenticationService.signIn();
    }

    handleSignOut() {
        authenticationService.signOut();
    }

    isSignedIn() {
        return authenticationService.isSignedIn();
    }
}
</script>

