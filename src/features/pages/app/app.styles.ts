import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryBackgroundColor};
  font-size: ${({ theme }) => theme.sizes.fontSizeRegular};
  height: 100%;

  > div {
    height: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }

  // TODO: create form component
  form {
    input {
      border: ${({ theme }) => `solid 1px ${theme.colors.primaryBackground}`};
      height: 49px;
      width: calc(100% - 26px);
      border-radius: 10px;
      padding: 0 12px;
      margin-bottom: 12px;
  
      &::placeholder {
        text-align: center;
        color: #bdbdbd;
        font-size: 16px;
      }
    }

    button[type=submit] {
      background-color: ${({ theme }) => theme.colors.primaryBackground};
      color: #fff;
      border-radius: 10px !important;
      width: 100%;
      height: 49px;
      text-transform: capitalize;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryBackground};
      }

      svg {
        position: absolute;
        left: 24px;
        font-size: 16px;
      }
    }
  }
`
