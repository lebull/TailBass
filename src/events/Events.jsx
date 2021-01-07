import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import CreateEvent from "./CreateEvent";
import EditEvent from "./EditEvent";
import { EventList } from "./EventList";

export const Events = () => {

    let { path } = useRouteMatch();

    return <Switch>

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
}