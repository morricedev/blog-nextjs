import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml:
      '<p><a href="https://github.com/morricedev">Feito com ❤ por Morrice</a></p>',
  },
  argTypes: {
    footerHtml: { type: 'string' },
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
