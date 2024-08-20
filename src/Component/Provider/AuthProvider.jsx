import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const userForgotPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("user in the auth state change", currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    auth,
    userSignUp,
    userSignIn,
    signInWithGoogle,
    userForgotPass,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
