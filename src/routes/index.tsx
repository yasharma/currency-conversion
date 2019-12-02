import React from "react";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Switch } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { Preview } from "../components/currency-convertor";
import { Editor } from "../components/Editor";
import { EditItem } from "../components/EditItem";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store/configureStore";

export const AppRouter = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicRoute path="/" component={Preview} />
      </Switch>
    </ConnectedRouter>
  );
};
