import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContextCar = createContext(null);
const providerGoogle = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googlePopupLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("i am spying on", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const allAuth = {
    user,
    loading,
    userRegister,
    updateUser,
    loginUser,
    googlePopupLogin,
    logoutUser,
    resetPassword,
  };
  return (
    <AuthContextCar.Provider value={allAuth}>
      {children}
    </AuthContextCar.Provider>
  );
};

export default AuthProvider;
