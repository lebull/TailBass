import React, { useCallback, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createEvent } from "../graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useHistory } from "react-router";
import { Button, Checkbox, TextField } from "@material-ui/core";

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

    return <form onSubmit={onSubmit}>
            <div>
                <TextField label="Event Name" name="name" value={state.name} onChange={handleChange} required/>
            </div>
            <div>
                <TextField label="Host Name"name="hostUserName" value={state.hostUserName} onChange={handleChange} required/>
            </div>
            <div>
                <Checkbox label="Visible" type="checkbox" name="visible" value={state.visible} onChange={handleChange}/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
}

export default withAuthenticator(CreateEvent);