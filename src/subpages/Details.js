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
    "Custom built, unique concept pizza truck with a real wood fired oven and full commercial kitchen, featuring a large working space with lots of windows.",
    "At the center of the working space is the oven, which evenly distributes heat and cooks food quickly at around 750 degrees F. With over 2,000 sq. inches of cooking space, it can handle up to three 13” pizzas or five 8” pizzas at a time.",
    "The oven faces the serving window, allowing customers the experience of seeing the crackling fire and food cooking in real time.",
  ]

  return (
    <div id="services" className="container-fluid" style={{ backgroundColor: "#FF9933", color: '#FFF' }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Details</h1>
          <div className="row">
            <div className="feature">
              Custom built, unique concept pizza truck with a real wood fired oven
              and full commercial kitchen, featuring a large working space with
              lots of windows.
            </div>
          </div>
          {/* <br /> */}
          <div className="row">
            <div className="feature">
              At the center of the working space is the oven, which evenly
              distributes heat and cooks food quickly at around 750 degrees F.
              With over 2,000 sq. inches of cooking space, it can handle up to
              three 13” pizzas or five 8” pizzas at a time.
            </div>
          </div>
          {/* <br /> */}
          <div className="row">
            <div className="feature">
              The oven faces the serving window, allowing customers the experience
              of seeing the crackling fire and food cooking in real time.
            </div>
          {/* </div> */}
            {/* {allServicesYaml.edges.map(({ node }) => {
              return <ServiceItem title={node.title} src={node.src} />
            })} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
