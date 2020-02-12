import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import emailjs from "emailjs-com"
import michaelAngelosLogo from "../images/logo-transp.png"
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
      style={{ paddingBottom: "8rem" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade>
            <div>
              <h1 className="text-center my-5">Get more info</h1>
              <div
                className="contact-info"
                style={{
                  fontSize: "var(--smaller)",
                  fontWeight: "400",
                  fontFamily: "var(--accent-font)",
                  margin: "var(--x-large) 0",
                }}
              >
                <div className="contact-item">
                  <a href="tel:+19705891500">
                    <i className="fa fa-phone-alt"></i>(970) 589-1500
                  </a>
                </div>
                <div className="contact-item">
                  <a href="mailto:michael@michaelangeloswoodfiredpizza.com">
                    <i className="fa fa-envelope"></i>
                    michael@michaelangeloswoodfiredpizza.com
                  </a>
                </div>
              </div>
              {isFormSubmitted && (
                <div className="end-message success">
                  Thanks for your message! We'll be in touch soon.
                </div>
              )}
              {isError && (
                <div className="end-message error">
                  Sorry, there's been an error. Please try again later.
                </div>
              )}
              <form className={"contact-form" + showForm} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      className="inputBox"
                      placeholder="Your name"
                      name="from_name"
                    />
                  </div>
                  {/* </div> */}
                  {/* <div className="row"> */}
                  <div className="col-lg-6 mb-4">
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
                  placeholder="Write a message"
                  name="message"
                />
                {/* </div> */}
                <div className="button-container" style={{ display: "flex" }}>
                  <button className=" col btn btn-success mb-4 py-3">
                    Send email
                  </button>
                </div>
              </form>
            </div>
          </Fade>
          <div className="ma-links">
            <a href="http://michaelangeloswoodfiredpizza.com" target="_blank">
              <img src={michaelAngelosLogo} alt="Michael Angelo's logo" />
            </a>
            <a
              href="https://www.facebook.com/MichaelAngelosWoodFiredPizza"
              target="_blank"
            >
              <img src={facebookLogo} alt="facebook logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
