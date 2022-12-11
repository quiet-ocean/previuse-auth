import styled from 'styled-components';
import MaterialButton from '@material-ui/core/Button';
import MaterialMenu from '@material-ui/core/Menu';
import MaterialAvatar from '@material-ui/core/Avatar';

const toggleBtnPrimaryColor = '#4b4b4b';

export const Button = styled(MaterialButton)`

  padding: 0 0 0 13px !important;
  font-family: inherit!important;
  border-radius: 1px!important;
  height: 36px;
  max-width: 173px!important;
  text-transform: capitalize !important;
  
  
  &:disabled{
    opacity: 0.5;
  }
  
  &:hover {
    background-color: transparent !important;  
  }
  
  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  } 
`;

export const Menu = styled(MaterialMenu)`
   div.MuiMenu-paper{
    width: 173px !important;
    ul[role=menu] li{
      padding: 12px;
      text-transform: capitalize !important;
    }
   }

   .list-item {
     > div {
       display: flex;
     }

     svg {
      color: ${({ theme }) => theme.colors.primaryIconColor};
      padding-right: 12px;
     }
   }
`;

export const Avatar = styled(MaterialAvatar)`
  width: 36px !important;
  height: 36px !important;

  img{
    width: 100%;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  .userName {
    color: #4a4a4a;
    font-size: ${({ theme }) => theme.sizes.fontSizeMedium};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 92px;
    display: inline-block;
    margin-left: 12px;
    
    &.noAvatar {
      max-width: none;
    }
  }

  .arrow-down, .arrow-up {
    color: ${toggleBtnPrimaryColor};
  }
  
  &.lightTheme {
    .userName , .arrow-down, .arrow-up{
      color: #fff;
    }
  }
`;
