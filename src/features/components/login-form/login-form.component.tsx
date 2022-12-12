import React, { BaseSyntheticEvent } from 'react';
import { Button } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import StyledContainer from './login-form.styles';
import { TokenObtainPair } from '../../../swagger2Ts/interfaces';
import FormComponent from '../form/form.component';

export interface LoginFormComponentProps {
  onSubmit: (args: TokenObtainPair) => void;
}

const LoginFormComponent: React.FC<LoginFormComponentProps> = (props) => {
  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.onSubmit(Object.fromEntries(formData) as unknown as TokenObtainPair);
  }

  return (
    <StyledContainer>
      <FormComponent>
        <form onSubmit={onSubmit}>
          <input autoFocus required name="username" type="text" placeholder='Sign In With email' />
          <input required name="password" type="password" placeholder='Enter Password' />

          <Button type='submit'>
            <GetApp />
            <span>Log In</span>
          </Button>
        </form>
      </FormComponent>
    </StyledContainer>
  );
}

export default LoginFormComponent;
