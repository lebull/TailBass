import { Container } from "@material-ui/core";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import React from "react";
import CallToPlay from "./CallToPlay";
import NextEvent from "./NextEvent";
import Social from "./Social";
import UpcomingEvents from "./UpcomingEvents";

export default () => (
  <>
    <NextEvent />
    <Container>
      <FirebaseAuthConsumer>
        {({ isSignedIn }) => (isSignedIn ? "" : <CallToPlay />)}
      </FirebaseAuthConsumer>
      <UpcomingEvents />
      <Social />
    </Container>
  </>
);
