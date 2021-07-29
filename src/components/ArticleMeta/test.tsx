import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('link', { name: 'Morrice' })).toHaveAttribute(
      'href',
      '/author/morrice',
    );
    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute(
      'href',
      '/category/tech',
    );
    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
      'href',
      '/category/javascript',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should render with no author and no categories', () => {
    renderTheme(
      <ArticleMeta {...props} author={undefined} categories={undefined} />,
    );

    expect(
      screen.queryByRole('link', { name: mock.author.displayName }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: mock.categories[0].displayName }),
    ).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);

    expect(container).toMatchSnapshot();
  });
});
