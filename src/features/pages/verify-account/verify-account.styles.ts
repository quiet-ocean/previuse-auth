import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.primaryBackground};
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 24px;
`;

export const StyledSubTitle = styled.div`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 18px;
  line-height: 26px;
`;

export const StyledWrapper = styled.div`
  width: 650px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    margin-bottom: 150px;
  }
`;

export const StyledButton = styled(Button)`
  width: 179px;
  height: 49px;
  
  && {
    border-radius: 10px;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: #fff;
    margin-top: 33px;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryBackground};
    }
  }

  svg {
    font-size: 16px;
    padding-left: 8px;
  }
`;
