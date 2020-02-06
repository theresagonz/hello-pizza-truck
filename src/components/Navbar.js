import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "../images/food-truck-icon-lg.png"

function Navbar() {
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

  return (
    <nav className="navbar navbar-expand navbar-light brick-wall shadow">
      <div className="nav-left">
        <AnchorLink className="navbar-brand " href="#home">
          <img className="logo" src={logo} />
        </AnchorLink>
        <span style={{color: "#000"}}>hello!</span>
      </div>
      {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
          Info
        </button> */}

        {/* <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button> */}
      <div className="nav-right">
        <div className="nav-info-links">
          {navInfoLinks.map((link, i) => (
            <AnchorLink key={`info-link-${i}`} className="nav-link" href={link.href}>
              {link.label}
            </AnchorLink>
          ))}
        </div>
        <div className="nav-action-links">
          {navActionLinks.map((link, i) => (
            <AnchorLink key={`action-link-${i}`} className="nav-link" href={link.href}>
              {link.label}
            </AnchorLink>
          ))}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
