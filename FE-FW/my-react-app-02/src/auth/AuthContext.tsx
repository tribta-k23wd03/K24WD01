import React, { createContext, useContext, useEffect, useState } from "react";
import { clearAuth, getEmail, getToken, saveAuth } from "./storage";
import {
  login as apiLogin,
  register as apiRegister,
  type AuthResponse,
} from "../components/FastFood/api/auth";

type AuthState = {
  token: string | null;
  email: string | null;
  login(email: string, password: string): Promise<void>;
  register(email: string, password: string): Promise<void>;
  logout(): void;
};
const Ctx = createContext<AuthState | null>(null);
const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setToken(getToken());
    setEmail(getEmail());
  }, []);

  async function doLogin(email: string, password: string) {
    const data: AuthResponse = await apiLogin(email, password);
    saveAuth(data.access_token, email);
    setToken(data.access_token);
    setEmail(email);
  }
  async function doRegister(email: string, password: string) {
    const data: AuthResponse = await apiRegister(email, password);
    saveAuth(data.access_token, email);
    setToken(data.access_token);
    setEmail(email);
  }
  async function logout() {
    clearAuth();
    setEmail(null);
    setToken(null);
  }
  return (
    <Ctx.Provider
      value={{
        token,
        email,
        login: doLogin,
        register: doRegister,
        logout: logout,
      }}>
      {children}
    </Ctx.Provider>
  );
};
export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
export default AuthContext;
