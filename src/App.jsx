import {Routes, Route } from "react-router-dom";
import { appRoutes } from "./appRoutes";
import Header from './components/header/header'


function App() {
  return (
    <>
   <Header/>
   <Routes>
    {appRoutes.map((route) =>
    <Route key={route.path}
    exact path={route.path}
    element= {route.component}
    />
    )}
   </Routes>

    </>
  )
}

export default App
