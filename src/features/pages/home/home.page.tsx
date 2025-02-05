import React, { useContext, useEffect } from 'react';
import { Redirect, Route, RouteChildrenProps, Switch } from 'react-router';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Tab, Tabs } from '@material-ui/core';
import { TabContext } from '@material-ui/lab';
import { ArrowForward } from '@material-ui/icons';
import { FieldValues } from 'react-hook-form';
import querystring from 'query-string';

import { ROUTES } from '../../../common/constants';
import LoginFormComponent from '../../components/login-form/login-form.component';

import {
  StyledContainer,
  StyledWrapper,
  StyledLink,
  StyledDisclaimer,
  StyledAssistance,
  StyledTicketButton,
  StyledChangePassword
} from './home.styles';

import {
  ProviderAuth,
  SendEmailReset,
  TokenObtainPair,
  TokenRefresh
} from '../../../swagger2Ts/interfaces';

import { GoogleAuthUrl, GoogleLoginArgs, RootState } from '../../../common/models';

import {
  GetGoogleAuthUrlAction,
  GoogleLoginAction,
  LoginAction,
  ResetPasswordAction,
  SignUpAction
} from '../../../common/state/auth/auth.actions';

import { IServices } from '../../../common/services/initiate';
import { ServicesContext } from '../../../common/contexts';
import ExpressLoginComponent from '../../components/express-login/express-login.component';
import SendEmailFormComponent from '../../components/send-email-form/send-email-form.component';

interface HomePageProps {
  login: (args: TokenObtainPair) => Promise<TokenRefresh>;
  signup: (args: TokenObtainPair) => Promise<TokenRefresh>;
  resetPassword: (args: SendEmailReset) => Promise<TokenRefresh>;
  getGoogleAuthUrl: () => Promise<GoogleAuthUrl>;
  googleLogin: (args: GoogleLoginArgs) => Promise<ProviderAuth>;
}

const HomePage: React.FC<RouteChildrenProps & HomePageProps> = (props) => {
  const services: IServices | undefined = useContext(ServicesContext);

  if (!services) return null;

  useEffect(() => {
    const search = querystring.parse(window.location.search);

    if (window.location.pathname.split('/').includes('activate')) {
      props.history.push(ROUTES.activateUser);
    }

    if (search.route === 'password') {
      props.history.push(ROUTES.resetPassword);
    }

    if (window.location.pathname.split('/').includes('google')) {
      onGoogleLogin();
    }
  }, []);

  const onGoogleLogin = async () => {
    const args = querystring.parse(window.location.search);

    if (args.state && args.code) {
      try {
        await props.googleLogin({
          state: encodeURIComponent(args.state as string),
          code: encodeURIComponent(args.code as string)
        });
      } catch (e) {
        services.snackbar.actions.open({ content: 'Google login failed', type: 'error' });
      }
    }
  }

  const onLogin = async (args: TokenObtainPair) => {
    services.loading.actions.start();

    try {
      await props.login(args);
      services.snackbar.actions.open({ content: 'Logged in successfuly' });
      window.location.reload();
    } catch {
      services.snackbar.actions.open({ content: 'Login failed', type: 'error' });
    } finally {
      services.loading.actions.stop();
    }
  }

  const onSignUp = async (args: FieldValues) => {
    services.loading.actions.start();

    try {
      await props.signup(args as TokenObtainPair);
      services.snackbar.actions.open({ content: 'Confirmation email was sent' });
      props.history.push(ROUTES.verifyAccount);
    } catch (e) {
      services.snackbar.actions.open({ content: 'Signup failed', type: 'error' });
      throw e;
    } finally {
      services.loading.actions.stop();
    }
  }

  const onSendResetPasswordEmail = async (args: SendEmailReset) => {
    services.loading.actions.start();

    try {
      await props.resetPassword(args);
      services.snackbar.actions.open({ content: 'Email was sent with instructions' });
      services.dialog.actions.close();
    } catch (e) {
      services.snackbar.actions.open({ content: 'Reset failed', type: 'error' });
      throw { email: e };
    } finally {
      services.loading.actions.stop();
    }
  }

  const onForgotPassword = () => {
    services.dialog.actions.open({
      title: 'reset password',
      content: <SendEmailFormComponent onSubmit={onSendResetPasswordEmail} />
    })
  }

  const onLoginWithGoogle = async () => {
    services.loading.actions.start();
    try {
      const googleAuthUrl = await props.getGoogleAuthUrl();
      window.open(googleAuthUrl.authorization_url, '_self');
    } finally {
      services.loading.actions.stop();
    }
  }

  return (
    <StyledContainer>
      <StyledWrapper>

        <ExpressLoginComponent onLoginWithGoogle={onLoginWithGoogle} />

        <TabContext value='0'>
          <Tabs value={false}>
            <Tab to={ROUTES.signup} component={StyledLink as any} label="Sign Up" value="1" />
            <Tab to={ROUTES.login} component={StyledLink as any} label="Log In" value="2" />
          </Tabs>
        </TabContext>

        <Switch>
          <Route exact path={ROUTES.login}>
            <LoginFormComponent onSubmit={onLogin} submitText="Log In" key={1} />
          </Route>

          <Route exact path={ROUTES.signup}>
            <LoginFormComponent onSubmit={onSignUp} submitText="Sign Up" key={2} />
          </Route>

          <Route path='*'>
            <Redirect to={ROUTES.login} />
          </Route>
        </Switch>

        <StyledChangePassword onClick={onForgotPassword}>forgot password ?</StyledChangePassword>

        <StyledDisclaimer>
          <div>
            <div>
              <span>By signing up you agree to our</span>
              <a href='/'>Terms Of Services</a>
              <span>and</span>
            </div>
            <a href='/'>Privacy Policy</a>
          </div>
        </StyledDisclaimer>

        <StyledAssistance>
          <div className='title'>Need Assistance ?</div>
          <div className='subtitle'>Drop Us A Support Ticket And we will assist you Shortly.</div>

          <StyledTicketButton>
            <span>Drop A Ticket</span>
            <ArrowForward />
          </StyledTicketButton>
        </StyledAssistance>
      </StyledWrapper>
    </StyledContainer>
  );
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => ({
  login: bindActionCreators(LoginAction, dispatch),
  signup: bindActionCreators(SignUpAction, dispatch),
  resetPassword: bindActionCreators(ResetPasswordAction, dispatch),
  getGoogleAuthUrl: bindActionCreators(GetGoogleAuthUrlAction, dispatch),
  googleLogin: bindActionCreators(GoogleLoginAction, dispatch),
});

export default connect(null, mapDispatchToProps)(HomePage);
