import React, { useState } from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"


const Details = props => {
  const { allTeamYaml } = useStaticQuery(graphql`
    {
      allTeamYaml {
        edges {
          node {
            name
            img
          }
        }
      }
    }
  `)

let [showTruckInfo, toggle] = useState(false);

  return (
    <div id="team" className="container-fluid orange-bg section">
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Details</h1>
          <div>
            <h2>Truck Info <span className="pointer" onClick={() => toggle(!showTruckInfo)}>{showTruckInfo ? '-' : '+'}</span></h2>
          </div>
          <div id="truckInfoWrapper" className={"truckInfo" + (!showTruckInfo ? ' show' : null)}>
            <div><strong>Year:</strong> 2000</div>
            <div><strong>Make:</strong> GMC</div>
            <div><strong>Model:</strong> U-Haul</div>
            <div><strong>Mileage:</strong> 169,390</div>
            <div><strong>Gas or diesel:</strong> Gas</div>
            <div><strong>Length:</strong> 34' total</div>
            <div><strong>Current DOT certification:</strong> Intrastate CO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
