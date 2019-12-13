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
    "At the center of the kitchen area is the oven, which evenly distributes heat and cooks food quickly at around 750°F. With over 2,000 sq. in. of cooking space, the oven can handle up to three 13” pizzas or five 8” pizzas at a time.",
    "The oven faces the serving window, allowing customers the experience of seeing the crackling fire and food cooking in real time.",
    "A rear utility room contains easy access to the power system, extra storage space, and a toilet and hand wash sink, making it easy to operate anywhere.",
    "We've used the oven for our thin crust Neopolitan-style pizzas (usually under 2 minutes cooking time). The oven's high heat gives the crust a light, perfectly crispy outside and caramelizes the cheese and toppings.",
    "We've also used the oven for cooking up some pretty darn good meats, roasted veggies, crusty breads, and more. We're excited to help you discover just how amazing high heat cooking can be.",
  ]

  const featureStyle = {
    fontSize: "1.5em",
    padding: "20px 12px",
  }

  return (
    <div id="details" className="container-fluid gold-bg section">
      <div className="container">
        <div className="flexbox">
        <h1 className="text-center my-4">Available Now!</h1>
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
