import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    font-style: italic;

    .categories span::after {
      content: ', ';
    }

    .categories span:last-child::after {
      content: '';
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
