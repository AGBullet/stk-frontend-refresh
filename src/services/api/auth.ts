import { API } from "./api";
import type {
  AuthForm,
  AuthResponse,
  RegisterForm,
  RegResponse,
  UserInfo,
} from "@/types/api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const TOKEN_KEY = "stk_token";
const USER_KEY = "stk_user";

export class AuthAPI {
  static URL = "auth";

  static async logIn(form: AuthForm) {
    const response = await API.postGuest<AuthResponse>(
      AuthAPI.URL,
      "login",
      form
    );
    cookies.set(TOKEN_KEY, response.accessToken, { path: "/" });
    localStorage.setItem(USER_KEY, JSON.stringify(response.userInfo));
    API.TOKEN = response.accessToken;
    return response.userInfo;
  }

  static register(form: RegisterForm) {
    if (form.customerType === "legal") {
      return API.postGuest<RegResponse>(AuthAPI.URL, "register-legal", form);
    }
    return API.postGuest<RegResponse>(AuthAPI.URL, "register", form);
  }

  static check(): boolean {
    const token = cookies.get(TOKEN_KEY);
    const user = localStorage.getItem(USER_KEY);
    if (token && user) {
      API.TOKEN = token;
      return true;
    }
    return false;
  }

  static checkSubscribe(): boolean {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return false;
    const user: UserInfo = JSON.parse(userStr);
    return user.isActive;
  }

  static getUser(): UserInfo | null {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    return JSON.parse(userStr);
  }

  static async logOut() {
    try {
      await API.post(AuthAPI.URL, "logout");
    } catch (error) {
      console.log(error);
    }
    cookies.remove(TOKEN_KEY, { path: "/" });
    localStorage.removeItem(USER_KEY);
    API.TOKEN = "";
    window.location.href = "/auth/login";
  }

  static async refresh() {
    try {
      const response = await API.postOnce<AuthResponse>(
        AuthAPI.URL,
        "refresh"
      );
      cookies.set(TOKEN_KEY, response.accessToken, { path: "/" });
      localStorage.setItem(USER_KEY, JSON.stringify(response.userInfo));
      API.TOKEN = response.accessToken;
    } catch (e) {
      console.error(e);
      cookies.remove(TOKEN_KEY, { path: "/" });
      localStorage.removeItem(USER_KEY);
      window.location.href = "/auth/login";
    }
  }
}

export class UserAPI {
  static URL = "users";

  static async getMe(): Promise<UserInfo> {
    const response = await API.get<UserInfo>(UserAPI.URL, "me");
    localStorage.setItem(USER_KEY, JSON.stringify(response.data));
    return response.data;
  }

  static async buySubscription(
    email: string,
    subscriptionPriceId: string | null
  ): Promise<string> {
    const { paymentUrl } = await API.put<RegResponse>(
      UserAPI.URL,
      "subscription",
      {
        email,
        subscriptionPriceId,
      }
    );
    return paymentUrl || "";
  }
}
