import React, { BaseSyntheticEvent } from 'react';
import { Button } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import StyledContainer from './signup-form.styles';
import { TokenObtainPair } from '../../../swagger2Ts/interfaces';

export interface SignupFormComponentProps {
  onSubmit: (args: TokenObtainPair) => void;
}

const SignupFormComponent: React.FC<SignupFormComponentProps> = (props) => {
  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.onSubmit(Object.fromEntries(formData) as unknown as TokenObtainPair);
  }
  
  return (
    <StyledContainer>
      <form onSubmit={onSubmit}>
        <input autoFocus required name='email' type="email" placeholder='Sign Up With email' />
        <input required name='password' type="password" placeholder='Enter Password' />

        <Button type='submit'>
          <GetApp />
          <span>Sign Up</span>
        </Button>
      </form>
    </StyledContainer>
  );
}

export default SignupFormComponent;