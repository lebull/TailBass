import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Divider,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { UiContext } from "../contexts/UiContext";
import { eventModel } from "../model";

import { EventStatusType } from "../model/types";

const EditEvent = () => {
  const { openSnackbar } = useContext(UiContext);

  const { eventId } = useParams();

  const [loading, setLoading] = useState(true);

  const [errors, setErrors] = useState([]);

  const [event, setEvent] = useState({});

  const [editing, setEditing] = useState(false);

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
        setEditing(false);
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
        openSnackbar("Event Saved Successfully");
      } catch (error) {
        openSnackbar(error.message);
      }
    };
    updateEventAsync();
  };

  const handleChange = (e) => {
    const mapTargetValue = (target) => {
      if (target.type === "checkbox") {
        return target.checked;
      }
      if (target.type === "number") {
        return parseFloat(target.value);
      }
      return target.value;
    };

    const { target } = e;
    setEvent({
      ...event,
      [target.name]: mapTargetValue(target),
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errors.length) {
    return <p>Error</p>;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2">{event.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Alert severity="info">
          <AlertTitle>Draft Event</AlertTitle>
          This is a draft event and will not be displayed on the front page.
        </Alert>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Box>
          {editing ? (
            <EventDetailsEditing
              event={event}
              onSubmit={onSubmit}
              handleChange={handleChange}
              onCancel={() => setEditing(false)}
            />
          ) : (
            <Box p={2}>
              <EventDetails
                event={event}
                onEditEvent={() => setEditing(true)}
              />
              <Divider />
              <EventActions event={event} setEventStatus={setEventStatus} />
            </Box>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <EventAssignments event={event} />
      </Grid>
    </Grid>
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={1}
      p={1}
    >
      {buttonsToShow.map((eventStatusButton) => (
        <Box p={1}>
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
            size="large"
          >
            {eventStatusButton.text}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

const EventDetails = ({ event, onEditEvent }) => (
  <Box>
    <Box p={1}>
      <Typography variant="body1" gutterBottom>
        Host Name
      </Typography>
      <Typography variant="body2" gutterBottom>
        {event?.hostUserName}
      </Typography>
    </Box>
    <Box p={1}>
      <Typography variant="body1" gutterBottom>
        Status
      </Typography>
      <Typography variant="body2" gutterBottom>
        {event.status?.text}
      </Typography>
    </Box>
    <Box p={1}>
      <Typography variant="body1" gutterBottom>
        Description
      </Typography>
      <Typography variant="body2" gutterBottom>
        {event.description}
      </Typography>
    </Box>

    <Box p={1} display="flex" justifyContent="center">
      <Button onClick={onEditEvent} color="primary" size="large">
        Edit Details
      </Button>
    </Box>
  </Box>
);

const EventDetailsEditing = ({ event, handleChange, onSubmit, onCancel }) => (
  <Box display="flex" flexDirection="column" alignItems="flex-start">
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width={1}
      >
        <TextField
          label="Event Name"
          name="name"
          value={event.name}
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
        />

        {/* Hostname */}
        <TextField
          label="Host Name"
          name="hostUserName"
          value={event.hostUserName}
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
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
          fullWidth
        />

        {/* Number of Slots */}
        <TextField
          label="Number of Slots"
          name="numberOfSlots"
          value={event.numberOfSlots}
          onChange={handleChange}
          type="number"
          margin="normal"
          variant="outlined"
          rows={4}
          fullWidth
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
          fullWidth
        />
        <Box display="flex" alignItems="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            margin="normal"
          >
            Save
          </Button>
          <Button
            type="cancel"
            onClick={onCancel}
            variant="outlined"
            color="primary"
            margin="normal"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  </Box>
);

const EventAssignments = ({ event }) => (
  <Box
    flexGrow={1}
    flexDirection="column"
    alignItems="flex-start"
    p={3}
    fullWidth
  >
    {Array.from(new Array(event.numberOfSlots)).map((i, slotNumber) => (
      <EventAssignment event={event} slotNumber={slotNumber} />
    ))}

    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" gutterBottom>
        Requests to Play
      </Typography>

      <Box display="flex" flexWrap="wrap">
        {Array.from(new Array(20)).map(() => (
          <EventAssignmentRequest />
        ))}
      </Box>
    </Box>
  </Box>
);

const EventAssignment = ({ event, slotNumber }) => {
  if (!event.startDateTime) {
    return "";
  }
  const addTime = (startTime, { hours = 0, minutes = 0 }) => {
    const returnTime = new Date(startTime);
    returnTime.setHours(startTime.getHours() + hours);
    returnTime.setMinutes(startTime.getMinutes() + minutes);
    return returnTime;
  };

  const formatTime = (time) =>
    time.toLocaleTimeString([], {
      timeZoneName: "short",
      hour: "numeric",
      minute: "numeric",
    });

  const slotStartTime = addTime(new Date(event.startDateTime), {
    hours: slotNumber,
  });
  const slotEndTime = addTime(new Date(event.startDateTime), {
    hours: slotNumber + 1,
  });

  return (
    <Box p={2}>
      <Typography variant="body2">
        {formatTime(slotStartTime)}
        {" - "}
        {formatTime(slotEndTime)}
      </Typography>
      <Box border={1} borderColor="grey.400" p={2}>
        <Typography variant="h6" gutterBottom>
          Name
        </Typography>
        <p>Genre</p>
      </Box>
    </Box>
  );
};

const EventAssignmentRequest = () => (
  <Box border={1} borderColor="grey.200" boxShadow={0} m={2} p={2}>
    <Typography variant="h6" gutterBottom>
      Name
    </Typography>
    <p>Genre</p>
    <p>Played X Times</p>
    <Button>Approve</Button>
  </Box>
);
