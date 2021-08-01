import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  svg.search-ok-icon {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
  }
  svg.search-cancel-icon {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
    ${({ theme }) => css`
      color: ${theme.colors.secondary};
    `}
  }
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
