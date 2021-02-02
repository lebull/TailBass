import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import firebase from "firebase/app";
import Profile from "./profile/Profile";
import Events from "./events/Events";
import Home from "./home/Home";
import Layout from "./layout/Layout";
import { UiProvider } from "./contexts/UiContext";
import firebaseConfig from "./firebase.conf";
import SignUp from "./session/SignUp";
import SignIn from "./session/SignIn";

function App() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <UiProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </UiProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
