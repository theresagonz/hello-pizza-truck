import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div
      className="container-fluid red-bg"
      style={{ paddingBottom: '55px' }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5">Let's Talk!</h1>
            <div className="row my-4">
              <div className="col-lg-6 mb-4">
                <input
                  type="name"
                  className="inputBox"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <input
                  type="email"
                  className="inputBox"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <textarea rows = "2" className="inputBox mb-4" placeholder="Your Message" />
            <button className="btn btn-light mb-4 py-3">
              Submit
            </button>
          </Fade>
        </div>
      </div>
    </div>
  )
}
