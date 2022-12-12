import React from 'react';
import { Button, Divider } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import { ReactComponent as Google } from '../../../assets/images/google.svg';

import StyledContainer, {
  StyledButtons,
  StyledTitle,
  StyledSeperator
} from './express-login.styles';

export interface ExpressLoginComponentProps {

}

const ExpressLoginComponent: React.FC<ExpressLoginComponentProps> = (props) => {
  return (
    <StyledContainer>
      <StyledTitle>Express Login via Facebook and Google</StyledTitle>

      <StyledButtons>
        <Button>
          <span>Facebook</span>
          <Facebook />
        </Button>

        <Button className='google'>
          <span>google</span>
          <Google />
        </Button>
      </StyledButtons>

      <StyledSeperator>
        <Divider />
        <div>Or</div>
        <Divider />
      </StyledSeperator>
    </StyledContainer>
  );
}

export default ExpressLoginComponent;