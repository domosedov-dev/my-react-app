import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5604a180-1848-4df2-80fc-e1a116f1683a"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            }
        ).then(response => response.data);
    }
};
