import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

export const AuthContext = React.createContext();

export const AuthLayout = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

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
    if (_response) {
      console.log("Redirect", _response);
      setCookie("token", _response.token, { path: "/" });
      setAuth(true);
    }
    // return <Redirect to="/" />;
    // if (_response) setAuth(true);
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
    if (_response) {
      console.log("Redirect", _response);
      setCookie("token", _response.token, { path: "/" });
      setAuth(true);
    }
    // return <Redirect to="/" />;
    // if (_response) setAuth(_response.token);
  };

  const onSignOut = () => {
    console.log("onSignOut");
    setAuth(false);
    removeCookie("token");
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
