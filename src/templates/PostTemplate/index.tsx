import * as Styled from './styles';

import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { PostStrapi } from '../../sharedTypes/post';
import { SettingsStrapi } from '../../sharedTypes/settings';
import { BaseTemplate } from '../Base';
import { Comments } from '../../components/Comments';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings} postMenuLinks={post.menuLink}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>

      <Comments
        title={post.title}
        slug={post.slug}
        id={post.id}
        allowComments={post.allowComents}
      />
    </BaseTemplate>
  );
};
