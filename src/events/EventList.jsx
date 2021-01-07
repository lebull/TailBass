import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listEvents } from "../graphql/queries";


export const EventList = () => {

    const [state, setState] = useState({
        loading: true,
        error: null,
        events: [],
    });

    const getEvents = async () => {
        const eventsResults = await API.graphql(graphqlOperation(listEvents));
        const events = eventsResults.data.listEvents.items;
        setState({
            ...state,
            loading: false,
            events: events,
        })
        return events;
    }

    useEffect(() => {
        getEvents();
    });

    if(state.loading){
        return <p>Loading...</p>
    }

    else if(state.events.length){
        return <ul>{state.events.map((event, index) => <li key={`event-${index}`}>{event.name}</li>)}</ul>
    } else {
        return <p>No Events found</p>
    }
}