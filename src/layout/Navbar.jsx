import React, { useEffect, useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

export const Navbar = () => {

    const history = useHistory();
    const navTo = (fullpath) => history.push(fullpath);

    const [state, setState] = useState({signedIn: false});

    useEffect(() => {
        Auth.currentAuthenticatedUser()
          .then(() => { setState({signedIn: true}) })
          .catch(() => { return });
    });

    //TODO:  Probably need to wrap auth in our own provider and push updates
    async function signOut() {
        try {
            await Auth.signOut();
            setState({signedIn: false});
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    if(!state.signedIn) {
        return "";
    }

    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                Tailbass Admin
            </Typography>
            <Button color="inherit" onClick={()=>navTo("/")}>Home</Button>
            <Button color="inherit" onClick={()=>navTo("/events")}>Events</Button>
            <Button color="inherit" onClick={()=>navTo("/djdashboard")}>DjDashboard</Button>
            { state.signedIn ? <Button color="inherit" onClick={signOut}>Sign Out</Button> : ""}
        </Toolbar>
    </AppBar>
}