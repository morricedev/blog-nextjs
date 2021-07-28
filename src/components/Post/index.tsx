import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  author,
  categories,
  cover,
  createdAt,
  excerpt,
  content,
  id,
  title,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        id={id}
        title={title}
        excerpt={excerpt}
        author={author}
        categories={categories}
        createdAt={createdAt}
        cover={cover}
      />
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
