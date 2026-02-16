import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { UserInfo } from "@/types/api";
import { AuthAPI, UserAPI } from "@/services/api/auth";

interface AuthContextType {
  user: UserInfo | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginDemo: () => void;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAuth = AuthAPI.check();
    if (isAuth) {
      const cachedUser = AuthAPI.getUser();
      setUser(cachedUser);
      UserAPI.getMe()
        .then(setUser)
        .catch(() => {})
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const userInfo = await AuthAPI.logIn({ email: email.toLowerCase(), password });
    setUser(userInfo);
  }, []);

  const loginDemo = useCallback(() => {
    const demoUser: UserInfo = {
      email: "demo@rail-stat.ru",
      userId: "demo",
      firstName: "Демо",
      lastName: "Пользователь",
      isActive: true,
      customerType: "legal",
      subscriptionPriceId: null,
      countRequest: 999,
      subscriptionEndTime: null,
    } as UserInfo;
    localStorage.setItem("stk_user", JSON.stringify(demoUser));
    setUser(demoUser);
  }, []);

  const logout = useCallback(async () => {
    const isDemo = user?.userId === "demo";
    if (isDemo) {
      localStorage.removeItem("stk_user");
      setUser(null);
      window.location.href = "/";
      return;
    }
    await AuthAPI.logOut();
  }, [user]);

  const refreshUser = useCallback(async () => {
    if (user?.userId === "demo") return;
    const userInfo = await UserAPI.getMe();
    setUser(userInfo);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        loginDemo,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
