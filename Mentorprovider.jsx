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
import axios from "axios";
  
  export const MentorContext = createContext(null);
  
  const MentorProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [loader, setLoader] = useState(true);
    console.log(isDarkMode)
  
    // Observe user state changes
    // useEffect(() => {
    //   const subscriber = onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    //     console.log(currentUser?.email)
    //     if(currentUser?.email){
    //         const user={email:currentUser.email}
    //         axios.post('https://mentor-mate-server-side.vercel.app/jwt', user, {
    //             withCredentials: true,
    //         })
    //         .then(res=>{setLoader(false);
    //             console.log(res.data)})

    //     }
    //     else{
    //         axios.post('https://mentor-mate-server-side.vercel.app/logout',{},{withCredentials:true})
    //         .then(res=>{setLoader(false);
    //             console.log('logout',res.data)})
    //     }
        
    //   });
    //   return () => {
    //     subscriber();
    //   };
    // }, []);
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
    
          console.log("state captured", currentUser?.email);
    
          if (currentUser?.email) {
            const user = { email: currentUser.email };
    
            axios
              .post("https://mentor-mate-server-side.vercel.app/jwt", user, {
                withCredentials: true,
              })
              .then((res) => {
                console.log("login token", res.data);
                setLoader(false);
              });
          } else {
            axios
              .post(
                "https://mentor-mate-server-side.vercel.app/logout",
                {},
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                console.log("logout", res.data);
                setLoader(false);
              });
          }
        });
    
        return () => {
          unsubscribe();
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
      isDarkMode, 
      setIsDarkMode,
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
  