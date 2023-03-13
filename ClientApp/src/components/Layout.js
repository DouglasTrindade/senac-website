import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavBar/index';
import NavMenu from './NavMenu/index';
import Carousel from './Carousel/index';
import JobsCard from './JobsCard/index.jsx'
import EmployerCandidate from './EmployerCandidate';
import ProfissionalOrientation from './ProfissionalOrientation';
import SayPartners from './SayPartners';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavBar />
        <NavMenu />
        <Carousel />
        <JobsCard />
        <EmployerCandidate />
        <ProfissionalOrientation />
        <SayPartners />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
