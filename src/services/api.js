import axios from "axios";

import settings from "./settings";

const api = axios.create({
  baseURL: settings.SHOP_API_ENDPOINT,
});

api.interceptors.request.use(
  async function (config) {
    config.headers["platform_token"] = settings.PLATFORM_TOKEN;
    config.headers["application_name"] = settings.APPLICATION_NAME;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
