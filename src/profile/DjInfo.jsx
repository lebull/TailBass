import { Box, Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { UiContext } from "../contexts/UiContext";

export default ({ profile, onProfileChange }) => {
  const [profileState, setProfile] = useState({ ...profile });

  const { openSnackbar } = useContext(UiContext);

  const handleProfileValueChange = (fieldname, value) =>
    setProfile({ ...profileState, [fieldname]: value });

  const handleSubmit = (e) => {
    if (onProfileChange) {
      onProfileChange({ profile: profileState });
    } else {
      openSnackbar("onProfileChange is not bound.");
    }
    e.preventDefault();
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column">
        <TextField
          label="DJName"
          value={profileState.djname}
          margin="normal"
          onChange={(e) => handleProfileValueChange("djname", e.target.value)}
        />
        <TextField
          label="Genre"
          value={profileState.genre}
          margin="normal"
          onChange={(e) => handleProfileValueChange("genre", e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </form>
  );
};
