// @flow
import { css } from 'styled-components';
import { transitions, timingFunctions } from 'polished';

type Prop =
  | string
  | {
      prop: string,
      duration?: string,
      timing?: string,
    };

const transition = (...props: Prop[]) => css`
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

export { transition as default };

// `${p} 0.3s ${timingFunctions('easeInOutSine')}`
