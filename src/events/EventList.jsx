import { Table, TableContainer, TableRow, TableHead, TableCell, TableBody, Paper, Button, Icon, Box } from "@material-ui/core";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        // return <ul>{state.events.map((event, index) => <li key={`event-${index}`}><Link to={`/events/${event.id}/edit`}>{event.name}</Link></li>)}</ul>

        return <>

            <Box display="flex" justifyContent="flex-end">
                <Link to="/events/create"><Button color="primary"><Icon>add</Icon>New Event</Button ></Link>
            </Box>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Host</TableCell>
                <TableCell>Is Visible</TableCell>
                <TableCell align="right">Starts</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {state.events.map((event) => (
                <TableRow key={event.name}>
                    <TableCell><Link to={`/events/${event.id}/edit`}>{event.name}</Link></TableCell>
                    <TableCell>{event.hostUserName}</TableCell>
                    <TableCell>{event.visible}</TableCell>
                    <TableCell align="right">{event.startDateTime}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      </>
    } else {
        return <p>No Events found</p>
    }
}