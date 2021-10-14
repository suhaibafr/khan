import React from "react";
import { Redirect, Route } from "react-router-dom";


function ProtectedRoute({ component: Component, ...restOfProps }) {
    let token=localStorage.getItem('token');
  return   (
    <Route
    {...restOfProps}
      render={(props) =>
        (token&&token.length!==  "")?<Component/> : (<Redirect exact to="/" />)
      }
    />
  );
} 

export default ProtectedRoute;
