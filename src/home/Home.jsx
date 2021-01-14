import { Container } from "@material-ui/core"
import React from "react"
// import { AuthConsumer } from "../contexts/AuthContext"
// import { CallToPlay } from "./CallToPlay"
import { NextEvent } from "./NextEvent"
import { UpcomingEvents } from "./UpcomingEvents"

export const Home = () => <>
    <NextEvent />
    <Container>
        {/* <AuthConsumer>
        {auth => auth.user ? "": <CallToPlay />}
        </AuthConsumer> */}
        <UpcomingEvents />
        <p>Discord Link</p>
    </Container>
</>