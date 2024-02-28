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
import axios from "axios";

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

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
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
      // console.log("i am spying on", currentUser);
      const loggedEmail = currentUser?.email || user?.email;
      const getEmail = { email: loggedEmail };
      setUser(currentUser);
      setLoading(false);
      if (loggedEmail) {
        axios
          .post("https://car-doctor-server-ecru-chi.vercel.app/jwt", getEmail, {
            withCredentials: true,
          })
          .then((res) => console.log("login token response", res.data));
      } else {
        axios
          .post("https://car-doctor-server-ecru-chi.vercel.app/logout", getEmail, {
            withCredentials: true,
          })
          .then((res) => console.log("logout token response", res.data));
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

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
