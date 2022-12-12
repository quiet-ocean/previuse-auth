import styled from "styled-components";
import { NavLink } from 'react-router-dom';

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
  height: 80%;
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
