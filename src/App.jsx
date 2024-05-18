import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { appRoutes } from "./appRoutes";
// import Header from "./components/header";
import NotFound from "./components/notfound";



function App() {
  const location = useLocation();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={500}
          unmountOnExit
        >
          <Routes location={location}>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                exact
                path={route.path}
                element={route.component}
                errorElement={route.error}
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
