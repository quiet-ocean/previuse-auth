import React, { FC } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import {
  StyledHeader, StyledLogo, StyledTitle, StyledWrapper
} from './header.styles';
import UserMenuComponent from '../user-menu/user-menu.component';
import ButtonComponent from '../button/button.component';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  avatar?: string;
}

export interface HeaderMenuItem {
  label: string;
  onItemClick: () => void;
  icon?: JSX.Element;
}

export interface HeaderProps {
  /** The user to display  */
  user?: User;
  /** if set to true, hamburger menu will be displayed and the callback will be fired */
  onShowMenu?: () => void;
  /** the title that will be presented */
  title?: string;
  /** element that will be presented next to the title */
  component?: JSX.Element;
  /** List of items to be displayed inside the user menu */
  userActions?: HeaderMenuItem[];
  /** Path to logo image */
  logoSrc?: string;
}

const HeaderComponent: FC<HeaderProps> = (props) => (
  <StyledHeader position="static">
    <Toolbar>
      {props.onShowMenu && (
        <ButtonComponent
          className="hamburger"
          type="icon"
          iconElement={<MenuIcon />}
          onClick={() => props.onShowMenu && props.onShowMenu()}
        />
      )}
      <StyledWrapper>
        {props.title
          && (
            <StyledTitle>
              {props.title}
            </StyledTitle>
          )}
        {props.component}
      </StyledWrapper>
      {props.user && (
        <UserMenuComponent
          lightTheme
          showAvatar={!!(props.user && props.user.avatar)}
          user={props.user}
          listOfItems={props.userActions || []}
        />
      )}
      {props.logoSrc && (
        <StyledLogo style={{ backgroundImage: `url(${props.logoSrc})` }} />
      )}
    </Toolbar>
  </StyledHeader>
);

export default HeaderComponent;
