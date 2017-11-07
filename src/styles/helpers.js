// @flow
import { css } from 'styled-components';
import { transitions, timingFunctions } from 'polished';
import { color } from './theme';

type TransitionProps =
  | string
  | {
      prop: string,
      duration?: string,
      timing?: string,
    };

const transition = (...props: TransitionProps[]) => css`
  ${transitions(
    ...props.map(p => {
      if (typeof p === 'string') {
        return `${p} 0.3s ${timingFunctions('easeInOutSine')}`;
      }

      return `${
        p.prop
      } ${p.duration || '0.3s'} ${p.timing || timingFunctions('easeInOutSine')}`;
    }),
  )};
  will-change: ${props
    .map(p => {
      if (typeof p === 'string') return p;
      return p.prop;
    })
    .join(', ')};
`;

const hoverBrand = (prop: string = 'color') => () => css`
  ${transition(prop)};

  &:hover {
    ${prop}: ${color.brand};
  }
`;

export { transition, hoverBrand };
