import axios from 'axios';
import { Friend } from '../models/friend';

const BASE_URL = 'http://localhost:3333';

class FriendService {
    constructor() {
        console.log('creating new instance of friend.service');
    }

    getPublicFriends() {
        const url = `${BASE_URL}/api/friends/public`;
        return axios.get<Friend[]>(url).then(response => response.data);
    }
      
    getPrivateFriends() {
        const url = `${BASE_URL}/api/friends/private`;
        return axios.get<Friend[]>(url).then(response => response.data);
    }
}

export const friendService = new FriendService();