import React from "react";
import LocalStorage from "../utils/SessionStore";
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect
} from "react-router-dom";
import { IUser } from '../models/entities/IUser';
export const PublicRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw Error("PublicRoute component is undefined");
  }
  const Component = component;
  return <Route {...rest} render={(props: RouteComponentProps) => (
    LocalStorage.get<IUser>('authorizedUserDetails') ?
      <Redirect to={{ pathname: "/home", state: { from: props.location } }} /> :
      <Component {...props} />
  )} />;
};
