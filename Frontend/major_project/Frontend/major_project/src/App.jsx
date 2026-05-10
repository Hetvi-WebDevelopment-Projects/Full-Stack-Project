import React from "react";
import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Plan from "./Plan";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  console.log(import.meta.env.VITE_FRONTEND_URL);
  console.log('Hello, World!');
  return (
    <>

      <nav className="nav">

        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/about" className="link">
          About Us
        </Link>

        <Link to="/service" className="link">
          Our Services
        </Link>

        <Link to="/portfolio" className="link">
          Portfolio
        </Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/plan" element={<Plan />} />

      </Routes>

      <footer className="footer">
        <h3>Outpro India</h3>
        <p>Adventure & Sports Event Management Company</p>

        <p>Email: info@outproindia.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>

        <p>© 2026 Outpro India. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App;
