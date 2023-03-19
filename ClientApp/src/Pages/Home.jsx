import Carousel from '../components/Carousel/index';
import JobsCard from '../components/JobsCard/index'
import EmployerCandidate from '../components/EmployerCandidate/index';
import ProfissionalOrientation from '../components/ProfissionalOrientation/index';
import SayPartners from '../components/SayPartners/index';

const Home = () => {
  return (
    <>
      <Carousel />
      <JobsCard />
      <EmployerCandidate />
      <ProfissionalOrientation />
      <SayPartners />
    </>
  )
}

export default Home