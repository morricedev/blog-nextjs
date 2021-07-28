import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
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
      <PostContainer size="max">
        <ArticleHeader
          id={id}
          title={title}
          excerpt={excerpt}
          author={author}
          categories={categories}
          createdAt={createdAt}
          cover={cover}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
