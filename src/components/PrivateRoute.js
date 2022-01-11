import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Profile from "./Profile.js";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? <Profile /> : <Navigate to="/" />;
        }}
      ></Route>
    </Routes>
  );
}
