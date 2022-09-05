import authAxios from "src/modules/shared/axios/authAxios";
import AuthToken from "src/modules/auth/authToken";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class AuthService {
  static async registerWithEmailAndPassword(
    firstName,
    lastName,
    email,
    password
  ) {
    const response = await authAxios.post("/auth/sign-up", {
      firstName,
      lastName,
      email,
      password,
    });

    return response.data;
  }

  static async signinWithEmailAndPassword(email, password) {
    const response = await authAxios.post("/auth/sign-in", {
      email,
      password,
    });

    return response.data;
  }

  static async fetchMe() {
    const response = await authAxios.get("/auth/me");
    return response.data;
  }

  static signout() {
    AuthToken.set(null);
  }

  static async updateProfile(data) {
    const body = {
      data,
    };

    const response = await authAxios.put("/auth/profile", body);

    return response.data;
  }

  static async changePassword(oldPassword, newPassword) {
    const body = {
      oldPassword,
      newPassword,
    };

    const response = await authAxios.put("/auth/change-password", body);

    return response.data;
  }

  static async passwordReset(token, password) {
    const response = await authAxios.put("/auth/password-reset", {
      token,
      password,
    });

    return response.data;
  }

  static async verifyEmail(token) {
    const response = await authAxios.put("/auth/verify-email", {
      token,
    });

    return response.data;
  }

  static async socialOnboard() {
    const response = await authAxios.post("/auth/social/onboard", {});

    return response.data;
  }

  static isSocialOnboardRequested() {
    const urlParams = new URLSearchParams(window.location.search);

    return Boolean(urlParams.get("social"));
  }
}
