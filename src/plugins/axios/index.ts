import Axios from "./axios";

const baseURL = import.meta.env.VITE_API_URL;

const axios = new Axios({
  baseURL,
  timeout: 50000,
  headers: {}
});

export { axios };
