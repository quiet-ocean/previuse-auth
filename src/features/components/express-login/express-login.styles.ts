import styled from 'styled-components';

const StyledContainer = styled.div`
  
`;

export const StyledTitle = styled.div`
  text-align: center;
  color: #000;
  font-size: 14px;
  margin-bottom: 28px;
`;

export const StyledSeperator = styled.div`
  text-align: center;
  margin: 32px 0;
  display: flex;
  align-items: center;

  hr {
    width: calc(50% - 24px);
    background-color: #4723cd;
  }

  div {
    padding: 0 12px;
    color: #4723cd;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  
  button {
    text-transform: capitalize;
    background-color: #e0e0e0;
    width: calc(50% - 4px);
    color: #828282;
    font-size: 16px;
    border-radius: 10px;
    height: 49px;
  }

  svg {
    position: absolute;
    right: 12px;
  }

  .google svg {
    width: 23px;
  }
`;

export default StyledContainer;