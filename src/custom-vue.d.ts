import Vue from 'vue';
import { AuthenticationService } from '@/services/authentication.service';

declare module 'vue/types/vue' {
    interface Vue {
        $authenticationService: AuthenticationService;
    }
}