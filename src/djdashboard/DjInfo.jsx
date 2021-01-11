import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export const DjInfo = ({profile, onProfileChange}) => {

    const [state, setState] = useState({profile});

    const handleProfileValueChange = (fieldname, value) => setState({...state, profile: { ...state.profile, [fieldname]: value }})

    const handleSubmit = (e) => {
        if(onProfileChange){
            onProfileChange({profile: {
                id: state.profile.id,
                djname: state.profile.djname, 
                genre: state.profile.genre,
            }});
        }else{
            console.warn("onProfileChange is not bound.");
        }
        e.preventDefault();
        return false;
    }

    return <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column">
                <TextField label="DJName" value={state.profile.djname} margin="normal" onChange={(e) => handleProfileValueChange("djname", e.target.value)}/>
                <TextField label="Genre" value={state.profile.genre} margin="normal" onChange={(e) => handleProfileValueChange("genre", e.target.value)}/>
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </Box>
        </form>
}