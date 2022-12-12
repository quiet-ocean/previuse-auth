import React from 'react';
import StyledContainer from './form.styles';

export interface FormComponentProps {
  children: JSX.Element;
}

const FormComponent: React.FC<FormComponentProps> = (props) => {
  return (
    <StyledContainer>{props.children}</StyledContainer>
  );
}
 
export default FormComponent;