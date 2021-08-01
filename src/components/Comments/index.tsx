import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;

  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="blog-do-morrice"
        config={{
          url: `/post/${slug}`,
          identifier: id,
          title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
