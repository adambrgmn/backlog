// @flow
import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import ArticleCheckbox from './ArticleCheckbox';
import ArticleTitle from './ArticleTitle';
import ArticleDate from './ArticleDate';

const PostElement = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const PostField = styled.div`
  min-width: 0;
  margin-right: 1rem;

  &:last-child {
    min-width: 3.5rem;
    margin-right: 0;
    margin-left: auto;
  }
`;

type Post = {
  id: string,
  title: string,
  link: string,
  createdAt: string,
  updatedAt: string,
  tags: string[],
};

type Props = { posts: Post[] };

function ArticleList({ posts }: Props) {
  return (
    <Container>
      {posts.map(post => (
        <PostElement key={post.id}>
          <PostField>
            <ArticleCheckbox name={post.id} checked={false} />
          </PostField>

          <PostField>
            <ArticleTitle title={post.title} href={post.link} />
          </PostField>

          <PostField>
            <ArticleDate date={post.updatedAt} />
          </PostField>
        </PostElement>
      ))}
    </Container>
  );
}

export { ArticleList as default };
