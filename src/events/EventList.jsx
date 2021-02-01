import {
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Button,
  Icon,
  Box,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventModel } from "../model";

export default () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    events: [],
  });

  useEffect(() => {
    const getEvents = async () => {
      const events = await eventModel.listEvents();
      setState({
        loading: false,
        error: null,
        events: events.map((event) => ({ id: event.id, ...event.doc })),
      });
    };
    getEvents();
  }, []);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  if (state.events && state.events.length) {
    return (
      <>
        <Box display="flex" justifyContent="flex-end">
          <Link to="/events/create">
            <Button color="primary">
              <Icon>add</Icon>New Event
            </Button>
          </Link>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Host</TableCell>
                {/* <TableCell>Is Visible</TableCell> */}
                <TableCell align="right">Starts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.events.map((event) => (
                <TableRow key={event.name}>
                  <TableCell>
                    <Link to={`/events/${event.id}/edit`}>{event.name}</Link>
                  </TableCell>
                  <TableCell>{event.hostUserName}</TableCell>
                  {/* <TableCell>{event.visible}</TableCell> */}
                  <TableCell align="right">
                    {event.startDateTime.toString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Link to="/events/create">
          <Button color="primary">
            <Icon>add</Icon>New Event
          </Button>
        </Link>
      </Box>
      <p>No Events found</p>
    </>
  );
};
