import { WebAuth } from 'auth0-js';
import Router from 'vue-router';

import {CLIENT_ID, CLIENT_DOMAIN, REDIRECT, SCOPE, AUDIENCE} from '../config';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const TOKEN_EXPIRY_DATE = 'token_expiry_date';

export class AuthenticationService {

    private get accessToken(): string {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        return token ? token : '';
    }

    private set accessToken(value: string) {
        localStorage.setItem(ACCESS_TOKEN_KEY, value);
    }

    private get idToken() {
        const token = localStorage.getItem(ID_TOKEN_KEY);
        return token ? token : '';
    }

    private set idToken(value: string) {
        localStorage.setItem(ID_TOKEN_KEY, value);
    }

    private get tokenExpiryDate(): number {
        // The storedTimestamp is a string
        const storedTimestamp = localStorage.getItem(TOKEN_EXPIRY_DATE);
        const timestamp = Number(storedTimestamp);
        return Number.isNaN(timestamp) ? 0 : timestamp;
    }

    private set tokenExpiryDate(value: number) {
        localStorage.setItem(TOKEN_EXPIRY_DATE, value.toString());
    }

    private auth: WebAuth;
    private router: Router;

    constructor() {
        this.auth = new WebAuth({
            // audience: AUDIENCE,
            clientID: CLIENT_ID,
            domain: CLIENT_DOMAIN,
            redirectUri: REDIRECT,
            responseType: 'token id_token',
            scope: SCOPE,
        });
        // avoid using # when defining a route by setting mode to history
        this.router = new Router({
            mode: 'history',
        });
    }

    public handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth.parseHash((error, data) => {
                if (data && data.accessToken && data.idToken && data.expiresIn) {
                    this.idToken = data.idToken;
                    this.accessToken = data.accessToken;
                    this.tokenExpiryDate = data.expiresIn;
                    resolve();
                } else if (error) {
                    this.signOut();
                    reject(error);
                }
            });
        });
    }

    public isAuthenticated() {
        const idToken = this.idToken;
        return !!idToken && !this.isTokenExpired();
    }

    public signIn() {
        this.auth.authorize();
    }

    public signOut() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(ID_TOKEN_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_DATE);
        this.router.push({ path: '/' });
    }

    private isTokenExpired() {
        return this.tokenExpiryDate > new Date().getTime();
    }
}

export default {
    install(Vue: any) {
        Vue.prototype.$authenticationService = new AuthenticationService();
    },
};
