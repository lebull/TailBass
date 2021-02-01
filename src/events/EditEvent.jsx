import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Typography, TextField, Button, Box } from "@material-ui/core";
import { UiContext } from "../contexts/UiContext";
import { eventModel } from "../model";

import { EventStatusType } from "../model/types";

const EditEvent = () => {
  const { openSnackbar } = useContext(UiContext);

  const { eventId } = useParams();

  const [loading, setLoading] = useState(true);

  const [errors, setErrors] = useState([]);

  const [event, setEvent] = useState({});

  useEffect(() => {
    const getEventAsync = async () => {
      const getEventResult = await eventModel.getEvent({ uid: eventId });
      setLoading(false);
      setEvent(getEventResult);
    };
    getEventAsync();
  }, [eventId]);

  const onSubmit = (e) => {
    e.preventDefault();
    const updateEventAsync = async () => {
      try {
        const result = await eventModel.updateEvent(eventId, {
          updatedEvent: event,
        });
        setEvent(result);
        openSnackbar("Event Saved Successfully");
      } catch (error) {
        setErrors([...errors, error]);
        openSnackbar(error.message);
      }
    };
    updateEventAsync();
  };

  const setEventStatus = (status) => {
    const updateEventAsync = async () => {
      try {
        const result = await eventModel.updateEvent(eventId, {
          updatedEvent: { ...event, status: EventStatusType[status] },
        });
        setEvent(result);
        setEvent(event);
        openSnackbar("Event Saved Successfully");
      } catch (error) {
        openSnackbar(error.message);
      }
    };
    updateEventAsync();
  };

  const handleChange = (e) => {
    const { target } = e;
    setEvent({
      event: {
        ...event,
        [target.name]:
          target.type === "checkbox" ? target.checked : target.value,
      },
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errors.length) {
    return <p>Error</p>;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography variant="h4" align="center" gutterBottom>
        {event.name}
      </Typography>
      <Typography variant="p" align="center" gutterBottom>
        {event.status?.text}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        width="100%"
      >
        <Box>
          <EventDetails
            event={event}
            onSubmit={onSubmit}
            handleChange={handleChange}
          />
          <hr />
          <EventActions event={event} setEventStatus={setEventStatus} />
        </Box>
        <EventAssignments event={event} />
      </Box>
    </Box>
  );
};

export default EditEvent;

const EventActions = ({ event, setEventStatus }) => {
  const buttonsToShow = [];

  if (event.status?.value === EventStatusType.DRAFT.value) {
    buttonsToShow.push({ nextStatus: "OPENSIGNUP", text: "Open Sign Ups" });
  }

  if (event.status?.value !== EventStatusType.CANCELED.value) {
    buttonsToShow.push({
      nextStatus: "CANCELED",
      text: "Cancel Event",
      buttonProps: { variant: "outlined", color: "secondary" },
    });
  }

  buttonsToShow.push({
    nextStatus: "DRAFT",
    text: "Revert to Draft",
    buttonProps: { variant: "outlined" },
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {buttonsToShow.map((eventStatusButton) => (
        <Box component="span" m={1} width="100%">
          <Button
            onClick={() => setEventStatus(eventStatusButton.nextStatus)}
            variant={
              eventStatusButton?.buttonProps?.variant
                ? eventStatusButton?.buttonProps?.variant
                : "contained"
            }
            color={
              eventStatusButton?.buttonProps?.color
                ? eventStatusButton?.buttonProps?.color
                : "primary"
            }
            fullWidth
          >
            {eventStatusButton.text}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

const EventDetails = ({ event, handleChange, onSubmit }) => (
  <Box display="flex" flexDirection="column" alignItems="flex-start">
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="h6" align="center" gutterBottom>
          Details
        </Typography>

        <TextField
          label="Event Name"
          name="name"
          value={event.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Hostname */}
        <TextField
          label="Host Name"
          name="hostUserName"
          value={event.hostUserName}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* DateTime */}
        <TextField
          id="datetime-local"
          label="Start Time (Local)"
          type="datetime-local"
          name="startDateTime"
          value={event.startDateTime}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />

        {/* Description */}
        <TextField
          label="Description"
          name="description"
          value={event.description}
          onChange={handleChange}
          margin="normal"
          multiline
          variant="outlined"
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
        >
          Save
        </Button>
      </Box>
    </form>
  </Box>
);

const EventAssignments = ({ event }) => (
  <Box
    display="flex"
    flexGrow={1}
    flexDirection="column"
    alignItems="flex-start"
  >
    {/* {Array.from(new Array(event.numberOfSlots ? event.numberOfSlots : 0)).map(
      (i) => (
        <p>Slot</p>
      )
    )} */}
    <p>Slots will go here! {event.name}</p>
  </Box>
);
