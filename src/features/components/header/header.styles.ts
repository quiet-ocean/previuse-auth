import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledHeader = styled(AppBar)`
  justify-content: center;
  
  && {
    background-color: ${({ theme }) => theme.colors.lightBackgroundColor};
  }

  border-bottom: 1px solid #efefef;

  height: 90px !important;
  box-shadow: none !important;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const StyledLogo = styled.a`
  display: flex;
`;
