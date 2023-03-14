import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavBar/index';
import Carousel from './Carousel/index';
import JobsCard from './JobsCard/index.jsx'
import EmployerCandidate from './EmployerCandidate';
import ProfissionalOrientation from './ProfissionalOrientation';
import SayPartners from './SayPartners';
import Footer from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
        <JobsCard />
        <EmployerCandidate />
        <ProfissionalOrientation />
        <SayPartners />
        <Footer />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
