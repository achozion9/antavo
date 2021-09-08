import axios from "axios";
import api from "./api";
import TokenService from "./token.service";

const API_URL = "http://localhost:8000/api/";

class AuthService {
    login(username, password) {
        return api
            .post(API_URL + "login", { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return api.post(API_URL + "auth/register", {
            username,
            email,
            password,
        });
    }
}

export default new AuthService();
