import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

import { signInApi, signUpApi } from "../../helpers/api";
export const AuthContext = React.createContext();

export const AuthLayout = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isAuth, setAuth] = useState(cookies.token || false);

  const onSignIn = async ({ email, password }) => {
    const _response = await signInApi(email, password);
    if (_response.token) {
      setCookie("token", _response.token, { path: "/" });
      setAuth(_response.token);
    } else {
      setAuth(false);
      return _response.message;
    }
  };

  const onSignUp = async ({ email, password, username }) => {
    const _response = await signUpApi(username, email, password);
    if (_response.token) {
      setCookie("token", _response.token, { path: "/" });
      setAuth(_response.token);
    } else {
      setAuth(false);
      return _response.message;
    }
  };

  const onSignOut = () => {
    setAuth(false);
    removeCookie("token");
    return <Redirect to="/" />;
  };

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
