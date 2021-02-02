import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import auth from "../model/auth";

const Navbar = () => (
  <FirebaseAuthConsumer>
    {({ isSignedIn, user }) =>
      isSignedIn ? <SignedInAppBar user={user} /> : ""
    }
  </FirebaseAuthConsumer>
);

const SignedInAppBar = ({ user }) => {
  const history = useHistory();
  const navTo = (fullpath) => history.push(fullpath);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    auth.getUserRoles(user.uid).then((userRolesResult) => {
      setUserRoles(userRolesResult);
    });
  }, [user.uid]);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left Side */}
        <Box display="flex" flexGrow={1}>
          <Typography variant="h6">Tailbass Scheduler</Typography>
        </Box>
        {/* Right Side */}
        <Button color="inherit" onClick={() => navTo("/")}>
          Home
        </Button>
        {userRoles.includes("admin") ? (
          <Button color="inherit" onClick={() => navTo("/events")}>
            Events
          </Button>
        ) : (
          ""
        )}
        {userRoles.includes("admin") ? (
          <Button color="inherit" onClick={() => navTo("/users")}>
            Users
          </Button>
        ) : (
          ""
        )}
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              navTo("/profile");
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              auth.signOut();
              navTo("/");
            }}
          >
            Sign Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
