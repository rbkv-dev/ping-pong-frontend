import React, { useContext } from "react";
import { AuthContext } from "./index";
import { Redirect } from "react-router-dom";
// import { useCookies } from "react-cookie";

export const AuthPageLayout = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  // const [cookies, setCookie] = useCookies(["token"]);

  if (isAuth) {
    return <>{children}</>;
  }
  return <Redirect to="/" />;
};
