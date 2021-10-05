import Prism from 'prismjs';
import { useEffect } from 'react';

import * as Styled from './styles';
import { PrismWrapper } from './prism';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    let removeAds = null;
    if (typeof window !== 'undefined') {
      Prism.highlightAll();

      removeAds = setTimeout(() => {
        document.querySelectorAll('div#disqus_thread iframe').forEach((el) => {
          if (!el.hasAttribute('src')) el.remove();
        });
      }, 1000);
    }

    return () => clearTimeout(removeAds);
  }, []);
  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
    </PrismWrapper>
  );
};
