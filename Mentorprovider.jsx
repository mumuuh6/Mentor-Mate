import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
  import auth from "./src/Authentication/firebase.config"; // Ensure the correct path
  
  export const MentorContext = createContext(null);
  
  const MentorProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
  
    // Observe user state changes
    useEffect(() => {
      const subscriber = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoader(false);
      });
      return () => {
        subscriber();
      };
    }, []);
  
    // Sign-in with Google
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
      setLoader(true);
      return signInWithPopup(auth, provider).finally(() => setLoader(false));
    };
  
    // Create user with email and password
    const createUser = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // Update user profile
    const updateProfileData = (profile) => {
      return updateProfile(auth.currentUser, profile);
    };
  
    // Login user
    const loginUser = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // Sign-out
    const userSignOut = () => {
      setLoader(true);
      return signOut(auth)
      
    };
  
    const mentors = {
      user,
      loader,
      createUser,
      loginUser,
      googleSignIn,
      userSignOut,
      updateProfileData,
    };
  
    return (
      <MentorContext.Provider value={mentors}>
        {children}
      </MentorContext.Provider>
    );
  };
  
  export default MentorProvider;
  