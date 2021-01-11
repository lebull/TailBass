
import { API, graphqlOperation } from "aws-amplify";
import { getEvent as getEventQuery } from "../graphql/queries";
import { createEvent, updateEvent } from "../graphql/mutations";

export const cleanEvent = (event) => ({
    id: event.id,
    name: event.name,
    hostUserName: event.hostUserName,
    visible: event.visible,
})

const getEvent = async ({eventId}) => {
    return await API.graphql(graphqlOperation(getEventQuery, {id: eventId}));
}

const createNewEvent = async ({event}) => {
    return await API.graphql(graphqlOperation(createEvent, {input: event}));
}

const editEvent = async({event}) => {
    const cleanedEvent = cleanEvent(event);
    await API.graphql(graphqlOperation(updateEvent, {input: cleanedEvent}));
}

export { createNewEvent, editEvent, getEvent };
