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

  const truckInfos = [
    { topic: 'Year', category: '2000' },
    { topic: 'Make', category: 'GMC' },
    { topic: 'Model', category: 'U-Haul' },
    { topic: 'Mileage', category: '169,500' },
    { topic: 'Gas or Diesel', category: 'Gas' },
    { topic: 'Length', category: "34' total (24' interior)" },
    { topic: 'Current DOT certification', category: 'Intrastate CO' },
  ];

  const baseInfos = [
    { description: { text: 'Kitchen space measures 163 sq. ft (8\’3”x 20\’6”)' }},
    { description: { text: 'Slide wall adds 32 sq. ft (10\’x38”)' }},
    { description: {
        textWithLink: (
          <span>
             Built-in <a href="https://chicagobrickoven.com/products/cbo-1000-diy-kit" target="_blank">Chicago Brick Oven CB-1000</a> wood fired oven
          </span>
                      )
      },
      subInfos: [
        { description: 'Cooking surface of 2,000 sq. in. (53" x 39")' },
        { description: 'Max temperature above 1000°F' },
        { description: 'Use to prepare anything cooked on a grill or in a conventional oven' },
        { description: 'Signature FlameRoll® generates high, even temperatures' },
      ],
    },
  ];

  const marginBottom = {
    marginBottom: '25px',
  }

  const [showTruckInfo, toggleTruck] = useState(false);
  const [showBasePkgInfo, toggleBasePkg] = useState(false);

  return (
    <div id="team" className="container-fluid orange-bg section">
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Details</h1>
          <div className="truckInfo">
            <p>The wood fired oven provides a natural separation for the kitchen into areas for prep and building pizzas on event day. The front serve window wall slides out to add extra space for working and equipment. There are plenty of cabinets and racks for storage above along with storage under the oven.</p>
            <ul>
              {
                baseInfos.map((info, i) => {
                  const subInfos = info.subInfos && info.subInfos.length ? info.subInfos : null;
                  return subInfos ? (
                    <div>
                      <li key={i}>{info.description.text || info.description.textWithLink}</li>
                        <ul>
                          {
                            subInfos.map((subInfo, j) => (
                              <li>{subInfo.description}</li>
                            ))
                          }
                        </ul>
                    </div>
                  ) : (
                    <li key={i}>{info.description.text || info.description.textWithLink}</li>
                  )
                })
              }
            </ul>
          </div>
          <h2>Truck Info <span className="pointer" onClick={() => toggleTruck(!showTruckInfo)}>{showTruckInfo ? '-' : '+'}</span></h2>
          <ul className={"toggleShow" + (!showTruckInfo ? ' show' : null)}>
            {
              truckInfos.map((info, i) => (
                <li key={i}><strong>{info.topic}:</strong> {info.category}</li>
              ))
            }
          </ul>
          <h2 style={marginBottom}>Truck Only Package <span className="pointer" onClick={() => toggleBasePkg(!showBasePkgInfo)}>{showBasePkgInfo ? '-' : '+'}</span></h2>
        </div>
      </div>
    </div>
  )
}

export default Details
