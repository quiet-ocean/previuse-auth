import React from 'react';
import { Redirect, Route, RouteChildrenProps, Switch } from 'react-router';
import { Tab, Tabs } from '@material-ui/core';
import { TabContext } from '@material-ui/lab';

import { ROUTES } from '../../../common/constants';
import LoginFormComponent from '../../components/login-form/login-form.component';
import SignupFormComponent from '../../components/signup-form/signup-form.component';
import ChangePasswordComponent from '../../components/change-password/change-password.component';

import {
  StyledContainer,
  StyledWrapper,
  StyledLink
} from './home.styles';

const HomePage: React.FC<RouteChildrenProps> = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <TabContext value='0'>
          <Tabs value={false}>
            <Tab to={ROUTES.signup} component={StyledLink as any} label="Sign Up" value="1" />
            <Tab to={ROUTES.login} component={StyledLink as any} label="Log In" value="2" />
          </Tabs>
        </TabContext>

        <Switch>
          <Route exact path={ROUTES.login}>
            <LoginFormComponent />
          </Route>

          <Route exact path={ROUTES.signup}>
            <SignupFormComponent />
          </Route>

          <Route exact path={ROUTES.changePassword}>
            <ChangePasswordComponent />
          </Route>

          <Route path='*'>
            <Redirect to={ROUTES.login} />
          </Route>
        </Switch>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default HomePage;
