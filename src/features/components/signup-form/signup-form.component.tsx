import React from 'react';
import StyledContainer from './signup-form.styles';

export interface SignupFormComponentProps {
  
}

const SignupFormComponent: React.FC<SignupFormComponentProps> = (props) => {
  return (
    <StyledContainer>
      <input type="text" />
    </StyledContainer>
  );
}
 
export default SignupFormComponent;