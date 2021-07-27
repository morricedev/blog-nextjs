import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://example.com">Text</MenuLink>);
    expect(screen.getByRole('link', { name: 'Text' })).toBeInTheDocument();
  });

  it('should render a internal link', () => {
    renderTheme(<MenuLink link="/example">Text</MenuLink>);
    expect(screen.getByRole('link', { name: 'Text' })).toBeInTheDocument();
  });

  it('should render a link with default values', () => {
    renderTheme(<MenuLink link="https://example.com">Text</MenuLink>);
    expect(screen.getByRole('link', { name: 'Text' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://example.com" newTab>
        Text
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Text' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://example.com" newTab>
        Text
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        color: #FFFFFF;
        -webkit-text-decoration: none;
        text-decoration: none;
        margin-bottom: 1.6rem;
        font-size: 1.8rem;
        border-right: 0.5rem solid #000000;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .c0:hover {
        border-right: 0.5rem solid #dc143c;
        color: #dc143c;
      }

      <a
        class="c0"
        href="https://example.com"
        target="_blank"
      >
        Text
      </a>
    `);
  });
});
