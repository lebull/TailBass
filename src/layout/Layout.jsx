import React from "react";
import { Container } from "@material-ui/core";
import { Navbar } from "./Navbar";

export const Layout = ({children}) => <>
    <Navbar />
    <Container>
        {children}
    </Container>
</>
