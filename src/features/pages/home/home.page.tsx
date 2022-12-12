import React, { useContext } from 'react';
import { Redirect, Route, RouteChildrenProps, Switch } from 'react-router';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
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
import { TokenObtainPair, TokenRefresh } from '../../../swagger2Ts/interfaces';
import { connect } from 'react-redux';
import { RootState } from '../../../common/models';
import { LoginAction } from '../../../common/state/auth/auth.actions';
import { IServices } from '../../../common/services/initiate';
import { ServicesContext } from '../../../common/contexts';

interface HomePageProps {
  login: (args: TokenObtainPair) => Promise<TokenRefresh>;
}

const HomePage: React.FC<RouteChildrenProps & HomePageProps> = (props) => {
  const services: IServices | undefined = useContext(ServicesContext);

  if (!services) return null;

  const onLogin = async (args: TokenObtainPair) => {
    services.loading.actions.start();

    try {
      await props.login(args);
      services.snackbar.actions.open({ content: 'logged in successfuly' })
    } catch {
      services.snackbar.actions.open({ content: 'login failed', type: 'error' })
    } finally {
      services.loading.actions.stop();
    }
  }

  const onSignUp = (args: TokenObtainPair) => {
    /* eslint-disable */
    console.log("signup: ", args);
  }

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
            <LoginFormComponent onSubmit={onLogin} />
          </Route>

          <Route exact path={ROUTES.signup}>
            <SignupFormComponent onSubmit={onSignUp} />
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

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => ({
  login: bindActionCreators(LoginAction, dispatch)
});

export default connect(null, mapDispatchToProps)(HomePage);
