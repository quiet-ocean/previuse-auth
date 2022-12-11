import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../../common/constants';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SideBarComponent from '../sidebar/sidebar.component';

const DrawerComponent: React.FC<Record<string, never>> = () => {
  return (
    <SideBarComponent>
      <DrawerLink
        to={ROUTES.home}
        icon={<HomeIcon />}
        label='Projects'
        itemKey={1} // THIS PROP MUST BE UNIQUE !
      />
    </SideBarComponent>
  );
};

interface DrawerLinkProps {
  label: string;
  to: string;
  itemKey: number;
  icon?: React.ReactElement;
}

const DrawerLink: React.FC<DrawerLinkProps> = ({label, to, icon, itemKey}) => {
  const localStorage: Storage = window.localStorage;
  return (
    <NavLink activeClassName="active" to={to}>
      <ListItem
        key={itemKey}
        onClick={() => localStorage.setItem('lastTab', to)}
      >
        <ListItemIcon>{icon ? icon : <DashboardIcon />}</ListItemIcon>
        {label}
      </ListItem>
    </NavLink>
  );
};

export default DrawerComponent;
