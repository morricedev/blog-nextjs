import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render menu button ', () => {
    renderTheme(<Menu {...props} links={undefined} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    const openMenu = screen.getByLabelText('Open menu');

    expect(buttonLink).toBeInTheDocument();
    expect(openMenu).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should open and close menu on button click ', () => {
    renderTheme(<Menu {...props} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });

    fireEvent.click(buttonLink);
    //#region OPEN
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Maurício Sousa' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Maurício Sousa' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(mock.links.length);
    //#endregion

    fireEvent.click(buttonLink);
    //#region CLOSE
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();

    expect(buttonLink).toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    //#endregion
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);
    expect(container).toMatchSnapshot();
  });
});
