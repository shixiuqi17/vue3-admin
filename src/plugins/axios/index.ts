import Axios from "./axios";

const axios = new Axios({
  baseURL: "/api",
  timeout: 50000,
  headers: {}
});

export { axios };
