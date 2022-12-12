import styled from 'styled-components';

const StyledContainer = styled.div`
  form {
    .MuiInputBase-root {
      border: ${({ theme }) => `solid 1px ${theme.colors.primaryBackground}`};
      height: 49px;
      border-radius: 10px;
      padding: 0 12px;
      margin-bottom: 12px;

      &::placeholder {
        text-align: center;
        color: #bdbdbd;
        font-size: 16px;
      }
    }

    svg {
      color: ${({ theme }) => theme.colors.primaryBackgroundColor};
      cursor: pointer;
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
`;

export default StyledContainer;