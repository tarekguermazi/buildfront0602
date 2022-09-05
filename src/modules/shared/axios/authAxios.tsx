import axios from "axios";
import AuthToken from "../../auth/authToken";

const authAxios = axios.create({
  baseURL: "http://localhost:8080/api",
  // baseURL: "http://178.79.177.14:8080/api",
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = AuthToken.get();

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
    return options;
  },
  function error(error) {
    return Promise.reject(error);
  }
);
export default authAxios;
