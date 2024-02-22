/*
* ContextAPI를 만드는 수도코드 !
1. 만든다. 👉 createContext
2. 사용한다. 👉 useContext
3. 범위를 설정해 내려준다. 👉 Provider
*/

"use client";
import { createContext, useContext, useState } from "react";

type AuthContextValue = {
  isLogin: boolean;
  togglelogIn: () => void;
};

const initialValue: AuthContextValue = {
  isLogin: false,
  togglelogIn: () => {},
};

//* 1. 만든다. 👉 createContext
const AuthContext = createContext(initialValue);

//* 2. 사용한다. 👉 useContext
export const useAuth = () => useContext(AuthContext);

//* 3. 범위를 설정해 내려준다. 👉 Provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);

  const togglelogIn = setIsLogin((prev) => !prev);

  const value = {
    isLogin,
    togglelogIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
