import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "../images/food-truck-icon-lg.png"

function Navbar() {
  // accounts for window and document not existing during the build
  const isWindow = typeof window != "undefined"
  const isDocument = typeof document != "undefined"

  const textStyle = {
    color: "#FFA800",
    fontWeight: "600",
    letterSpacing: "0.1em",
  }

  const navInfoLinks = [
    { label: "Kitchen", href: "#kitchen" },
    { label: "Bathroom", href: "#bathroom" },
    { label: "Truck", href: "#truck" },
    { label: "Electrical", href: "#electrical" },
    { label: "Plumbing", href: "#plumbing" },
    { label: "Construction", href: "#construction" },
  ]

  const navActionLinks = [
    { label: "Buy", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  const [prevScrollPos, updateScrollPos] = useState(
    isWindow && window.pageYOffset
  )
  const [navbarMaxHeight, setNavbarMaxHeight] = useState("68px")
  const [navbarTop, setNavbarTop] = useState("0")

  function checkForShowingNavbarOnScroll() {
    const currScrollPos = isWindow && window.pageYOffset
    const isScrollingUp = prevScrollPos > currScrollPos
    const isAtTop = currScrollPos === 0
    const maxScroll =
      isWindow && isDocument && document.body.clientHeight - window.innerHeight
    const isAtBottom = currScrollPos === maxScroll
    updateScrollPos(currScrollPos)
    return (isScrollingUp || isAtTop) && !isAtBottom
  }

  const showDropdown = () => {
    setNavbarMaxHeight("450px")
  }
  const hideDropdown = () => {
    setNavbarMaxHeight("68px")
  }

  const handleDropdownClick = () => {
    if (navbarMaxHeight === "450px") hideDropdown()
    if (navbarMaxHeight === "68px") showDropdown()
  }

  const showNavbar = () => {
    setNavbarTop("0")
  }

  const hideNavbar = () => {
    hideDropdown()
    setNavbarTop("-68px")
  }

  const handleHomeClick = () => {
    showNavbar()
    hideDropdown()
  }

  const handleLinkClick = () => {
    hideNavbar()
  }

  const handleScroll = () => {
    let shouldShowNavbar = checkForShowingNavbarOnScroll()
    let isNavbarVisible = navbarTop === "0" || navbarTop === "0px"
    if (shouldShowNavbar && !isNavbarVisible) showNavbar()
    if (!shouldShowNavbar && isNavbarVisible) hideNavbar()
  }

  useEffect(() => {
    if (isWindow) window.onscroll = handleScroll
  })

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark brick-wall shadow"
      style={{ top: navbarTop, maxHeight: navbarMaxHeight }}
    >
      <div className="nav-left">
        <AnchorLink
          className="navbar-brand "
          href="#home"
          onClick={handleHomeClick}
        >
          <img className="logo" src={logo} style={{ width: "40px" }} />
        </AnchorLink>
        <span style={{ color: "#000" }}>hello!</span>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleDropdownClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="nav-right navbar-collapse collapsible-navbar">
        <ul className="nav-info-links nav-center navbar-nav">
          {navInfoLinks.map((link, i) => (
            <li className="nav-item">
              <AnchorLink
                key={`info-link-${i}`}
                className="nav-link"
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
        <ul className="nav-action-links navbar-nav">
          {navActionLinks.map((link, i) => (
            <li className="nav-item">
              <AnchorLink
                key={`action-link-${i}`}
                className="nav-link nav-item"
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
