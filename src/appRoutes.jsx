/* eslint-disable react-refresh/only-export-components */

import Home from "./components/pages/home/homePage";
import About from "./components/pages/about/about";
import Portfolio from "./components/pages/portfolio/portfolio";
import Services from "./components/pages/services/services";
import Contact from "./components/pages/contact/contact";

export const appRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/portfolio",
    component: <Portfolio />,
  },
  {
    path: "/services",
    component: <Services />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
];
