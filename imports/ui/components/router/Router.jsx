import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import PokemonPage from "../../pages/PokemonPage";

export default (Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/pokemon/:_id" component={PokemonPage} />
    </Switch>
  </BrowserRouter>
));
