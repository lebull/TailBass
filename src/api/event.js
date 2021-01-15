export const cleanEvent = (event) => ({
    id: event.id,
    name: event.name,
    hostUserName: event.hostUserName,
    visible: event.visible,
})

const getEvent = async ({eventId}) => {
    // return await API.graphql(graphqlOperation(getEventQuery, {id: eventId}));
    return new Promise();
}

const createEvent = async ({event}) => {
    // return await API.graphql(graphqlOperation(createEvent, {input: event}));
    return new Promise();
}

const editEvent = async({event}) => {
    // const cleanedEvent = cleanEvent(event);
    // await API.graphql(graphqlOperation(updateEvent, {input: cleanedEvent}));
    return new Promise();
}

export { createNewEvent, editEvent, getEvent };
