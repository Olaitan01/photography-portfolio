/* eslint-disable react-refresh/only-export-components */
import {lazy} from "react"

import Home from "./components/pages/home/homePage";
// import About from "./components/pages/about/about";
// import Portfolio from "./components/pages/portfolio/portfolio";
// import Services from "./components/pages/services/services";
// import Contact from "./components/pages/contact/contact";
 
const About  = lazy(()=> import("./components/pages/about/about"))
const Portfolio  = lazy(()=> import("./components/pages/portfolio/portfolio"))
const Services  = lazy(()=> import("./components/pages/services/services"))
const Contact = lazy(()=> import("./components/pages/contact/contact"))

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
    component: <Services/>,
  },
  {
    path: "/contact",
    component: <Contact/>,
  }
];
