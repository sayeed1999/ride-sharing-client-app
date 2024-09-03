import { useContext, createContext, useState } from "react";
import userService from "../services/UserService";
import { LoginPayload, LoginResponse } from "../models/login";
import { getUserInfoFromToken, validateToken } from "../utils/jwt";

interface AuthContextType {
  isLoggedIn: () => boolean;
  hasRole: (role: string) => boolean;
  user: any;
  login: (payload: LoginPayload) => void;
  logout: any;
}

// @ts-expect-error
const AuthContext = createContext<AuthContextType>(null);

const AuthProvider = ({ children }: { children: any }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") || ""
  );
  const [user, setUser] = useState<any>(
    localStorage.getItem("userInfo") || null
  );

  const isLoggedIn = (): boolean => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return false;

    return validateToken(accessToken);
  };

  const hasRole = (role: string): boolean => {
    return user && user?.role === role;
  };

  const login = async (data: LoginPayload) => {
    userService
      .login(data)
      .then((res: LoginResponse | undefined) => {
        if (!res) return;
        const userInfo = getUserInfoFromToken(res.accessToken);

        setAccessToken(res.accessToken);
        setRefreshToken(res.refreshToken);
        setUser({
          // @ts-expect-error
          email: userInfo?.email,
          // @ts-expect-error
          role: userInfo?.role,
          exp: userInfo.exp,
        });

        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        localStorage.setItem("userInfo", JSON.stringify(user));
      })
      .catch((err) => {
        alert("Please check server connection.");
      });
  };

  const logout = () => {
    setAccessToken("");
    setRefreshToken("");
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, hasRole, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
