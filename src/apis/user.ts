import { axios } from "@/plugins/axios";

class userApi {
  userInfo() {
    return axios.request<UserInfoInterFace>({
      url: "info"
    });
  }

  login() {
    return axios.request<LoginInterFace>({
      url: "login"
    });
  }
}

interface UserInfoInterFace {
  name: string;
  age: number;
  gender: number;
  avatar: string;
}

interface LoginInterFace {
  token: string;
}

export default new userApi();
