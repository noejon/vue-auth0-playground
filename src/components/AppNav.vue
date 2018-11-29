<template>
    <nav class="navbar navbar-default">
        <div class="jumbotron col-sm-12 container">
            <div class="navbar-header">
                    <router-link to="/" class="btn btn-info">Public Friends</router-link>
                    <router-link to="/private-friends" class="btn btn-success">Private Friends</router-link>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <button @click="handleSignOut()" v-show="isAuthenticated()" class="btn btn-danger">Sign out</button>
                    <button @click="handleSignIn()" v-show="!isAuthenticated()" class="btn btn-info">Sign in</button>
                </li>
            </ul>
        </div>
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

<style scoped>

.navbar-right {
    margin-right: 0px !important;
}

.btn {
    margin: 5px 10px 0 0;
}

</style>


