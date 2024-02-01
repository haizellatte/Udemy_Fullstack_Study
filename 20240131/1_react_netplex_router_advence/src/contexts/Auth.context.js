import { createContext, useContext, useState } from "react";

const initalValue = {
  isLogin: false,
  login: () => {}, // 자동완성 도움용
  logOut: () => {}, // 자동완성 도움용
};

const AuthContext = createContext(initalValue);

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => setIsLogin(true);
  const logOut = () => setIsLogin(false);

  const value = {
    isLogin,
    login,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
