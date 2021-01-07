import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useParams } from "react-router";

import { getEvent } from "../graphql/queries";
import { cleanEvent } from "./util";
import { updateEvent } from "../graphql/mutations";

const EditEvent = () => {

    const { eventId } = useParams();

    const [state, setState] = useState({
        loading: true,
        error: null,
        event: {}
    });

    useEffect(() => {
        const getEventAsync = async () => {
            const eventResult = await API.graphql(graphqlOperation(getEvent, {id: eventId}));
            const event = eventResult.data.getEvent;
            setState({
                loading: false,
                error: false,
                event,
            })
        }
        getEventAsync();

    }, [eventId]);

    //TODO: Dis Ugly
    const onSubmit = (e) => {
        e.preventDefault();
        const updateEventAsync = async () => {
            try {
                const cleanedEvent = cleanEvent(state.event);
                await API.graphql(graphqlOperation(updateEvent, {input: cleanedEvent}));
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
            <div>
                <label htmlFor="name">Name: </label>
                <input name="name" value={state.event.name} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="hostUserName">Host Name: </label>
                <input name="hostUserName" value={state.event.hostUserName} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="visible">Visible: </label>
                <input type="checkbox" name="visible" value={state.event.visible} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
}

export default withAuthenticator(EditEvent);