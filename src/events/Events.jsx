import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import CreateEvent from "./CreateEvent";
import EditEvent from "./EditEvent";
import { EventList } from "./EventList";

const Events = () => {

  let { path } = useRouteMatch();

  return <>
    <AmplifySignOut />
    <Switch>
      <Route path={`${path}/create`}>
        <CreateEvent />
      </Route>
      <Route path={`${path}/:eventId/edit`}>
        <EditEvent />
      </Route>
      <Route exact path={path}>
        <Link to="/events/create">Create Event</Link>
        <EventList />
      </Route>
    </Switch>
  </>
}

export default withAuthenticator(Events);