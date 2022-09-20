import axios from "axios";
import AuthToken from "src/modules/auth/authToken";
import { getLanguageCode } from "src/i18n";

const authAxios = axios.create({
  baseURL: "http://localhost:8080/api",
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = AuthToken.get();

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
    options.headers["Accept-Language"] = getLanguageCode();

    return options;
  },
  function error(error) {
    return Promise.reject(error);
  }
);
export default authAxios;
