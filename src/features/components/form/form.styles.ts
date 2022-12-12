import styled from 'styled-components';

const StyledContainer = styled.div`
  form {
    input:-webkit-autofill { 
      -webkit-background-clip: text;
    }

    .MuiTextField-root.error .MuiInputBase-root{
      border: ${({ theme }) => `solid 2px ${theme.colors.errorColor}`};
    }

    .MuiInputBase-root {
      border: ${({ theme }) => `solid 1px ${theme.colors.primaryBackground}`};
      height: 49px;
      border-radius: 10px;
      padding: 0 12px;
      margin-bottom: 12px;

      &::placeholder {
        text-align: center;
        color: ${({ theme }) => theme.colors.lighterBackgroundColor};
        font-size: 16px;
      }
    }

    svg.error-icon {
      color: ${({ theme }) => theme.colors.primaryBackgroundColor};
      cursor: pointer;
    }

    .input-icon svg {
      color: ${({ theme }) => theme.colors.lighterBackgroundColor};
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
        left: 27px;
        font-size: 16px;
      }
    }
  }
`;

export default StyledContainer;