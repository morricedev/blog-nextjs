import styled, { css } from 'styled-components';

export type PostContainerProps = {
  size: 'max' | 'content';
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    max-width: ${theme.sizes[size]};
    padding: 0 ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      padding: 0 calc(${theme.spacings.large} / 2);
    }
  `}
`;
