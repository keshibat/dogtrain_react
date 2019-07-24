import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
    const { component: Component, token, ...rest } = props;

    return (
        <Route {...rest} render={(props) => {
            if (token) {
            //sessionStorage.removeItem("token"); //remove token if expired
                return <Component {...props} />
            }

            return <Redirect to="/admin/login" />;
        }} />
    )
}

export default PrivateRoute;