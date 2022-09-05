export default class AuthToken {
  static get() {
    return localStorage.getItem("jwt") || null;
  }
  static set(token) {
    localStorage.setItem("jwt", token || "");
  }
}
