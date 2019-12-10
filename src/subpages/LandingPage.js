import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import isElementInViewport from '../libraries/isElementInViewport'
import truckCutout from '../images/truck-cutout-sm.png'
import truck from '../images/1808-08c9-85d9-8cd3 (1).png'

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml


  const features = [
    'Custom built, unique concept pizza truck with a real wood fired oven and full commercial kitchen, featuring a large working space with lots of windows.',
    'At the center of the working space is the oven, which evenly distributes heat and cooks food quickly at around 750 degrees F. With over 2,000 sq. inches of cooking space, it can handle up to three 13” pizzas or five 8” pizzas at a time.',
    'The oven faces the serving window, allowing customers the experience of seeing the crackling fire and food cooking in real time.',
  ]

  const pageStyle = {
    // backgroundColor: '#FFF',
    backgroundImage: "truck",
    //   "url(https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  const basicInfoStyle = {
    'margin-bottom': '20px',
  }

  const welcomePicStyle = {
    width: '80%',
    height: 'auto',
    // margin: '40px auto',
    // margin: '200px 0 0 0',
    'z-index': '1',
    '-webkit-box-shadow': '0px 0px 45px 0px rgba(0,0,0,0.33)',
    '-moz-box-shadow': '0px 0px 45px 0px rgba(0,0,0,0.33)',
    'box-shadow': '0px 0px 45px 0px rgba(0,0,0,0.33)',
  }

  const topTextStyle = {
    // position: 'fixed',
    // top: '40px',
    // 'z-index': '-1',
  }

  const elementsToShow = document.querySelectorAll('.feature');

  return (
    <div id = "home" style={pageStyle} className = "container-fluid">
      <div className="container">
        <Navbar />
        <div className="centerItems">
          <div className="topText" style={topTextStyle}>
            <div style={basicInfoStyle}>
              <h3 style={welcomeStyle}>{welcomeText}</h3>
              <h1>{landingText}</h1>
            </div>
            <h4>Location:  Grand Junction, Colorado</h4>

          </div>
          <img className="featuredPic" src={truck} style={welcomePicStyle} alt="Truck"/>
            <div className="feature">Custom built, unique concept pizza truck with a real wood fired oven and full commercial kitchen, featuring a large working space with lots of windows.</div>
            <br/>
            <div className="feature">At the center of the working space is the oven, which evenly distributes heat and cooks food quickly at around 750 degrees F. With over 2,000 sq. inches of cooking space, it can handle up to three 13” pizzas or five 8” pizzas at a time.</div>
            <br/>
            <div className="feature">The oven faces the serving window, allowing customers the experience of seeing the crackling fire and food cooking in real time.</div>

          {/* <button
            style={{
              width: "200px",
              padding: "10px",
              border: "none",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              background: "#FFA800",
              borderRadius: "30px",
              textTransform: "uppercase",
              color : "white",
              fontWeight : "600",
              marginTop : "20px"
            }}
          >
            Start a Project
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
