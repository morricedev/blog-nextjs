import { Meta, Story } from '@storybook/react/types-6-0';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: mock,
} as Meta<PostGridProps>;

export const Template: Story<PostGridProps> = (args) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};
