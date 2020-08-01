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
} from "../styled";

export const SignUp = () => {
  const [authData, setAuthData] = useState(["", ""]);

  const onChange = (i) => (e) => {
    const _authData = [...authData];
    _authData[i] = e.target.value;
    setAuthData(_authData);
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
                onSignUp(...authData);
              }}
            >
              <StyledTitle>Sign up to start playing</StyledTitle>
              <Input
                type="text"
                placeholder="username"
                value={authData[2]}
                onChange={onChange(2)}
              />
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
              <Button text="SIGN UP" type="submit" />
              <StyledText>
                Already have an account? <Link to="/sign-in">Sign In</Link>
              </StyledText>
            </StyledForm>
          </StyledPageWrapper>
          //   <StyledPageWrapper flexJC="center">
          //   <StyledForm>
          //     <StyledTitle>Sign up to start playing</StyledTitle>
          //     <Input placeholder="username" type="text" />
          //     <Input placeholder="email" type="email" />
          //     <Input placeholder="password" type="password" />
          //     <Button text="SIGN UP" type="submit" />
          //     <StyledText>
          //       Already have an account? <Link to="/sign-in">Sign In</Link>
          //     </StyledText>
          //   </StyledForm>
          // </StyledPageWrapper>
        );
      }}
    </AuthConsumer>
  );
};
