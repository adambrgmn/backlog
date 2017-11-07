// @flow
import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';
import { hoverBrand } from '../../styles/helpers';

const Title = styled.h1`
  position: relative;
  display: flex;
  align-items: baseline;
  margin: 0;
  padding: 0;
  font-size: ${modularScale(-1)};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;

  &::before {
    content: '»';
    position: absolute;
    left: -1em;
    transform: translateY(-0.1em);
  }
`;

const Link = styled.a`
  color: currentColor;
  text-decoration: none;
  ${hoverBrand()};
`;

function ArticleTitle({ href, children }: { href: string, children: string }) {
  return (
    <Title>
      <Link href={href}>{children}</Link>
    </Title>
  );
}

export { ArticleTitle as default };
