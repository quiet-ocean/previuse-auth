import React from 'react';
import { Route, RouteChildrenProps } from 'react-router';
import { NavLink } from 'react-router-dom';

const login: React.FC<RouteChildrenProps> = () => {
  return (
    <div>
      <div>
        <Route exact path={`/signin`}>
          <NavLink to={`/change-password`}>change password</NavLink>
        </Route>

        <Route exact path={`/signup`}>
          sign up
        </Route>

        <Route exact path={`/change-password`}>
          change password form
        </Route>
      </div>
    </div>
  );
};

export default login;
