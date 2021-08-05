import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        filter: brightness(80%);
      }
    }
  `}
`;
