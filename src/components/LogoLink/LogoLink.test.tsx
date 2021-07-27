import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="LOGO" />);
    expect(screen.getByRole('heading', { name: 'LOGO' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LOGO' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="LOGO" srcImg="image.jpg" />);
    expect(screen.getByRole('img', { name: 'LOGO' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render internal link', () => {
    renderTheme(<LogoLink link="/target" text="LOGO" srcImg="image.jpg" />);
    expect(screen.getByRole('img', { name: 'LOGO' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render internal link with text only', () => {
    renderTheme(<LogoLink link="/target" text="LOGO" />);
    expect(screen.getByRole('heading', { name: 'LOGO' })).toBeInTheDocument();
  });

  it('should render a link with target blank', () => {
    renderTheme(<LogoLink link="/target" text="LOGO" newTab={true} />);
    expect(screen.getByRole('heading', { name: 'LOGO' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="LOGO" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
