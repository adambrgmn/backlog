// @flow
import styled from 'styled-components';
import { font } from '../../styles/theme';

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-family: ${font.body};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const Small = styled.small`
  margin-left: 0.3em;
  font-size: 80%;
  line-height: 1;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: currentColor;
  text-decoration: none;
`;

export { Title, Small, Link };
