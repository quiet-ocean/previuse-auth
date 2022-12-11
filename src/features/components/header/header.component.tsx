import React, { FC } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../assets/images/logo.png';

import {
  StyledHeader,
  StyledWrapper,
  StyledLogo
} from './header.styles';

import { ROUTES } from '../../../common/constants';

export interface HeaderProps {
  title?: string;
}

const HeaderComponent: FC<HeaderProps> = (props) => {
  return (
    <StyledHeader position="static">
      <Toolbar>
        <StyledWrapper>
          <StyledLogo to={ROUTES.login}><img src={logo} /></StyledLogo>
        </StyledWrapper>
      </Toolbar>
    </StyledHeader>
  )
};

export default HeaderComponent;
