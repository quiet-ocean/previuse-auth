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

  form {
    min-height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
      border: solid 1px #4723cd;
      height: 49px;
      width: 100%;
      border-radius: 10px;
      padding: 0 12px;
  
      &::placeholder {
        text-align: center;
        color: #bdbdbd;
        font-size: 16px;
      }
    }
  }
`
