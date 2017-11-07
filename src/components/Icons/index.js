// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

const Container: React.ComponentType<{ className?: string }> = styled.div`
  display: inline-flex;
  align-self: center;
  position: relative;
  height: 1em;
  width: 1em;
`;

const Svg: React.ComponentType<{
  baseline?: boolean,
}> = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;

  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  ${props =>
    props.baseline &&
    css`
      position: absolute;
      bottom: -0.125em;
    `};

  & * {
    vector-effect: non-scaling-stroke;
  }
`;

type HocProps = {
  baseline?: boolean,
  className?: string,
};

function IconContainer({
  baseline,
  className,
  children,
}: HocProps & { children: React.Node }) {
  return (
    <Container className={className}>
      <Svg baseline={baseline} viewBox="0 0 24 24">
        {children}
      </Svg>
    </Container>
  );
}

const PlusCircle = ({ baseline, className }: HocProps) => (
  <IconContainer baseline={baseline} className={className}>
    <circle key="circle" cx={12} cy={12} r={10} />,
    <line key="line-1" x1={12} y1={8} x2={12} y2={16} />,
    <line key="line-2" x1={8} y1={12} x2={16} y2={12} />,
  </IconContainer>
);

export { IconContainer as default, PlusCircle };
