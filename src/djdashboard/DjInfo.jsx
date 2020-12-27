import React, { useState } from "react";

export const DjInfo = ({profile, onProfileChange}) => {

    const [state, setState] = useState({profile});

    const handleProfileValueChange = (fieldname, value) => setState({...state, profile: { ...profile, [fieldname]: value }})

    const handleSubmit = (e) => {
        if(onProfileChange){
            onProfileChange({profile: state.profile});
        }else{
            console.warn("onProfileChange is not bound.");
        }
        e.preventDefault();
        return false;
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>DJName</label>
                <input value={state.profile.djname} onChange={(e) => handleProfileValueChange("djname", e.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input value={state.profile.genre} onChange={(e) => handleProfileValueChange("genre", e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
}