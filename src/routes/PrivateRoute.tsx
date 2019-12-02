import React from "react";
import LocalStorage from "../utils/SessionStore";
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect
} from "react-router-dom";
import { IUser } from '../models/entities/IUser';

export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw Error("PrivateRoute component is undefined");
  }
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) =>
        LocalStorage.get<IUser>("authorizedUserDetails") ? (
          <React.Fragment>
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
