import * as axios from "axios";

const DAL = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true,
    headers: {"API-KEY": "a5462467n563b-565f-4bcfvb-36730-eadsgqw9re7t4"}});

export const userApi = {
    getUsers (currentPage=1, pageSize=50) {
        return DAL.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    subscribe(userId) {
        return DAL.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unSubscribe(userId) {
        return DAL.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    setProfile(userId) {
        return DAL.get(`profile/${userId}`)
            .then(response => response.data)
    },
    isAuthorized() {
        return DAL.get(`auth/me`)
            .then(response => response.data)
    }
};

