import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "e7d6e155-b0c8-44d8-b590-9e6e3d9b7140"
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        )
    },

    toggleFollowDel(id) {
        return (
            instance.delete(`follow/${id}`)
                .then(response => {
                    return response.data
                })
        )
    },

    toggleFollowPost(id) {
        return (
            instance.post(`follow/${id}`)
                .then(response => {
                    return response.data
                })
        )
    }
}

export const authApi = {
    getAuth() {
        return (
            instance.get(`auth/me`)
                .then(response => {
                    return response.data
                })
        )
    },

    logIn(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
        )
    },

    logOut() {
        return (
            instance.delete(`auth/login`)
        )
    },

}

export const profileApi = {
    getIdFromUsers(userId = 9029) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => {
                    return response.data
                })
        )
    },

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }

}