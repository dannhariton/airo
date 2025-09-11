import type { User } from "firebase/auth";
import { createContext, useContext } from "react";

type AuthContextType = {
  currentUser: User | null;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
