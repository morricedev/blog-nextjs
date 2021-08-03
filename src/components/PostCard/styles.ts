import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: ${theme.spacings.small} 0;
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      a {
        color: ${theme.colors.secondary};
      }

      img {
        opacity: 0.8;
      }
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
  height: 20rem;
  transition: opacity 0.3s ease-in-out;
`;

export const Excerpt = styled.p``;
