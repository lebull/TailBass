import { Container } from "@material-ui/core"
import { FirebaseAuthConsumer } from "@react-firebase/auth"
import React from "react"
import { CallToPlay } from "./CallToPlay"
import { NextEvent } from "./NextEvent"
import { UpcomingEvents } from "./UpcomingEvents"

export const Home = () => <>
    <NextEvent />
    <Container>
        <FirebaseAuthConsumer>
            {({isSignedIn}) => isSignedIn ? "" : <CallToPlay />}
        </FirebaseAuthConsumer>
        <UpcomingEvents />
        <p>Discord Link</p>
    </Container>
</>