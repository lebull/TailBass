import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Typography, TextField, Button, Box } from "@material-ui/core";
import { UiContext } from "../contexts/UiContext";
import { api } from "../api";


const EditEvent = () => {

    const { openSnackbar } = useContext(UiContext);

    const { eventId } = useParams();

    const [state, setState] = useState({
        loading: true,
        error: null,
        event: {}
    });

    useEffect(() => {
        const getEventAsync = async () => {
            const event = await api.event.getEvent({uid: eventId});
            setState({
                loading: false,
                error: false,
                event,
            });
        }
        getEventAsync();

    }, [eventId]);

    //TODO: Dis Ugly
    const onSubmit = (e) => {
        e.preventDefault();
        const updateEventAsync = async () => {
            try {
                await api.event.updateEvent(eventId, {event: state.event});
                openSnackbar("Event Saved Successfully");
            } catch(e){
                alert(e);
            }
        };
        updateEventAsync();
    }

    const handleChange = (event) => {
        const target = event.target;
        setState({...state, event: { ...state.event, [target.name]: target.type === 'checkbox' ? target.checked : target.value}});
    }

    if(state.loading){
        return <p>Loading...</p>
    }

    if(state.error){
        return <p>Error</p>
    }

    return <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography variant="h4" align="center" gutterBottom>Edit Event</Typography>
                <TextField label="Event Name" name="name" value={state.event.name} onChange={handleChange} margin="normal" required/>
                <TextField label="Host Name"name="hostUserName" value={state.event.hostUserName} onChange={handleChange} margin="normal" required/>
                <Button type="submit" variant="contained" color="primary" margin="normal">Save</Button>
            </Box>
        </form>
}

export default EditEvent;