import { AboutUs } from "./components/AboutUs";
import { FetchData } from "./components/FetchData";
import { Layout } from "./components/Layout";

const AppRoutes = [
  // {
  //   index: true,
  //   element: <Layout />
  // },
  {
    path: '/aboutus',
    element: <AboutUs />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
