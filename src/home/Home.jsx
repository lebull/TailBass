import React from "react"
import { CallToPlay } from "./CallToPlay"
import { NextEvent } from "./NextEvent"
import { UpcomingEvents } from "./UpcomingEvents"

export const Home = () => <>
    <NextEvent />
    <p>Play with us</p>
    <CallToPlay />
    <UpcomingEvents />
</>