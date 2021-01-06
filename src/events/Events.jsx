import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import CreateEvent from "./CreateEvent";

export const Events = () => {

    let { path } = useRouteMatch();

    return <Switch>
        <Route exact path={path}>
          <Link to="/events/create">Create Event</Link>
        </Route>
        <Route path={`${path}/create`}>
          <CreateEvent />
        </Route>
    </Switch>
}