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

  const descriptions = [
    {
      text:
        "The wood fired oven provides a natural separation for the kitchen into areas for prep and building pizzas on event day. The front serve window wall slides out to add extra space for working and equipment. There are plenty of cabinets and racks for storage above along with storage under the oven.",
    },
    {
      jsxWithLink: (
        <p>
          built at <a href="www.google.com">Google</a>
        </p>
      ),
    },
  ]

  const baseInfos = [
    {
      label: "Kitchen Info",
      infos: [
        { text: "Kitchen space measures 163 sq. ft (8’3”x 20’6”)" },
        { text: "Slide wall adds 32 sq. ft (10’x38”)" },
        {
          jsxWithLink: (
            <span>
              Built-in{" "}
              <a
                href="https://chicagobrickoven.com/products/cbo-1000-diy-kit"
                target="_blank"
              >
                Chicago Brick Oven CB-1000
              </a>{" "}
              wood fired oven
            </span>
          ),
          subInfos: [
            { text: 'Cooking surface of 2,000 sq. in. (53" x 39")' },
            { text: "Max temperature above 1000°F" },
            { text: "Use to prepare anything cooked on a grill or in a conventional oven" },
            { text: "Signature FlameRoll® generates high, even temperatures" },
          ],
        },
      ],
    },
    {
      label: "Truck Info",
      infos: [
        { boldText: "Year", text: "2000" },
        { boldText: "Make", text: "GMC" },
        { boldText: "Model", text: "U-Haul" },
        { boldText: "Mileage", text: "169,500" },
        { boldText: "Gas or Diesel", text: "Gas" },
        { boldText: "Length", text: "34' total (24' interior)" },
        { boldText: "Current DOT certification", text: "Intrastate CO" },
      ],
    },
  ]

  const marginBottom = {
    marginBottom: "25px",
  }

  const [showTruckInfo, toggleTruck] = useState(false)
  const [showKitchenInfo, toggleKitchen] = useState(false)

  const toggleInfoMap = {
    "Truck Info": {
      shouldShow: showTruckInfo,
      toggleMethod: toggleTruck,
    },
    "Kitchen Info": {
      shouldShow: showKitchenInfo,
      toggleMethod: toggleKitchen,
    },
  }

  return (
    <div id="team" className="container-fluid orange-bg section">
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Details</h1>
          <div className="truckInfo">
            {descriptions.map((description, i) => {
              if (description.jsxWithLink) {
                return description.jsxWithLink
              } else {
                return <p>{description.text}</p>
              }
            })}
            {baseInfos.map((section, i) => {
              const label = section.label
              const shouldShow = toggleInfoMap[label].shouldShow
              const toggleMethod = toggleInfoMap[label].toggleMethod

              return (
                <div className="sectionLabel">
                  <h2>
                    {label}
                    <span
                      className="pointer"
                      onClick={() => toggleMethod(!shouldShow)}
                    >
                      {shouldShow ? " -" : " +"}
                    </span>
                  </h2>
                  <ul>
                    {section.infos.map((info, j) => {
                      const subInfos =
                        info.subInfos && info.subInfos.length
                          ? info.subInfos
                          : null

                      return subInfos ? (
                        <div
                          className={
                            "toggleShow" + (!shouldShow ? " show" : null)
                          }
                        >
                          <li key={i}>{info.text || info.jsxWithLink}</li>
                          <ul>
                            {subInfos.map((subInfo, j) => (
                              <li>{subInfo.text}</li>
                            ))}
                          </ul>
                        </div>
                      ) : info.boldText ? (
                        <li
                          key={label + "-" + i}
                          className={
                            "toggleShow" + (!shouldShow ? " show" : null)
                          }
                        >
                          <strong>{info.boldText}:</strong> {info.text}
                        </li>
                      ) : (
                        <li
                          key={label + "-" + i}
                          className={
                            "toggleShow" + (!shouldShow ? " show" : null)
                          }
                        >
                          {info.text}
                        </li>
                      )
                    })}
                  </ul>
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
