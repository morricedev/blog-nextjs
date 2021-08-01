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

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
      }

      .c0 p {
        margin: 2.4rem 0;
      }

      .c0 a,
      .c0 a:visited,
      .c0 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .c0 a:hover,
      .c0 a:visited:hover,
      .c0 a:link:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c0 code {
        font-family: monospace;
        color: #dc143c;
        font-size: 1.6rem;
        background-color: #eee;
        padding: 0.2rem;
        margin: 0.2rem;
      }

      .c0 pre {
        background: #181a1b;
        padding: 2.4rem;
        font-family: monospace;
        color: white;
        margin: 2.4rem 0;
        font-size: 1.6rem;
        width: 100%;
        overflow-x: auto;
      }

      .c0 pre code {
        background: inherit;
        color: inherit;
      }

      .c0 img {
        max-width: 100%;
      }

      .c0 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 2.4rem 0;
        color: black;
      }

      .c0 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c0 .image-style-side {
        max-width: 50%;
        float: right;
        margin: 2.4rem;
      }

      .c0 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c0 ul,
      .c0 ol {
        margin: 2.4rem 4.0rem;
      }

      .c0 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c0 table {
        width: 100%;
        border-collapse: collapse;
        margin: 2.4rem;
      }

      .c0 table td,
      .c0 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      .c0 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #AAAAAA;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 2rem;
        }

        .c0 .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

      <div>
        <div
          class="c0"
        >
          <p>
            Texto
          </p>
        </div>
      </div>
    `);
  });
});
