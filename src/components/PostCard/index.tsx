import Link from 'next/link';

import { Image } from '../../sharedTypes/image';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  cover: Image;
  title: string;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ cover, excerpt, title, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} alt={cover.alternativeText} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
