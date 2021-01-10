import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { AuthConsumer } from "../contexts/AuthContext";

export const Navbar = () => <AuthConsumer>
        {auth => auth.user ? <SignedInAppBar/> : ""}
    </AuthConsumer>

const SignedInAppBar = () => {

    const history = useHistory();
    const navTo = (fullpath) => history.push(fullpath);

    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                Tailbass Admin
            </Typography>
            <Button color="inherit" onClick={()=>navTo("/")}>Home</Button>
            <Button color="inherit" onClick={()=>navTo("/events")}>Events</Button>
            <Button color="inherit" onClick={()=>navTo("/djdashboard")}>DjDashboard</Button>
            <Button color="inherit" onClick={()=>Auth.signOut()}>Sign Out</Button>
        </Toolbar>
    </AppBar>
}
