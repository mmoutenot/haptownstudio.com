import React                from "react";
import {
  Router,
  Route,
  IndexRoute,
  Link,
  Redirect
}                           from "react-router";
import ApplicationContainer from "app/views/containers/application_container";
import HomeContainer        from "app/views/home";


export default function renderRoutes(store, history) {

  return (
    <Router history={history}>

      <Route path="/" component={ApplicationContainer}>
        <IndexRoute component={HomeContainer} />
      </Route>

    </Router>
  );
};

