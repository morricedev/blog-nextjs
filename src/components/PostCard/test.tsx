import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';
import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: mock.cover.alternativeText }),
    ).toHaveAttribute('src', mock.cover.url);
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: mock.title })).toHaveAttribute(
      'href',
      `/post/${mock.slug}`,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
