import React, { useState } from "react"
import "../global.css"
import Navbar from "../components/Navbar"
import Home from "../sections/Home"
import Info from "../sections/Info"
import Pricing from "../sections/Pricing"
import Contact from "../sections/Contact"
import Footer from "../components/Footer"

function Index() {
  const toggleNavbar = (command) => {
    const navbar = document.getElementsByClassName("navbar")[0]
    if (navbar) {
      if (command === 'show') {
        navbar.style.top = "0"
      } else if (command === 'hide')
        navbar.style.top = "-72px"
    }
  }

  window.onscroll = () => {
    const shouldShowNavbar = checkForShowingNavbar()
    if (shouldShowNavbar && !isNavbarVisible) {
      toggleNavbar('show')
      setNavbarVisibility(true)
    }
    if (!shouldShowNavbar && isNavbarVisible) {
      toggleNavbar('hide')
      setNavbarVisibility(false)
    }
  }

  const checkForShowingNavbar = () => {
    const currScrollPos = window.pageYOffset
    const isScrollingUp = prevScrollPos > currScrollPos
    const isAtTop = currScrollPos === 0
    const maxScroll = document.body.clientHeight - window.innerHeight
    const isAtBottom = currScrollPos === maxScroll
    updateScrollPos(currScrollPos)
    return (isScrollingUp || isAtTop) && !isAtBottom
  }

  const [isNavbarVisible, setNavbarVisibility] = useState(true)
  const [prevScrollPos, updateScrollPos] = useState(window.pageYOffset)

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
