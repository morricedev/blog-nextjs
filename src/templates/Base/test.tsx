import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate, BaseTemplateProps } from '.';
import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render base template', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(
      screen.getByRole('img', { name: 'MorriceDev - Blog' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(screen.getByText('Um footer qualquer aqui')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
