import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavTop from './NavTop/index';
import NavMenu from './NavMenu/index';
import Carousel from './Carousel/index';
import JobsCard from './JobsCard/index.jsx'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavTop />
        <NavMenu />
        <Carousel />
        <JobsCard />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
