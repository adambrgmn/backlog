// @flow
import React from 'react';
import Container from './Container';
import ArticleContainer from './ArticleContainer';
import { ArticleHeader, ArticleFooter } from './ArticleSection';
import ArticleTitle from './ArticleTitle';
import ArticleLink from './ArticleLink';
import ArticleDate from './ArticleDate';

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
        <ArticleContainer key={post.id}>
          <ArticleHeader>
            <ArticleTitle href={post.link}>{post.title}</ArticleTitle>
            <ArticleLink href={post.link}>{post.link}</ArticleLink>
          </ArticleHeader>

          <ArticleFooter>
            <ArticleDate date={post.createdAt} />

            <div>
              <ul>
                {post.tags.map(tag => (
                  <li key={tag}>
                    <button>{tag}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button>Mark as done</button>
              <button>Remove</button>
            </div>
          </ArticleFooter>
        </ArticleContainer>
      ))}
    </Container>
  );
}

export { ArticleList as default };
