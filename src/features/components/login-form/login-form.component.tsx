import React from 'react';
import StyledContainer from './login-form.styles';

export interface LoginFormComponentProps {
  
}

const LoginFormComponent: React.FC<LoginFormComponentProps> = (props) => {
  return (
    <StyledContainer>
      <input type="text" />
    </StyledContainer>
  );
}
 
export default LoginFormComponent;