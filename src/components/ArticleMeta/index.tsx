import { Author } from '../../sharedTypes/author';
import { Category } from '../../sharedTypes/category';
import { formatDate } from '../../utils/formatDate';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author && (
          <>
            <span>Por </span>
            <a href={`/author/${author.slug}`}>{author.displayName}</a>
            <span className="separator"> | </span>
          </>
        )}
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((category) => {
                return (
                  <span key={`article-meta-cat-${category.id}`}>
                    <a href={`/category/${category.slug}`}>
                      {category.displayName}
                    </a>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
