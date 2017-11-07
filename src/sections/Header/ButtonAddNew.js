// @flow
import styled from 'styled-components';
import { hoverBrand } from '../../styles/helpers';

const ButtonAddNew = styled.button`
  display: block;
  margin: 0;
  margin-left: auto;
  border: none;
  border-radius: 100%;
  padding: 0;
  font-size: 2em;
  background-color: transparent;
  ${hoverBrand('background-color')};

  &:focus {
    outline: none;
  }

  & div {
    display: block;
  }
`;

export { ButtonAddNew as default };
