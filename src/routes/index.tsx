import React from "react";
import { PublicRoute } from "./PublicRoute";
import { Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Preview } from "../components/currency-convertor";
import { ConnectedRouter } from "connected-react-router";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" component={Preview} />
      </Switch>
    </Router>
  );
};
