import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"

function Details() {
  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            src
          }
        }
      }
    }
  `)

  const featureStyle = {
    fontSize: "1.5em",
    padding: "20px 12px",
  }

  let price = 80000

  return (
    <div id="details" className="container-fluid lt-grey-bg section">
      <div className="container detailsSection">
        <h1 className="text-center my-4">Pricing</h1>
        <p>
          Several buying options are available for the truck and equipment for a
          fully customizable setup.
        </p>
        <h1 className="center">Base price: {price}</h1>
        <br />
        <div className="option selected">
          <h2 className="">Just the Truck</h2>
          <div className="price-summary">
            <p className="">Truck, oven, and everything shown above</p>
            <h4>$80,000</h4>
          </div>
        </div>
        <div className="option not-selected">
          <h2>Kitchen Support Equipment</h2>
          <div className="price-summary">
            <p>
              Equipment and supplies for running a mobile wood fired pizza
              business
            </p>
            <h4>$7,000</h4>
          </div>
        </div>
        <div className="option not-selected">
          <h2>Second Unit Trailer</h2>
          <p>Mobile mini-kitchen that makes any setup more flexible</p>
        </div>
        <div className="option not-selected">
          <h2>Business Turnkey</h2>
          <p>
            Training to make our delicious pizza plus marketing and logo
            supplies
          </p>
        </div>
        {/* {features.map((feature, i) => {
              return (
                <div
                  className="feature"
                  style={featureStyle}
                  key={i}
                >
                  {feature}
                </div>
              )
            })} */}
      </div>
    </div>
  )
}

export default Details
