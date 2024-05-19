import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { appRoutes } from "./appRoutes";
// import Header from "./components/header";
import NotFound from "./components/notfound";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function mobileScreen() {
      setIsMobile(window.innerWidth < 1024);
    }

    window.addEventListener("resize", mobileScreen);

    return () => window.removeEventListener("resize", mobileScreen);
  }, []);

  return (
    <>
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames={isMobile ? "" : "fade"}
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
