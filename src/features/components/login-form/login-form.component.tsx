import React from 'react';
import StyledContainer from './login-form.styles';

export interface LoginFormComponentProps {

}

const LoginFormComponent: React.FC<LoginFormComponentProps> = (props) => {
  return (
    <StyledContainer>
      <form>
        <input name="email" type="text" placeholder='Sign In With email' />
        <input name="password" type="text" placeholder='Enter Password' />
      </form>
    </StyledContainer>
  );
}

export default LoginFormComponent;