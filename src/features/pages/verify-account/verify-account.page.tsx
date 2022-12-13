import { ArrowForward } from '@material-ui/icons';
import React from 'react';

import {
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  StyledWrapper,
  StyledButton
} from './verify-account.styles';

const VerifyAccountPage: React.FC<{}> = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <div>
          <StyledTitle>Verify Your Account</StyledTitle>
          <StyledSubTitle>
            we sent you a verification email with instructions to activate your account.
            please follow the information inside your email box.
          </StyledSubTitle>
        </div>

        <StyledButton>
          <span>Move After Verify</span>
          <ArrowForward />
        </StyledButton>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default VerifyAccountPage;
