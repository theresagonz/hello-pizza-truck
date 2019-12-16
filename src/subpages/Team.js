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
            { text: "Maximum temperature above 1000°F" },
            {
              text:
                "Use to prepare anything cooked on a grill or in a conventional oven",
            },
            { text: "Signature FlameRoll® generates high, even temperatures" },
          ],
        },
        { text: 'Three-compartment sink, 15"' },
        { text: "Sliding serve window" },
        { text: "Full-size 36” steel entry door and retractable screen door" },
        { text: "Hand wash sink, stainless steel with knee valves" },
        { text: "Paper towel dispenser, automatic" },
        { text: "Lots of cabinets and racks for storage" },
      ],
    },
    {
      label: "Utility Room Info",
      infos: [
        { text: "Utility room measures 24 sq. ft (8’3” x 3’)" },
        { text: "Toilet, Dometic model 320" },
        { text: "Hand wash sink, stainless steel with knee valves" },
        { text: "Paper towel dispenser, automatic" },
        { text: "Electrical panel" },
        { text: "Extra storage" },
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
    {
      label: "Plumbing Info",
      infos: [
        { text: "Full plumbing with tanks located underneath truck" },
        { text: "Fresh water tank, 55-gallon" },
        { text: "Gray water tank, 35-gallon" },
        { text: "Black water tank, 35-gallon" },
        { text: "Hot water heater, Atwood 6-gallon propane" },
        { text: "Water pump, Shurflo 110V electrical, 3 gpm" },
      ],
    },
    {
      label: "Electrical Info",
      infos: [
        { text: "Wired for 110V power" },
        { text: "Electrical panel, 100-amp" },
        { text: "Complete backup power system" },
        { text: "Commercial generator, Onan 7000-watt" },
        {
          text:
            "Battery bank with four 24-volt batteries and Magnum inverter off grid sinewave mobile 4000W, 24VDC, 120VAC, 60 HZ",
        },
        { text: "Two 120W solar panels, roof-mounted" },
        { text: "Shore power hook up to charge battery bank, 50-amp 110 volt" },
        {
          text:
            "25’ and 50’ 6 gauge shore power electrical cord with 50-amp plug",
        },
      ],
    },
    {
      label: "Construction Info",
      infos: [
        {
          text:
            "Stripped to the truck frame and built from the floor up starting with 3”x3” 3/6” tube steel floor joists at 18” on center",
        },
        {
          text:
            "Compartments on outside driver’s side include one each for Onan Commercial 7000w generator, four 24-volt batteries, and propane tank. All are set up with sliding trays for easy access",
        },
        {
          text: "R-6 fiberglass insulation in walls and R-13 or 19 in ceiling ",
        },
        { text: "Ramp and stairs for easy entry" },
        { text: "Rechargeable vacuum, Electrolux Ergorapido" },
        { text: "Propane tank, 20-lb" },
      ],
    },
  ]

  const marginBottom = {
    marginBottom: "25px",
  }

  const [showTruckInfo, toggleTruck] = useState(false)
  const [showKitchenInfo, toggleKitchen] = useState(false)
  const [showUtilityRoomInfo, toggleUtilityRoom] = useState(false)
  const [showPlumbingInfo, togglePlumbing] = useState(false)
  const [showElectricalInfo, toggleElectrical] = useState(false)
  const [showConstructionInfo, toggleConstruction] = useState(false)

  const toggleInfoMap = {
    "Truck Info": {
      shouldShow: showTruckInfo,
      toggleMethod: toggleTruck,
    },
    "Kitchen Info": {
      shouldShow: showKitchenInfo,
      toggleMethod: toggleKitchen,
    },
    "Utility Room Info": {
      shouldShow: showUtilityRoomInfo,
      toggleMethod: toggleUtilityRoom,
    },
    "Plumbing Info": {
      shouldShow: showPlumbingInfo,
      toggleMethod: togglePlumbing,
    },
    "Electrical Info": {
      shouldShow: showElectricalInfo,
      toggleMethod: toggleElectrical,
    },
    "Construction Info": {
      shouldShow: showConstructionInfo,
      toggleMethod: toggleConstruction,
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
              }
              return <p>{description.text}</p>
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
