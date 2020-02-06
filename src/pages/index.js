import React, { useState } from "react"
import "../global.css"
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import Info from "../sections/Info";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function Index() {
  const navbar = document.getElementsByClassName("navbar")[0];
  const hideNavbar = () => navbar.style.top = "-72px";
  const showNavbar = () => navbar.style.top = "0";

  const checkForShowingNavbar = () => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      const currScrollPos = window.pageYOffset;
      const maxScroll = document.body.clientHeight - window.innerHeight;
      const isScrollingUp = prevScrollPos > currScrollPos;
      const isAtTop = currScrollPos === 0;
      const isAtBottom = currScrollPos === maxScroll;

      if (navbar) {
        if (isScrollingUp || isAtTop) {
          showNavbar();
        } else {
          hideNavbar();
        }
      }
      prevScrollPos = currScrollPos;
    }
  }

  checkForShowingNavbar();

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
