import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthLayout } from "./components/auth";
import { AuthPageLayout } from "./components/auth/AuthPageLayoutHook";

import { Home } from "./pages/home";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { PingPong } from "./pages/ping-pong";
import { Score } from "./pages/score";

function App() {
  return (
    <AuthLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/sign-in" component={() => <SignIn />} />
          <Route exact path="/sign-up" component={() => <SignUp />} />
          <Route
            exact
            path="/ping-pong"
            component={() => (
              <AuthPageLayout>
                <PingPong />
              </AuthPageLayout>
            )}
          />
          <Route
            exact
            path="/score"
            component={() => (
              <AuthPageLayout>
                <Score />
              </AuthPageLayout>
            )}
          />
        </Switch>
      </Router>
    </AuthLayout>
  );
}

export default App;
