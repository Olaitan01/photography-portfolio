import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from "./components/header";
import './styles/index.css'
import "./styles/pageTransition.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
