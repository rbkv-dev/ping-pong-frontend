import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { AuthConsumer } from "../../components/auth";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import "./bubble.css";

import {
  StyledPageWrapper,
  StyledForm,
  StyledTitle,
  StyledText,
} from "../styled";

// import { Bubble } from "./styled";

export const SignIn = () => {
  const [authData, setAuthData] = useState(["", ""]);

  const onChange = (i) => (e) => {
    const _authData = [...authData];
    _authData[i] = e.target.value;
    setAuthData(_authData);
  };

  useEffect(() => {}, []);

  return (
    <AuthConsumer>
      {({ isAuth, onSignIn }) => {
        if (isAuth) return <Redirect to="/" />;

        return (
          <StyledPageWrapper flexJC="center">
            <StyledForm
              onSubmit={(e) => {
                e.preventDefault();
                onSignIn(...authData);
              }}
            >
              <StyledTitle>Sign in to start playing</StyledTitle>
              <Input
                type="text"
                placeholder="email"
                value={authData[0]}
                onChange={onChange(0)}
              />
              <Input
                type="password"
                placeholder="password"
                value={authData[1]}
                onChange={onChange(1)}
              />
              <Button type="submit" text="SIGN IN" />
              <StyledText>
                No account? <Link to="/sign-up">Sign Up</Link>
              </StyledText>
              <div className="cbbl">
                <div className="ball"></div>Hello
              </div>
            </StyledForm>
          </StyledPageWrapper>
        );
      }}
    </AuthConsumer>
  );
};
