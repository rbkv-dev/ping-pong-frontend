import React, { useContext } from "react";
import { AuthContext } from "./index";
import { Redirect } from "react-router-dom";

export const AuthPageLayout = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <>{children}</>;
  }
  return <Redirect to="/" />;
};
