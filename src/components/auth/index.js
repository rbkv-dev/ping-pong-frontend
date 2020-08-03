import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthLayout = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const onSignIn = async ({ email, password }) => {
    const response = await fetch("http://localhost:3001/api/user/sign-in", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const _response = await response.json();
    if (_response) setAuth(true);
  };

  const onSignUp = async ({ email, password, username }) => {
    const response = await fetch("http://localhost:3001/api/user/sign-up", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const _response = await response.json();
    console.log(_response);
    if (_response) setAuth(_response.token);
    // setAuth(true);
  };

  const onSignOut = () => {
    console.log("onSignOut");
    setAuth(false);
    return <Redirect to="/" />;
  };

  useEffect(() => {
    // let isMouth = true;
    // firebase.auth().onAuthStateChanged(() => {
    //   isMouth && setAuth(!!firebase.auth().currentUser);
    // });
    // return () => {
    //   isMouth = false;
    // };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        onSignIn,
        onSignUp,
        onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
