import React from "react"
import "../global.css"
import LandingPage from "../subpages/LandingPage";
import Details from "../subpages/Details";
import Team from "../subpages/Team";
import End from "../subpages/End";
import Footer from "../components/Footer";

function Index() {
  return (
    <div className="page">
      <LandingPage/>
      {/* <Details/> */}
      <Team/>
      <End/>
      {/* <Footer/> */}
    </div>
  )
}

export default Index
