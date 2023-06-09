import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarPage from "../components/Navbar";

import "./home.css";
import Container from "react-bootstrap/esm/Container";
import Cards from "../components/Cards";
import CarouselsExmaole from "../components/CarouselsExmaole";
const Home = () => {
  return (
    <div>
      <div>
        <NavbarPage />
      </div>
      <div>
        <CarouselsExmaole />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
