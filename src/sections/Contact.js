import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import emailjs from "emailjs-com"
import logo from "../images/logo-transp.png"
import facebookLogo from "../images/facebook-logo.png"

function Contact() {
  const [isFormSubmitted, markSubmitted] = useState(false)
  const [isError, markError] = useState(false)
  const showForm = isFormSubmitted ? " hide" : " show"
  const showError = isError ? " error" : ""

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
      "hellopizzatruck",
      "pizza_truck_inquiry",
      e.target,
      "user_XTQ8oJHyAIsl27GDnArx1"
      )
      .then(
      result => {
        console.log("result", result)
        markSubmitted(true)
      },
      error => {
        console.log("error", error)
        markError(true)
      }
      )
  }

  return (
    <div
      id="contact"
      className="container-fluid"
      style={{ paddingBottom: "55px" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <div>
              <h1 className="text-center my-5">Get in Touch!</h1>
              <div className="email margin-bottom larger-font">
                <div className="contact">
                  <div>Call/text</div>
                  <a href="tel:+19705891500">(970) 589-1500</a>
                </div>
                <div className="contact">
                  <div>Email</div>
                  <a href="mailto:michael@michaelangeloswoodfiredpizza.com">
                    michael@michaelangeloswoodfiredpizza.com
                  </a>
                </div>
              </div>
              {isFormSubmitted && (
                <div className="end-message">
                  Thanks for your message! Michael will contact you soon.
                </div>
              )}
              {isError && (
                <div className="end-message">
                  Sorry, there's been an error. Please try again later.
                </div>
              )}
              <form className={"contact-form" + showForm} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col mb-4">
                    <input
                      type="text"
                      className="inputBox"
                      placeholder="Your name"
                      name="from_name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-4">
                    <input
                      type="text"
                      className="inputBox"
                      placeholder="Your location (city and state)"
                      name="from_location"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="email"
                      className="inputBox"
                      placeholder="Your email"
                      name="from_email"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="tel"
                      className="inputBox"
                      placeholder="Your phone number"
                      name="from_phone"
                    />
                  </div>
                </div>
                {/* <div className="row"> */}
                <textarea
                  rows="2"
                  className="col inputBox mb-4"
                  placeholder="Write a Message"
                  name="message"
                />
                {/* </div> */}
                <button className=" col btn btn-light mb-4 py-3">Submit</button>
              </form>
            </div>
          </Fade>
          <div className="ma-links">
            <a href="http://michaelangeloswoodfiredpizza.com" target="_blank">
              <img src={logo} alt="Michael Angelo's pizza website" />
            </a>
            <a
              href="https://www.facebook.com/MichaelAngelosWoodFiredPizza"
              target="_blank"
            >
              <img src={facebookLogo} alt="facebook link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
