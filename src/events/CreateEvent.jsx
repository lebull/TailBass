import React, { useCallback, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createEvent } from "../graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useHistory } from "react-router";
import { Box, Button, TextField, Typography } from "@material-ui/core";

const CreateEvent = () => {

    const history = useHistory();
    const navigagteToEvents = useCallback(() => history.push('/events'), [history]);

    const defaultEvent = {
        name: "",
        hostUserName: "",
        startDateTime: new Date(),
    }

    const [state, setState] = useState({...defaultEvent});

    const createNewEvent = async ({owner}) => {
        return await API.graphql(graphqlOperation(createEvent, {input: state}));
    }

    //TODO: Dis Ugly
    const onSubmit = (e) => {
        e.preventDefault();
        
        const editEventAsync = async () => {
            try {
                debugger;
                await createNewEvent(state);
                navigagteToEvents();
            } catch(e){
                alert(e);
            }
        };
        editEventAsync();
    }

    const handleChange = (event) => {
        const target = event.target;
        setState({...state, [target.name]: target.type === 'checkbox' ? target.checked : target.value});
    }

    return <form onSubmit={onSubmit}><Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" flexDirection="column" alignItems="flex-start" maxWidth="600px">
                    <Typography variant="h4" align="center" gutterBottom>Create Event</Typography>
                    <TextField label="Event Name" name="name" value={state.name} onChange={handleChange} margin="normal" required/>
                    <TextField label="Host Name"name="hostUserName" value={state.hostUserName} onChange={handleChange} margin="normal" required/>
                    <Button type="submit" variant="contained" color="primary" margin="normal">Create Event</Button>
                </Box>
            </Box>
        </form>
}

export default withAuthenticator(CreateEvent);