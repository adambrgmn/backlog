// @flow
import * as React from 'react';
import styled from 'styled-components';
import { modularScale, ellipsis } from 'polished';
import { hoverBrand } from '../../styles/helpers';

const LinkContainer = styled.div`
  font-size: ${modularScale(-2)};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.5em;

  ${ellipsis('100%')};
`;

const Link = styled.a`
  color: currentColor;
  text-decoration: none;

  ${hoverBrand()};
`;

type Props = {
  href: string,
  children: string,
};

function ArticleLink({ href, children }: Props) {
  return (
    <LinkContainer>
      <Link href={href}>{children.replace(/^http?s:\/\/(www.)?/, '')}</Link>
    </LinkContainer>
  );
}

export { ArticleLink as default };
