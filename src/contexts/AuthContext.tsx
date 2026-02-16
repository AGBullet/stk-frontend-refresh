import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { UserInfo } from "@/types/api";
import { AuthAPI, UserAPI } from "@/services/api/auth";

interface AuthContextType {
  user: UserInfo | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
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

  const logout = useCallback(async () => {
    await AuthAPI.logOut();
  }, []);

  const refreshUser = useCallback(async () => {
    const userInfo = await UserAPI.getMe();
    setUser(userInfo);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
