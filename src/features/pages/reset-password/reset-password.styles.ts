import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  width: 528px;
  height: 50%;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.primaryBackground};
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 24px;
`;
