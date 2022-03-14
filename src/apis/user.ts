import { axios } from "@/plugins/axios";

// 用户信息
interface UserInfoInterFace {
  name: string;
  age: number;
  gender: number;
  avatar: string;
}

export function userInfo() {
  return axios.request<UserInfoInterFace>({
    url: "info"
  });
}

// 登录
interface LoginInterFace {
  token: string;
}

export function login(data: { name: string; password: string }) {
  return axios.request<LoginInterFace>({
    url: "login",
    method: "post",
    data
  });
}
