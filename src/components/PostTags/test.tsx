import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

const props: PostTagsProps = mock;

describe('<PostTags />', () => {
  it('should not render tags', () => {
    renderTheme(<PostTags tags={undefined} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should render two tags', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container).toMatchSnapshot();
  });
});
