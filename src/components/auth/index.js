import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

export const AuthContext = React.createContext();

export const AuthLayout = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isAuth, setAuth] = useState(cookies.token || false);

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
      setCookie("token", _response.token, { path: "/" });
      setAuth(cookies.token);
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
      setCookie("token", _response.token, { path: "/" });
      setAuth(cookies.token);
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
    // if (cookies.token) setAuth(cookies.token);
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
