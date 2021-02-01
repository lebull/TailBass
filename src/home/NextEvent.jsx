import { Box, Typography } from "@material-ui/core";
import React from "react";

export default () => (
  <Box
    color="white"
    bgcolor="primary.main"
    textAlign="center"
    p={5}
    gutterBottom
  >
    <Typography color="text" variant="h2">
      Event Name
    </Typography>
    <Typography color="text" variant="h4">
      January 1, 9999
    </Typography>
    <Typography color="text" variant="h6">
      12:00PM EST
    </Typography>
    <Typography color="text" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Typography>
  </Box>
);
