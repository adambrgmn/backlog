// @flow
import React from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../../styles/helpers';

const Label = styled.label`
  ${visuallyHidden()};
`;

type Props = {
  name: string,
  checked: boolean,
};

function ArticleCheckbox({ name, checked }: Props) {
  const id = `checkbox-${name}`;
  return [
    <input id={id} type="checkbox" checked={checked} />,
    <Label htmlFor={id} aria-hidden="true">
      Done
    </Label>,
  ];
}

export { ArticleCheckbox as default };
