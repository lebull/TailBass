import { Grid } from "@material-ui/core";
import React from "react";

const Social = () => (
  <Grid container justify="center" spacing={5}>
    <Grid item>
      <Discord />
    </Grid>
    <Grid item>
      <Twitch />
    </Grid>
    <Grid item>
      <Twitter />
    </Grid>
  </Grid>
);

export default Social;

const Discord = () => (
  <a href="https://www.google.com">
    {/* <img src="/logos/discord_logo.svg" alt="Join Discord" width="200px;" /> */}
    Discord
  </a>
);

const Twitch = () => <a href="https://www.google.com">Twitch</a>;

const Twitter = () => <a href="https://www.google.com">Twitter</a>;
