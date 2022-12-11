import styled, { AnyStyledComponent } from 'styled-components';

export const StyledContainer: AnyStyledComponent = styled.div`
  height: calc(100% - 80px);
  background: ${({ theme }) => theme.colors.lightBackgroundColor};
  display: flex;
  width: 100%;

  && {
    margin: 0;
  }
`;

export const StyledContent: AnyStyledComponent = styled.div`
  padding: ${({ theme }) => theme.spacing.framePadding};
  width: calc(100% - 64px);
  height: calc(100% - 64px);
`;