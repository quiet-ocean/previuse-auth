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

export const StyledTicketButton = styled(Button)`
  width: 179px;
  height: 49px;
  
  && {
    text-transform: capitalize;
    background-color: #4723cd;
    color: #fff;
    margin-top: 33px;
    
    &:hover {
      background-color: #4723cd;
    }
  }

  svg {
    font-size: 16px;
    padding-left: 8px;
  }
`;

export const StyledAssistance = styled.div`
  text-align: center;
  padding-top: 64px;

  .title {
    color: #4723cd;
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
  color: #828282;
  font-size: 14px;
  text-align: center;
  padding-top: 23px;
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    padding: 0 3px;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid #828282;
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
    background-color: #5234c5 !important;
    
    .MuiTab-wrapper {
      color: #fff !important;
    }

    &:before {
      ${tab};
      left: -${cornerSize};
      box-shadow: 0 20px 0 0 #5234c5;
      border-bottom-right-radius: 50%;
    }
    
    &:after {
      ${tab};
      right: -${cornerSize};
      box-shadow: 0 20px 0 0 #5234c5;
      border-bottom-left-radius: 50%;
    }
  }
`;
