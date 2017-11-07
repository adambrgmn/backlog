// @flow
import * as React from 'react';

type Props = {
  render: ({ hover: boolean }) => React.Node,
  className?: string,
  onMouseEnter?: (e: SyntheticMouseEvent<HTMLDivElement>) => void,
  onMouseLeave?: (e: SyntheticMouseEvent<HTMLDivElement>) => void,
};

type State = {
  hover: boolean,
};

class isHovering extends React.PureComponent<Props, State> {
  state = { hover: false };

  updateHover = (hover: boolean) => this.setState(() => ({ hover }));

  handleEnter = (e: SyntheticMouseEvent<HTMLDivElement>) => {
    this.updateHover(true);
    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
  };

  handleLeave = (e: SyntheticMouseEvent<HTMLDivElement>) => {
    this.updateHover(false);
    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
  };

  render() {
    const { className, render } = this.props;
    const { hover } = this.state;

    return (
      <div
        className={className}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        {render({ hover })}
      </div>
    );
  }
}

export { isHovering as default };
