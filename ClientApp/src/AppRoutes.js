import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import VacantJob from "./Pages/VacantJob";
import ProfissionalOrientation from './Pages/ProfissionalOrientation'


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/quem-somos',
    element: <AboutUs />
  },
  {
    path: '/vagas',
    element: <VacantJob />
  },
  {
    path: '/orientacao-profissional',
    element: <ProfissionalOrientation />
  },
];

export default AppRoutes;
