import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);
  console.log("currenUser", currentUser);
  return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
