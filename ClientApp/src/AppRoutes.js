import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import VacantJob from "./Pages/VacantJob";


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
];

export default AppRoutes;
