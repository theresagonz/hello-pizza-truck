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

  return (
    <div id="details" className="container-fluid gold-bg section">
      <div className="container detailsSection">
        <div className="flexbox">
          <h1 className="text-center my-4">Available Now!</h1>
          <div className="row">
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
      </div>
    </div>
  )
}

export default Details
