import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


const MainContainer = () => {



    return (
    <Router>
        <Header />
        <NavBar/>
        <Routes>
            <Route path="/about" element={<About />}
            />
            <Route path="/portfolio" element={<Portfolio />}
            />
            <Route path="/contact" element={<Contact />}
            />
        </Routes>
    </Router>
    )
}

export default MainContainer