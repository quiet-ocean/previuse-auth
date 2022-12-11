import React, { BaseSyntheticEvent, FC, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import PersonIcon from '@material-ui/icons/Person';

import { Avatar, Button, Menu, UserContainer } from './user-menu.styles';
import { HeaderMenuItem, User } from '../header/header.component';


export interface UserMenuProps {
  /** The user to display  */
  user: User;
  /** If set to true, the menu will be open  */
  open?: boolean;
  /** List of items to be displayed inside the menu */
  listOfItems: HeaderMenuItem[];
  /** Call back to handle avatar click */
  onAvatarClick?: () => void;
  /** Tooltip text for hover over avatar */
  avatarTitle?: string;
  /** If set to false, the avatar will be removed */
  showAvatar?: boolean;
  /** If set to true, light theme will be applied to the text */
  lightTheme?: boolean;
}

const UserMenuComponent: FC<UserMenuProps> = (props) => {
  const {
    user, open, listOfItems, onAvatarClick, avatarTitle, showAvatar, lightTheme
  } = props;
  const [isOpen, setOpen] = useState(open || false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleAvatarClick = (e: BaseSyntheticEvent) => {
    if (onAvatarClick) {
      e.stopPropagation();
      onAvatarClick();
    }
  };

  const listItems = listOfItems.map((item) => (
    <MenuItem
      className="list-item"
      key={item.label}
      onClick={() => {
        item.onItemClick();
        handleClose();
      }}
    >
      <div>{item.icon}</div>
      <div>{item.label}</div>
    </MenuItem>
  ));

  return (
    <>
      <Button
        onClick={handleClick}
        className="userMenuComponent"
      >
        <div className="buttonContainer">
          {showAvatar
            && (
              <Avatar src={user.avatar} onClick={handleAvatarClick} title={avatarTitle}>
                {!user.avatar && <PersonIcon />}
              </Avatar>
            )}
          <UserContainer className={`userContainer ${lightTheme ? 'lightTheme' : ''}`}>
            <span className={`userName ${showAvatar ? '' : 'noAvatar'}`}>{`${user.firstName} ${user.lastName}`}</span>
            {
              isOpen
                ? <ArrowDropUp className="arrow-up" />
                : <ArrowDropDown className="arrow-down" />
            }
          </UserContainer>
        </div>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        disableAutoFocusItem
        onClose={handleClose}
        className="menu"
        PaperProps={{
          style: {
            borderRadius: '0'
          },
          className: 'userMenu'
        }}
      >
        {listItems}
      </Menu>
    </>
  );
};

export default UserMenuComponent;
