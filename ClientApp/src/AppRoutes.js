import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/quem-somos',
    element: <AboutUs />
  }
];

export default AppRoutes;
