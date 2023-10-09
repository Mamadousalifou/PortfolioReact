import React from "react";
import 'boxicons'
import "./App.css";
import {Routes,Route } from "react-router-dom"
import { Header } from "./template/Header";
import { Footer } from "./template/Footer";
import { Contact } from "./Components/Contact";
import { Accueil } from "./Components/Accueil";
import { Apropos } from "./Components/Apropos";
import { Services } from "./Components/Services";
import { Portfolio } from "./Components/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
       <Route path="/" element= {<Accueil />} />
       
       <Route path="/Portfolio" element= {<Portfolio />} />
       <Route path="/Services" element= {<Services />} />
       <Route path="/Contact" element= {<Contact />} />
       
      </Routes>
      <Footer />
    </>
  );
};

export default App;
