import { Box, Button, Link, Paper, Typography } from "@material-ui/core";
import React from "react";

export const CallToPlay = () => {
    return <Box display="flex" justifyContent="center">
        <Paper>
            <Box p={3} textAlign="center">
                <Typography>Want to play with us?</Typography>
                <Button color="secondary" variant="contained" size="large">Sign Up as a DJ</Button>
            </Box>
            <Box p={3} textAlign="center">
                <Typography>Already have a DJ profile?</Typography>
                <Link href="/djdashboard" underline="none"><Button color="secondary" variant="contained">Sign In</Button></Link>
            </Box>

        </Paper>
    </Box>
}