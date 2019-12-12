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

  const features = [
    "Custom-built, unique concept pizza truck with a real wood fired oven and full commercial kitchen, featuring a large working space with lots of windows.",
    "At the center of the working space is the oven, which evenly distributes heat and cooks food quickly at around 750 degrees F. With over 2,000 sq. inches of cooking space, it can handle up to three 13” pizzas or five 8” pizzas at a time.",
    "The oven faces the serving window, allowing customers the experience of seeing the crackling fire and food cooking in real time.",
  ]

  const featureStyle = {
    fontSize: "1.5em",
    padding: "12px",
  }

  return (
    <div id="details" className="container-fluid gold-bg section">
      <div className="container">
        <div className="flexbox">
          <div className="row">
            {features.map((feature, i) => {
              return (
                <div className="feature" style={featureStyle} key={i}>
                  {feature}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
