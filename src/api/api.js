import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5604a180-1848-4df2-80fc-e1a116f1683a"
  }
});

export const profileAPI = {
  getProfile(userId = 2) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  }
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`, {}).then(response => response.data);
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha});
  }
};
