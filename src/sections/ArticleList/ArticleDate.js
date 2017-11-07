// @flow
import React from 'react';
import format from 'date-fns/format';
import styled from 'styled-components';
import { modularScale } from 'polished';
import { font } from '../../styles/theme';

const Time = styled.time`
  font-family: ${font.body};
  font-size: ${modularScale(-2)};
  font-variant-numeric: tabular-nums;
`;

function ArticleDate({ date }: { date: string }) {
  return <Time dateTime={date}>{format(date, 'YYYY-MM-DD')}</Time>;
}

export { ArticleDate as default };
