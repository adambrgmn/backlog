// @flow
import React, { PureComponent } from 'react';
import Container from './Container';
import Icon from './Icon';
import ButtonAddNew from './ButtonAddNew';
import { Title, Link, Small } from './Title';
import { PlusCircle } from '../../components/Icons';

type Props = {
  onAddNew: () => void,
};

type State = {
  hover: boolean,
};

class Header extends PureComponent<Props, State> {
  state = {
    hover: false,
  };

  handleHover = (hover: boolean) => () => this.setState(() => ({ hover }));

  render() {
    const { onAddNew } = this.props;
    const { hover } = this.state;

    return (
      <Container>
        <Title
          onMouseEnter={this.handleHover(true)}
          onMouseLeave={this.handleHover(false)}
        >
          <Link href="/">
            <Icon hover={hover} /> <Small>Backlog</Small>
          </Link>
        </Title>
        <ButtonAddNew onClick={onAddNew}>
          <PlusCircle />
        </ButtonAddNew>
      </Container>
    );
  }
}

export { Header as default };
