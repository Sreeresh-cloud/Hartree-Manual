import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage'; 
import CustomerSite from './components/CustomerSite';
import EnergyAudit from './components/EnergyAudit';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {/* Welcome Page Route */}
                    <Route path="/" element={<WelcomePage />} />

                    {/* Hero Section Route */}
                    <Route path="/explore" element={<HeroSection />} />
                    <Route path="/customer&site" element={<CustomerSite />} />
                    <Route path="/energy-audit" element={<EnergyAudit />} />
                    

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
