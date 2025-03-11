import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Outreach from './components/Outreach';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import InteriorSection from "./components/InteriorSection";
import Contact from "./components/Contact";
import TeamMembers from './pages/TeamMembers';
import './App.css';

function Home() {
  return (
    <>
    <InteriorSection />
      <Hero />
      <Mission />
      <Outreach />
      <Gallery />
      <Team />
      <Contact />
    
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamMembers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
