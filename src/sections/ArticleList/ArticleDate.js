// @flow
import React from 'react';

type Props = {
  date: string,
};

function ArticleDate({ date }: Props) {
  return (
    <div>
      Added <time dateTime={date}>{date}</time>
    </div>
  );
}

export { ArticleDate as default };
