import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";

export const CallToPlay = () => {
    return <Box>
        <Paper>
            <Typography>Want to play with us?</Typography>
            <Button>Sign Up as a DJ</Button>
            <hr />
            <Typography>Already with us?</Typography>
            <Button>Sign in to your DJ profile</Button>
        </Paper>
    </Box>
}