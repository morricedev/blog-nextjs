import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';

describe('<HtmlContent />', () => {
  it('should render a paragraph ', () => {
    const { container } = renderTheme(<HtmlContent html="<p>Texto</p>" />);

    const p = container.querySelector('p');
    expect(p.tagName.toLowerCase()).toBe('p');
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });
  it('should render a text ', () => {
    renderTheme(<HtmlContent html="<p>Texto</p>" />);

    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html="<p>Texto</p>" />);

    expect(container).toMatchSnapshot();
  });
});
