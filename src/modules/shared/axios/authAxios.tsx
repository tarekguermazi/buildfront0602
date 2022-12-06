import axios from "axios";
import AuthToken from "src/modules/auth/authToken";
import { getLanguageCode } from "src/i18n";
import moment from "moment";
import Qs from "qs";

const authAxios = axios.create({
  baseURL: "http://localhost:8080/api",
  // baseURL: "http://178.79.177.14:8080/api",
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      filter: (prefix, value) => {
        if (moment.isMoment(value) || value instanceof Date) {
          return value.toISOString();
        }
        return value;
      },
    });
  },
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
