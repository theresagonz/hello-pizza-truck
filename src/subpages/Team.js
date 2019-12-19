import React, { useState } from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from "react-image-gallery"

// kitchen gallery
import truckWorkspace from "../images/gallery/kitchen/truck-workspace.jpg"
import ovenWorkspace from "../images/gallery/kitchen/oven-workspace.jpg"
import servingWindow from "../images/gallery/kitchen/truck-exterior-serving-window.jpg"
import sink from "../images/gallery/kitchen/sink.jpg"
import sinkWorkspace from "../images/gallery/kitchen/truck-sinks-workspace.jpg"
import ovenPizzas from "../images/gallery/kitchen/oven-pizzas.png"
import ovenPizzasThumb from "../images/gallery/kitchen/oven-pizzas-thumb.png"
import ovenFire from "../images/gallery/kitchen/oven-fire.jpg"
import ovenFireThumb from "../images/gallery/kitchen/oven-fire-thumb.png"
import ovenCookspace from "../images/gallery/kitchen/oven-cookspace.jpg"
import ovenCookspaceThumb from "../images/gallery/kitchen/oven-cookspace-thumb.png"

// truck gallery
import truckAtEvent from "../images/gallery/truck/truck-at-event.jpg"
import truckExteriorServingWindow from "../images/gallery/kitchen/truck-exterior-serving-window.jpg"
import truckMountains from "../images/gallery/truck/truck-mountains.jpg"
import truckParked from "../images/gallery/truck/truck-parked.jpg"

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
      label: "Kitchen",
      descriptions: [
        "At the heart of the kitchen area lies the built-in wood fired oven, which provides a large surface for high heat cooking. The heat gives thin crust Neopolitan-style pizzas a light, savory texture, a perfectly crispy outer crust, and caramelized cheese and toppings, usually in under 2 minutes.",
        "Customers can see the food cooking and fire crackling from the outside serve window. The front serve window wall slides out to add working space.",
        "Be your own commissary! The truck is licensed in Colorado as a full commercial kitchen.",
        "There are plenty of cabinets and racks for storage above along with storage under the oven.",
        "We've also used the oven to cook up meats, roasted veggies, crusty breads, and more. We're excited to help you discover just how amazing high heat cooking can be.",
      ],
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
            {
              text:
                "Can cook up to three 13” pizzas (or five 8” pizzas) at once at around 750°F",
            },
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
      images: [
        { original: ovenPizzas, thumbnail: ovenPizzasThumb },
        { original: ovenCookspace, thumbnail: ovenCookspaceThumb },
        { original: ovenFire, thumbnail: ovenFireThumb },
        { original: ovenWorkspace, thumbnail: ovenWorkspace },
        { original: sink, thumbnail: sink },
        { original: sinkWorkspace, thumbnail: sinkWorkspace },
        { original: truckWorkspace, thumbnail: truckWorkspace },
        { original: servingWindow, thumbnail: servingWindow },
      ],
    },
    {
      label: "Bathroom + Utility Room",
      descriptions: [
        "A rear utility room contains a bathroom with toilet and hand wash sink, extra storage, and easy access to the power system.",
      ],
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
      label: "Truck",
      descriptions: [
        "Built on a U-Haul box truck, this has new tires as of 2018 and many miles left in it.",
      ],
      infos: [
        { boldText: "Year", text: "2000" },
        { boldText: "Make", text: "GMC" },
        { boldText: "Model", text: "U-Haul" },
        { boldText: "Mileage", text: "169,500" },
        { boldText: "Gas or Diesel", text: "Gas" },
        { boldText: "Length", text: "34' total (24' interior)" },
        { boldText: "Current DOT certification", text: "Intrastate CO" },
      ],
      images: [
        { original: truckAtEvent, thumbnail: truckAtEvent },
        { original: truckParked, thumbnail: truckParked },
        { original: truckMountains, thumbnail: truckMountains },
      ],
    },
    {
      label: "Electrical",
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
      label: "Plumbing",
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
      label: "Construction",
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

  const [showTruck, toggleTruck] = useState(false)
  const [showKitchen, toggleKitchen] = useState(false)
  const [showUtilityRoom, toggleUtilityRoom] = useState(false)
  const [showPlumbing, togglePlumbing] = useState(false)
  const [showElectrical, toggleElectrical] = useState(false)
  const [showConstruction, toggleConstruction] = useState(false)

  const toggleInfoMap = {
    Truck: {
      shouldShow: showTruck,
      toggleMethod: toggleTruck,
    },
    Kitchen: {
      shouldShow: showKitchen,
      toggleMethod: toggleKitchen,
    },
    "Bathroom/Utility Room": {
      shouldShow: showUtilityRoom,
      toggleMethod: toggleUtilityRoom,
    },
    Plumbing: {
      shouldShow: showPlumbing,
      toggleMethod: togglePlumbing,
    },
    Electrical: {
      shouldShow: showElectrical,
      toggleMethod: toggleElectrical,
    },
    Construction: {
      shouldShow: showConstruction,
      toggleMethod: toggleConstruction,
    },
  }

  return (
    <div id="team" className="container-fluid grey-bg section">
      <div className="container">
        <div className="flexbox">
          <div className="truckInfo">
            {baseInfos.map(section => {
              const label = section.label
              const featureText = !label ? { fontSize: "1.5em" } : null
              const shouldShow =
                toggleInfoMap[label] && toggleInfoMap[label].shouldShow
              const toggleMethod =
                toggleInfoMap[label] && toggleInfoMap[label].toggleMethod
              return (
                <div className="sectionLabelWrapper">
                  {section.images && (
                    <ImageGallery
                      items={section.images}
                      thumbnailPosition="right"
                    />
                  )}
                  {section.label && <h1>{section.label}</h1>}
                  {section.descriptions && (
                    <div className="pMarginTop">
                      {section.descriptions.map((description, i) => (
                        <p style={featureText} key={i}>
                          {description}
                        </p>
                      ))}
                      <div className="detailsContainer">
                        {section.infos && (
                          <div>
                            <h5 className="sectionLabel">
                              <span
                                className="pointer"
                                onClick={() => toggleMethod(!shouldShow)}
                              >
                                {shouldShow ? "- Collapse" : "+ More info"}
                              </span>
                              {/* {shouldShow ? " Collapse" : " More info"} */}
                            </h5>
                            <ul>
                              {section.infos &&
                                section.infos.map((info, j) => {
                                  const subInfos =
                                    info.subInfos && info.subInfos.length
                                      ? info.subInfos
                                      : null
                                  return subInfos ? (
                                    <div
                                      className={
                                        "toggleShow" +
                                        (!shouldShow ? " show" : null)
                                      }
                                      key={label + "-" + j}
                                    >
                                      <li>{info.text || info.jsxWithLink}</li>
                                      <ul>
                                        {subInfos.map((subInfo, k) => (
                                          <li key={"subInfo-" + j + "-" + k}>
                                            {subInfo.text}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ) : info.boldText ? (
                                    <li
                                      key={label + "-" + j}
                                      className={
                                        "toggleShow" +
                                        (!shouldShow ? " show" : null)
                                      }
                                    >
                                      <strong>{info.boldText}:</strong>{" "}
                                      {info.text}
                                    </li>
                                  ) : (
                                    <li
                                      key={label + "-" + j}
                                      className={
                                        "toggleShow" +
                                        (!shouldShow ? " show" : null)
                                      }
                                    >
                                      {info.text}
                                    </li>
                                  )
                                })}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
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
