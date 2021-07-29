import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    span {
      margin: 0 0 0 0.5rem;

      &::after {
        content: ', ';
      }

      &:last-child::after {
        content: '';
      }
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
