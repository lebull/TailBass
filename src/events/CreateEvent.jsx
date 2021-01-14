import React, { useCallback, useState, useContext } from "react";
import { useHistory } from "react-router";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { createNewEvent } from "./Api";
import { UiContext } from "../contexts/UiContext";
import { EventStatus } from "../models";

const CreateEvent = () => {

    const { openSnackbar } = useContext(UiContext);

    const history = useHistory();
    const navigagteToEvents = useCallback(() => history.push('/events'), [history]);

    const defaultEvent = {
        name: "",
        hostUserName: "",
        startDateTime: new Date(),
        status: EventStatus.DRAFT,
    }

    const [state, setState] = useState({...defaultEvent});

    //TODO: Dis Ugly
    const onSubmit = (e) => {
        e.preventDefault();
        
        const createEventAsync = async () => {
            try {
                await createNewEvent({event: state});
                navigagteToEvents();
            } catch(e){
                console.error(e);
                openSnackbar("Error occured while saving the event")
            }
        };
        createEventAsync();
    }

    const handleChange = (event) => {
        const target = event.target;
        setState({...state, [target.name]: target.type === 'checkbox' ? target.checked : target.value});
    }

    return <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" flexDirection="column" alignItems="flex-start" maxWidth="600px">
                    <Typography variant="h4" align="center" gutterBottom>Create Event</Typography>
                    <TextField label="Event Name" name="name" value={state.name} onChange={handleChange} margin="normal" required/>
                    <TextField label="Host Name"name="hostUserName" value={state.hostUserName} onChange={handleChange} margin="normal" required/>
                    <Button type="submit" variant="contained" color="primary" margin="normal">Create Event</Button>
                </Box>
            </Box>
        </form>
}

export default CreateEvent;