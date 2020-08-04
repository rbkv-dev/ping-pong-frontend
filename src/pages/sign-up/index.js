import React, { useRef, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { AuthConsumer } from "../../components/auth";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import {
  StyledPageWrapper,
  StyledForm,
  StyledTitle,
  StyledText,
  StyledBubbleMessage,
} from "../styled";

import {
  emailValidation,
  passwordValidation,
} from "../../helpers/customValidation";

export const SignUp = () => {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ target: { id, value } }) => {
    const _authData = authData;
    _authData[id] = value;
    setAuthData({ ..._authData });
    setErrorMessage("");
  };

  useEffect(() => {}, []);

  return (
    <AuthConsumer>
      {({ isAuth, onSignUp }) => {
        if (isAuth) return <Redirect to="/" />;

        return (
          <StyledPageWrapper flexJC="center">
            <StyledForm
              onSubmit={(e) => {
                e.preventDefault();
                if (!emailValidation(authData.email)) {
                  setErrorMessage("Invalid email address!");
                } else if (!passwordValidation(authData.password)) {
                  setErrorMessage("Password must be more 6 symbols!");
                } else {
                  setErrorMessage("");
                  onSignUp(authData);
                }
              }}
            >
              <StyledTitle>Sign up to start playing</StyledTitle>
              <Input
                type="text"
                id="username"
                placeholder="username"
                value={authData.username}
                onChange={onChange}
              />
              <Input
                type="text"
                id="email"
                placeholder="email"
                value={authData.email}
                onChange={onChange}
              />
              <Input
                type="password"
                id="password"
                placeholder="password"
                value={authData.password}
                onChange={onChange}
              />
              {errorMessage && (
                <StyledBubbleMessage>{errorMessage}</StyledBubbleMessage>
              )}
              <Button type="submit" text="SIGN UP" />
              <StyledText>
                Already have an account? <Link to="/sign-in">Sign In</Link>
              </StyledText>
            </StyledForm>
          </StyledPageWrapper>
        );
      }}
    </AuthConsumer>
  );
};
