import React from "react"
import "../global.css"
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import Info from "../sections/Info";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function Index() {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <Info />
      <Pricing />
      <Contact />
      {/* <Footer/> */}
    </div>
  )
}

export default Index
