import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
        quod. Modi incidunt quas amet aspernatur aliquam impedit, nesciunt
        cumque reprehenderit quia, quis sequi in architecto, natus consectetur
        similique omnis? Animi?
      </p>
    </div>
  );
};
