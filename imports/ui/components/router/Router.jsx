import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../../pages/HomePage";

export default (Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
));
