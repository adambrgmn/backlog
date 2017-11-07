// @flow
import React from 'react';
import styled from 'styled-components';
import { modularScale, ellipsis } from 'polished';
import { font } from '../../styles/theme';

const Button = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  border: none;
  border-radius: 0;
  padding: 0;
  font-size: 1em;
  text-align: left;
  background-color: transparent;
`;

const Title = styled.span`
  margin: 0;
  font-family: ${font.body};
  font-size: ${modularScale(-1)};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  ${ellipsis('100%')};
`;

const SubTitle = Title.extend`
  text-transform: initial;
  font-size: ${modularScale(-2)};
  letter-spacing: 0.15em;
  ${ellipsis('100%')};
`;

type Props = {
  title: string,
  href: string,
};

function ArticleTitle({ title, href }: Props) {
  return (
    <Button>
      <Title>{title}</Title>
      <SubTitle>{href.replace(/^https?:\/\//, '')}</SubTitle>
    </Button>
  );
}

export { ArticleTitle as default };
