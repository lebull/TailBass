import { Button, TextField } from "@material-ui/core";
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

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <TextField label="DJName" value={state.profile.djname} onChange={(e) => handleProfileValueChange("djname", e.target.value)}/>
            </div>
            <div>
                <TextField label="Genre" value={state.profile.genre} onChange={(e) => handleProfileValueChange("djname", e.target.value)}/>
            </div>
            <div>
                <Button type="submit">Save</Button>
            </div>
        </form>
    </div>
}