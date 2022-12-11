import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledHeader = styled(AppBar)`
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  && {
    background-color: #142c68;
  }

  line-height: 60px;
  height: 50px !important;
  box-shadow: none !important;
  color: #ffffff !important;

  > div {
    padding-left: 18px;
    padding-right: 18px;
    
    button {
      padding: 0 !important;
    }
  }

  > div svg { // the menu icon fill
    color: #ffffff;
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;
export const StyledTitle = styled.div`
  margin: 0 16px;
  font-size: 16px;
  font-weight: 500;
`;
export const StyledLogo = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  max-width: 40px;
  max-height: 40px;
`;
