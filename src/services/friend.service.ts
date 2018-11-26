import axios from 'axios';
import { Friend } from '../models/friend';
import {AuthenticationService} from '@/services/authentication.service';

const BASE_URL = 'http://localhost:3333';

class FriendService {
    private authenticationService: AuthenticationService;

    constructor() {
        this.authenticationService = new AuthenticationService();
    }

    public async getPublicFriends() {
        const url = `${BASE_URL}/api/friends/public`;
        try {
            const friends = await axios.get<Friend[]>(url);
            return friends.data;
        } catch (error) {
            // Here we could log the error if we had a logger in place
            return [];
        }
    }

    public async getPrivateFriends() {
        const url = `${BASE_URL}/api/friends/private`;
        try {
            const friends = await axios.get<Friend[]>(url, {
                headers: {
                    Authorization: `Bearer ${this.authenticationService.accessToken}`,
                },
            });
            return friends.data;
        } catch (error) {
            // Here we could log the error if we had a logger in place
            return [];
        }
    }
}

export const friendService = new FriendService();
