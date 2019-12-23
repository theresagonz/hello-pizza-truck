import React, { useState } from "react"
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

  const formatPrice = num => {
    const numArray = num && num.toString().split("")
    if (numArray) {
      numArray.splice(-3, 0, ",")
      return "$" + numArray.join("")
    }
  }

  const resetSelectionToIndex = (index, items) => {
    for (let i = index; i < items.length; i++) {
      items[i].toggleAdd(false)
    }
  }

  const totalPrices = [80000, 87000, 93000, 97000]

  const featureStyle = {
    fontSize: "1.5em",
    padding: "20px 12px",
  }

  const [isTruckAdded, toggleTruckAdd] = useState(true)
  const [isEquipmentAdded, toggleEquipmentAdd] = useState(false)
  const [isTrailerAdded, toggleTrailerAdd] = useState(false)
  const [isBusinessAdded, toggleBusinessAdd] = useState(false)

  const [isTruckExpanded, toggleTruckExpand] = useState(false)
  const [isEquipmentExpanded, toggleEquipmentExpand] = useState(false)
  const [isTrailerExpanded, toggleTrailerExpand] = useState(false)
  const [isBusinessExpanded, toggleBusinessExpand] = useState(false)

  const [isDirty, setDirty] = useState(false)
  const [level, setLevel] = useState(0)

  const pricingInfo = [
    {
      headline: "Just the truck",
      summary: "Truck, oven, and everything shown above",
      price: 80000,
      isRequired: true,
      isAdded: isTruckAdded,
      toggleAdd: toggleTruckAdd,
      isExpanded: isTruckExpanded,
      toggleExpand: toggleTruckExpand,
      reference: "truck",
    },
    {
      headline: "Kitchen support equipment",
      summary:
        "Equipment and supplies for running a mobile wood fired pizza business",
      price: 7000,
      isAdded: isEquipmentAdded,
      toggleAdd: toggleEquipmentAdd,
      isExpanded: isEquipmentExpanded,
      toggleExpand: toggleEquipmentExpand,
      reference: "kitchen",
    },
    {
      headline: "Second unit trailer",
      summary: "Mobile mini-kitchen that makes any setup more flexible",
      price: 6000,
      isAdded: isTrailerAdded,
      toggleAdd: toggleTrailerAdd,
      isExpanded: isTrailerExpanded,
      toggleExpand: toggleTrailerExpand,
      reference: "trailer",
    },
    {
      headline: "Business turnkey",
      summary:
        "Training to make our delicious pizza plus marketing and logo supplies",
      price: 4000,
      isAdded: isBusinessAdded,
      toggleAdd: toggleBusinessAdd,
      isExpanded: isBusinessExpanded,
      toggleExpand: toggleBusinessExpand,
      reference: "business",
    },
  ]

  return (
    <div id="details" className="container-fluid lt-grey-bg section">
      <div className="container detailsSection">
        <h1 className="text-center my-4">Pricing</h1>
        <p>
          Several buying options are available for the truck and equipment for a
          fully customizable setup.
        </p>
        {pricingInfo.map((pkg, i) => {
          const isRequired = pkg.isRequired ? " required" : ""
          const isSelected = level >= i ? " selected" : " not-selected"
          const isExpanded = pkg.isExpanded ? "" : ' hidden'
          return (
            <div
              key={i}
              className={"option-container" + isSelected + isRequired}
              onClick={() => pkg.toggleExpand(!pkg.isExpanded)}
            >
              <div className={"option"}>
                <h2 className="">
                  {pkg.headline}{" "}
                  {pkg.isRequired ? (
                    <span className="check-mark required">&#10003;</span>
                  ) : i <= level ? (
                    <span
                      className={"check-mark add-remove-button remove"}
                      onClick={() => {
                        setLevel(i - 1)
                      }}
                    >
                      &#10003;
                    </span>
                  ) : (
                    <span
                      className={"add-remove-button add"}
                      onClick={() => {
                        setDirty(true)
                        setLevel(i)
                      }}
                    >
                      +
                    </span>
                  )}
                </h2>
                <div className="price-summary">
                  <p className="">{pkg.summary}</p>
                  <h4>{formatPrice(pkg.price)}</h4>
                </div>
                <div className={isExpanded}>
                  
                </div>
              </div>
            </div>
          )
        })}
        <br />
        <h2 className="center red-text">
          <b>{!isDirty ? "BASE" : "YOUR"} PRICE:</b>{" "}
          {formatPrice(totalPrices[level])}
        </h2>
      </div>
    </div>
  )
}

export default Details
