import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { useEffect, useState, type ReactNode } from "react";
import { auth, signInWithGooglePopup } from "../../firebase";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function login() {
    const response = await signInWithGooglePopup();
    console.log(response);
    if (response) {
      const user = response.user;
      setCurrentUser(user);
    }
  }

  async function logout() {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );

    return () => unsubscribe();
  }, []);

  const value: {
    currentUser: User | null;
    login: () => void;
    logout: () => void;
  } = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
