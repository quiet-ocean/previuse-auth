import React from 'react';
import StyledContainer from './signup-form.styles';

export interface SignupFormComponentProps {
  
}

const SignupFormComponent: React.FC<SignupFormComponentProps> = (props) => {
  return (
    <StyledContainer>
      <form>
        <input name='email' type="text" placeholder='Sign Up With email' />
        <input name='password' type="password" placeholder='Enter Password' />
      </form>
    </StyledContainer>
  );
}
 
export default SignupFormComponent;