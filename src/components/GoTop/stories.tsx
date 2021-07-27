import { Meta, Story } from '@storybook/react/types-6-0';
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum,
        quae totam recusandae illo iusto maxime voluptates natus? Rerum officiis
        tempore quo ipsa eveniet totam maiores magni, iusto voluptates illum?
      </small>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aperiam, temporibus excepturi incidunt nulla tempora rerum, officia est
        sit fugiat ipsa possimus qui saepe ut reiciendis explicabo autem
        deserunt dolores.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        rerum modi ullam, magnam delectus nam quam. Quis excepturi nihil
        asperiores enim praesentium. Quis qui, sapiente illum excepturi veniam
        suscipit sed?
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum,
        quae totam recusandae illo iusto maxime voluptates natus? Rerum officiis
        tempore quo ipsa eveniet totam maiores magni, iusto voluptates illum?
      </small>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aperiam, temporibus excepturi incidunt nulla tempora rerum, officia est
        sit fugiat ipsa possimus qui saepe ut reiciendis explicabo autem
        deserunt dolores.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        rerum modi ullam, magnam delectus nam quam. Quis excepturi nihil
        asperiores enim praesentium. Quis qui, sapiente illum excepturi veniam
        suscipit sed?
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum,
        quae totam recusandae illo iusto maxime voluptates natus? Rerum officiis
        tempore quo ipsa eveniet totam maiores magni, iusto voluptates illum?
      </small>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aperiam, temporibus excepturi incidunt nulla tempora rerum, officia est
        sit fugiat ipsa possimus qui saepe ut reiciendis explicabo autem
        deserunt dolores.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        rerum modi ullam, magnam delectus nam quam. Quis excepturi nihil
        asperiores enim praesentium. Quis qui, sapiente illum excepturi veniam
        suscipit sed?
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum,
        quae totam recusandae illo iusto maxime voluptates natus? Rerum officiis
        tempore quo ipsa eveniet totam maiores magni, iusto voluptates illum?
      </small>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aperiam, temporibus excepturi incidunt nulla tempora rerum, officia est
        sit fugiat ipsa possimus qui saepe ut reiciendis explicabo autem
        deserunt dolores.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        rerum modi ullam, magnam delectus nam quam. Quis excepturi nihil
        asperiores enim praesentium. Quis qui, sapiente illum excepturi veniam
        suscipit sed?
      </p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum,
        quae totam recusandae illo iusto maxime voluptates natus? Rerum officiis
        tempore quo ipsa eveniet totam maiores magni, iusto voluptates illum?
      </small>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aperiam, temporibus excepturi incidunt nulla tempora rerum, officia est
        sit fugiat ipsa possimus qui saepe ut reiciendis explicabo autem
        deserunt dolores.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        rerum modi ullam, magnam delectus nam quam. Quis excepturi nihil
        asperiores enim praesentium. Quis qui, sapiente illum excepturi veniam
        suscipit sed?
      </p>
      <GoTop {...args} />
    </div>
  );
};
