import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledHeader = styled(AppBar)`
  justify-content: center;
  
  && {
    background-color: ${({ theme }) => theme.colors.lightBackgroundColor};
  }

  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primaryBorder}`};

  line-height: 60px;
  height: 80px !important;
  box-shadow: none !important;
  color: red !important;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const StyledButtons = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
