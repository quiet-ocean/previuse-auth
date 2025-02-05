import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Button } from "@material-ui/core";

const cornerSize = '40px';

const tab = () => `
  content: "";
  position: absolute;
  bottom: 0;
  height: ${cornerSize};
  width: ${cornerSize};
`;

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiTabs-flexContainer {
    padding-left: 14px;
  }
`;

export const StyledWrapper = styled.div`
  width: 528px;
  height: 88%;
`;

export const StyledChangePassword = styled.div`
  color: ${({ theme }) => theme.colors.primaryBackground};
  padding-top: 12px;
  cursor: pointer;
`;

export const StyledTicketButton = styled(Button)`
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

export const StyledAssistance = styled.div`
  text-align: center;
  padding: 64px 0;

  .title {
    color: ${({ theme }) => theme.colors.primaryBackground};
    font-size: 36px;
    font-weight: bold;
  }

  .subtitle {
    color: #000;
    font-size: 18px;
    padding-top: 18px;
  }
`;

export const StyledDisclaimer = styled.div`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 14px;
  text-align: center;
  padding-top: 23px;
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    padding: 0 3px;
    color: ${({ theme }) => theme.colors.primaryTextColor};

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
    }
  }

  > div {
    width: 384px;
    line-height: 22px;
  }
`;

export const StyledLink = styled(NavLink)`
  && {
    min-width: 100px;
    margin: 0 12px;
    background-color: inherit;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: inherit;
    opacity: inherit;
    text-transform: capitalize;
    font-size: 16px;
  }

  button {
    min-width: 100%;
  }

  &.active {
    position: relative;
    background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor} !important;
    
    .MuiTab-wrapper {
      color: #fff !important;
    }

    &:before {
      ${tab};
      left: -${cornerSize};
      box-shadow: 0 20px 0 0 ${({ theme }) => theme.colors.secondaryBackgroundColor};
      border-bottom-right-radius: 50%;
    }
    
    &:after {
      ${tab};
      right: -${cornerSize};
      box-shadow: 0 20px 0 0 ${({ theme }) => theme.colors.secondaryBackgroundColor};
      border-bottom-left-radius: 50%;
    }
  }
`;
