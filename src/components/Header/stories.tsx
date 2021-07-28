import { Meta, Story } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from '.';
import mock from './mock';

export default {
  title: 'Header',
  component: Header,
  args: mock,
} as Meta;

export const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};
