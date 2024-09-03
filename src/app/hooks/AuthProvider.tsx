import { useContext, createContext, useState } from "react";
import userService from "../services/UserService";
import { LoginPayload, LoginResponse } from "../models/login";
import { getUserInfoFromToken } from "../utils/jwt";

interface AuthContextType {
  accessToken: string;
  user: any;
  login: (payload: LoginPayload) => void;
  logout: any;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") || ""
  );

  const login = async (data: LoginPayload) => {
    userService
      .login(data)
      .then((res: LoginResponse | undefined) => {
        if (!res) return;
        getUserInfoFromToken(res.accessToken);
        setAccessToken(res.accessToken);
        setRefreshToken(res.refreshToken);
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        return;
      })
      .catch((err) => {
        alert("failed to login with error" + err.message);
      });
  };

  const logout = () => {
    setUser(null);
    setAccessToken("");
    setRefreshToken("");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthContext.Provider value={{ accessToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
