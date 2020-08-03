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
  StyledBubbleMessage,
  StyledBubbleBall,
} from "../styled";

export const SignIn = () => {
  const [authData, setAuthData] = useState(["", ""]);

  const onChange = ({ target: { id, value } }) => {
    const _authData = authData;
    _authData[id] = value;
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
                onSignIn(authData);
              }}
            >
              <StyledTitle>Sign in to start playing</StyledTitle>
              <Input
                type="email"
                id="email"
                placeholder="email"
                value={authData["email"]}
                onChange={onChange}
              />
              <Input
                type="password"
                id="password"
                placeholder="password"
                value={authData["password"]}
                onChange={onChange}
              />
              <Button type="submit" text="SIGN IN" />
              <StyledText>
                No account? <Link to="/sign-up">Sign Up</Link>
              </StyledText>
              <StyledBubbleMessage>
                Hello
                <StyledBubbleBall />
              </StyledBubbleMessage>
            </StyledForm>
          </StyledPageWrapper>
        );
      }}
    </AuthConsumer>
  );
};
