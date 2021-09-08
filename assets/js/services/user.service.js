import axios from 'axios';
import authHeader from './auth-header';
import api from './api';

const API_URL = 'http://localhost:8000/api/';

class UserService {
    getPublicContent() {
        return api.get(API_URL + 'all', { headers: authHeader() });
    }

    getUserBoard() {
        return api.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return api.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return api.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
