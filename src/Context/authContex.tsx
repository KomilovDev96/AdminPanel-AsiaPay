import React from "react";
import { setIsAuth, setverification } from "../Utils/Dispatch";
interface AuthContextType {
  setVerificate: (verify: boolean) => void;
  setAuthAdmin: (verify: boolean) => void;
}
const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const setVerificate = (veri: boolean) => {
    // Verifaction Redux
    setverification(veri);
  };
  const setAuthAdmin = (veri: boolean) => {
    // AuthADmin Redux
    setIsAuth(veri);
  };

  const value: any = { setVerificate, setAuthAdmin };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
