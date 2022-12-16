import styled, { AnyStyledComponent } from 'styled-components';

export const StyledContainer: AnyStyledComponent = styled.div`
  height: calc(100% - 90px);
  background: ${({ theme }) => theme.colors.lightBackgroundColor};
  display: flex;
  width: 100%;
  background-image: url(background.png);
  background-size: cover;

  && {
    margin: 0;
  }
`;

export const StyledContent: AnyStyledComponent = styled.div`
  padding: ${({ theme }) => theme.spacing.framePadding};
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  overflow: auto;
`;