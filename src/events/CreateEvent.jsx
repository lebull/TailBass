import React, { useCallback, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createEvent } from "../graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useHistory } from "react-router";

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
        
        const createEventAsync = async () => {
            try {
                debugger;
                await createNewEvent(state);
                navigagteToEvents();
            } catch(e){
                alert(e);
            }
        };
        createEventAsync();
    }

    const handleChange = (event) => {
        const target = event.target;
        setState({...state, [target.name]: target.type === 'checkbox' ? target.checked : target.value});
    }

    return <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input name="name" value={state.name} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="hostUserName">Host Name: </label>
                <input name="hostUserName" value={state.hostUserName} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="visible">Visible: </label>
                <input type="checkbox" name="visible" value={state.visible} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
}

export default withAuthenticator(CreateEvent);