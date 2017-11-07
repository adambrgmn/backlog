// @flow
import React, { PureComponent } from 'react';
import { injectGlobal } from 'styled-components';
import Header from './sections/Header';
import ArticleList from './sections/ArticleList';
import { color } from './styles/theme';

type Post = {
  id: string,
  title: string,
  link: string,
  createdAt: string,
  updatedAt: string,
  tags: string[],
};

type Props = {};
type State = {
  posts: Post[],
};

class App extends PureComponent<Props, State> {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      if (process.env.PUBLIC_URL != null) {
        const url = `${process.env.PUBLIC_URL}/data.json`;
        const res = await fetch(url);
        const data: { posts: Post[] } = await res.json();
        this.setState(({ posts }) => ({ posts: [...posts, ...data.posts] }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  handleAddNew = () => console.info('Add new');

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header onAddNew={this.handleAddNew} />
        <ArticleList posts={posts} />
      </div>
    );
  }
}

export default App;

injectGlobal`
  :root {
    ${Object.keys(color)
      .map(k => `--color-${k}: ${color[k]};`)
      .join('\n')}
  }
`;
