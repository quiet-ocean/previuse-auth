import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryBackgroundColor};
  font-size: ${({ theme }) => theme.sizes.fontSizeRegular};
  height: 100%;

  > div {
    height: 100%;
  }

  background-image: url('background.png');
`;

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }

  .MuiDialog-paper {
    && {
      border-radius: 10px;
    }
  }
`
