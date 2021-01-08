import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const Navbar = () => {

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
        </Toolbar>
    </AppBar>
}