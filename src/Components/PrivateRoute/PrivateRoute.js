import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { OrganizationContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location}
                            }}
                        />
                    )
            }
        />


    );
};

export default PrivateRoute;