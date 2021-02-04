import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar";

export default ({ children }) => (
  <>
    <Navbar />
    <Container>{children}</Container>
  </>
);
