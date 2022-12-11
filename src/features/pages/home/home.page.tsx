import React from 'react';
import { Route, RouteChildrenProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';

const login: React.FC<RouteChildrenProps> = () => {
  return (
    <div>
      <div>
        <Route exact path={ROUTES.home}>
          landing page
        </Route>

        <Route exact path={ROUTES.signin}>
          <NavLink to={ROUTES.changePassword}>change password</NavLink>
        </Route>

        <Route exact path={ROUTES.signup}>
          sign up
        </Route>

        <Route exact path={ROUTES.changePassword}>
          change password form
        </Route>
      </div>
    </div>
  );
};

export default login;
