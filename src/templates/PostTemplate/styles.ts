import styled, { css } from 'styled-components';

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    padding-top: ${theme.spacings.small};
    max-width: ${theme.sizes.content};
    margin: 0 auto;
  `}
`;
