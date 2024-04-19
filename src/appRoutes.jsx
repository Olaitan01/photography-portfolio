import Home from "./components/pages/home/homePage";
import About from "./components/pages/about/about";
import Portfolio from "./components/pages/portfolio/portfolio";
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
];
