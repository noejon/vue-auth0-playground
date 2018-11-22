import auth0, { WebAuth } from 'auth0-js';
import axios from 'axios';
import decode from 'jwt-decode';
import Router from 'vue-router';
import Auth0Lock from 'auth0-lock';

import {CLIENT_ID, CLIENT_DOMAIN, REDIRECT, SCOPE, AUDIENCE} from '../../config';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

class AuthenticationService {
    private auth: WebAuth;
    private router: Router;

    constructor() {
        this.auth = new auth0.WebAuth({
            clientID: CLIENT_ID,
            domain: CLIENT_DOMAIN,
        });
        this.router = new Router({
            mode: 'history',
        });
        console.log('creating new instance of authentication.service');
    }

    public isSignedIn() {
        const idToken = this.getIdToken();
        return !!idToken && !this.isTokenExpired(idToken);
    }

    public signIn() {
        this.auth.authorize({
            responseType: 'token id_token',
            redirectUri: REDIRECT,
            audience: AUDIENCE,
            scope: SCOPE,
        });
    }

    public signOut() {
        this.clearIdToken();
        this.clearAccessToken();
        this.router.go('/');
    }

    private getIdToken() {
        return localStorage.getItem(ID_TOKEN_KEY);
    }

    private getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    }

    private clearIdToken() {
        return localStorage.removeItem(ID_TOKEN_KEY);
    }

    private clearAccessToken() {
        return localStorage.removeItem(ACCESS_TOKEN_KEY);
    }

    // Helper function that will allow us to extract the access_token and id_token
    private getParameterByName(name: string) {
        const match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }



    private getTokenExpirationDate(encodedToken: string) {
        const token = decode(encodedToken);
        if (!token.exp) { return; }

        const date = new Date(0);
        date.setUTCSeconds(token.exp);

        return date;
    }

    private isTokenExpired(token: string) {
        const expirationDate = this.getTokenExpirationDate(token);
        return expirationDate ? expirationDate < new Date() : true;
    }
}

export const authenticationService = new AuthenticationService();
