// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import raf from 'raf-schd';
import IconContainer from '../../components/Icons';
import transition from '../../styles/transition';
import { color } from '../../styles/theme';

const Polygon = styled.polygon`
  fill: ${props => (props.filled ? color.brand : 'none')};
  stroke: ${props => (props.filled ? 'none' : 'currentColor')};
  stroke-width: 1;
`;

const ClipPolygon: React.ComponentType<{ hover: boolean }> = styled.polygon`
  ${transition({ prop: 'transform', duration: '0.15s' })};

  ${props =>
    props.hover &&
    css`
      transform: translateX(200%);
    `};
`;

type Props = {
  hover: boolean,
};

type State = {
  animate: boolean,
};

class Icon extends React.Component<Props, State> {
  state = {
    animate: false,
  };

  interval: ?number = null;
  timeout: ?number = null;

  componentDidMount() {
    this.setupInterval();
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
    window.clearTimeout(this.timeout);
  }

  setupInterval = () => {
    this.interval = window.setInterval(() => {
      this.updateAnimate(true);
      this.timeout = window.setTimeout(() => this.updateAnimate(false), 150);
    }, 15000);
  };

  updateAnimate = raf(animate => this.setState(() => ({ animate })));

  render() {
    const { hover } = this.props;
    const { animate } = this.state;

    return (
      <IconContainer>
        <defs key="defs">
          <clipPath id="zap-clip">
            <ClipPolygon
              points="-10 22 0 10 -9 10 -8 2 -19 2 -29 14 -20 14 -21 22 -10 22"
              hover={hover || animate}
            />
          </clipPath>
        </defs>
        <Polygon
          key="polygon-filled"
          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
          clipPath="url(#zap-clip)"
          filled
        />
        <Polygon
          key="polygon-unfilled"
          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        />
      </IconContainer>
    );
  }
}

// const Icon = ({ hover }: Props) => {
//   return (
//     <IconContainer>
//       <defs key="defs">
//         <clipPath id="zap-clip">
//           <ClipPolygon
//             points="-10 22 0 10 -9 10 -8 2 -19 2 -29 14 -20 14 -21 22 -10 22"
//             hover={hover}
//           />
//         </clipPath>
//       </defs>
//       <Polygon
//         key="polygon-filled"
//         points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
//         clipPath="url(#zap-clip)"
//         filled
//       />
//       <Polygon
//         key="polygon-unfilled"
//         points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
//       />
//     </IconContainer>
//   );
// };

export { Icon as default };
