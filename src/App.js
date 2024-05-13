import React from 'react'
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Header'
import Footer from './component/Footer';
import Main from "./pages";
import About from "./pages/about";
import Service from "./pages/services";
import Project from './pages/project';
import Contact from './pages/contact';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './component/Header2';

function App() {

  return (
    <>
   <Router>
  <Home/>
   {/* <Header/> */}
    <Routes>
    <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path='/project' element={<Project/>} />
        <Route exact path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
</Router>
       
</>
  );
}

export default App;
