import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Slider from "./Slider.jsx";
import { Introduction } from './Introduction';
import OurServices from "./OurServices.jsx";
import "./App.css";
import FeaturedMedicines from "./FeaturedMedicines.jsx";
import Categories from "./Categories.jsx";
import ChooseUs from "./ChooseUs.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Home />
      <Introduction/>
      <OurServices/>
      <FeaturedMedicines/>
      <Categories/>
      <ChooseUs/>
      <Footer/>
      
    </div>
  );
}

export default App;