import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Route, Switch, useRouteMatch } from "react-router";
import CreateEvent from "./CreateEvent";
import EditEvent from "./EditEvent";
import { EventList } from "./EventList";
import { Box } from "@material-ui/core";

const Events = () => {

  let { path } = useRouteMatch();

  return <Box margin="normal" p={3}>
    <Switch>
      <Route path={`${path}/create`}>
        <CreateEvent />
      </Route>
      <Route path={`${path}/:eventId/edit`}>
        <EditEvent />
      </Route>
      <Route exact path={path}>
        <EventList />
      </Route>
    </Switch>
  </Box>
}

export default withAuthenticator(Events);