import React, { FC } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

import {
  StyledHeader,
  StyledWrapper,
  StyledButtons
} from './header.styles';

import ButtonComponent from '../button/button.component';

export interface HeaderProps {
  title?: string;
}

const HeaderComponent: FC<HeaderProps> = (props) => {
  return (
    <StyledHeader position="static">
      <Toolbar>
        <StyledWrapper>
          <div>logo</div>

          <StyledButtons>
            <ButtonComponent text={<NavLink to={`/signin`}>signin</NavLink>} />
            <ButtonComponent text={<NavLink to={`/signup`}>signup</NavLink>} />
          </StyledButtons>

        </StyledWrapper>
      </Toolbar>
    </StyledHeader>
  )
};

export default HeaderComponent;
