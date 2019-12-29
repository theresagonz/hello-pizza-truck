import React, { useState } from "react"
import PricingItem from "../components/PricingItem"
import formatPrice from "../libraries/formatPrice"
import { useStaticQuery, graphql } from "gatsby"

// trailer gallery
import trailer from "../images/gallery/trailer/trailer.jpg"
import trailer2 from "../images/gallery/trailer/trailer2.jpg"

// equipment gallery
import pizzaWarmer from "../images/gallery/equipment/pizza-warmer.jpg"
import truckPrepArea from "../images/gallery/kitchen/truck-prep-area.png"
import prepTable from "../images/gallery/equipment/prep-table.jpg"

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
      expandableInfos: [
        {
          category: "Equipment",
          infos: [
            { text: "Spiral dough mixer, Häussler 25 quart" },
            {
              text:
                "Refrigerator – full size stainless steel commercial two-door (Blue Air) with 15 pan dough rack on one side",
            },
            {
              text:
                "Refrigerated prep table (Turbo Air 48” ) with an assortment of half, third, sixth and ninth trays",
            },
            {
              text:
                "Heater/dough proofer with stainless top and shelf (half-size Win-Holt NHP-PD-ECO)",
            },
            {
              text:
                "Pizza warmer, Hatco FDWD-1X, on rolling cart with two shelves",
            },
            { text: "Half baker rack with stainless top" },
          ],
        },
        {
          category: "Accessories",
          infos: [
            { text: "6 sheet pans, full-size" },
            { text: "30 sheet pans, half-size" },
            { text: "12 custom Lloyd pizza pans, 13.5”" },
            { text: "15 pizza pans, 12”" },
            { text: "Pizza screens - 8”, 10”, 12” and 14” sizes" },
            { text: "Wooden peels" },
            { text: "Cutting boards" },
            { text: "Pizza cutters" },
            { text: "Large serving spatulas" },
            { text: "And more!" },
          ],
        },
      ],
      images: [
        { original: pizzaWarmer, thumbnail: pizzaWarmer },
        { original: truckPrepArea, thumbnail: truckPrepArea },
        { original: prepTable, thumbnail: prepTable },
      ],
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
      descriptions: [
        {
          text:
            "Starting with a Road Force tandem axle trailer, we installed a wood fired oven and venting system, lighting, refrigeration, a counter with storage cabinets, and a portable hand wash sink. When open, the ramp door can become a workspace with included camper jacks. Also included is a remote-controlled winch to assist with moving ovens in and out of trailer.",
        },
      ],
      expandableInfos: [
        {
          category: null,
          infos: [
            {
              jsxWithLink: (
                <span>
                  Wood fired oven,{" "}
                  <a
                    href="https://chicagobrickoven.com/products/cbo-750-mobile?variant=12221428367402"
                    target="_blank"
                  >
                    Chicago Brick Oven CB-750
                  </a>{" "}
                  (currently mounted on the trailer but can also be portable on
                  a cart)
                </span>
              ),
            },
            { text: "Refrigerator/freezer, Sears 13 cubic foot" },
            { text: "Portable hand wash sink with heater, PolyJohn" },
            { text: "Counter with storage cabinets" },
            { text: "6 Camper jacks to make ramp door an extra workspace" },
            {
              text:
                "Wired for 110V power to inside outlets and 12-volt system inside to run winch and lights",
            },
            { text: "Battery, 12V for backup power to power lights and winch" },
          ],
        },
      ],
      images: [
        { original: trailer, thumbnail: trailer },
        { original: trailer2, thumbnail: trailer2 },
      ],
    },
    {
      headline: "Business turnkey",
      summary: "Training to make our pizza plus marketing and logo supplies",
      price: 4000,
      isAdded: isBusinessAdded,
      toggleAdd: toggleBusinessAdd,
      isExpanded: isBusinessExpanded,
      toggleExpand: toggleBusinessExpand,
      reference: "business",
      expandableInfos: [
        {
          category: null,
          infos: [
            { text: "CO state registered business name" },
            {
              text:
                "Two weeks of training to learn about the wood fired oven and how to make our delicious pizza",
            },
            { text: "Complete customizable WordPress website" },
            {
              text:
                "Custom EZ-Up canopy shelter, 10”x10” digitally printed with logo and 4 weight bags",
            },
            {
              text:
                "Picnic table, 6’ collapsible, with bench seats and umbrella",
            },
            { text: "Chimney sweep brushes, 6” and 8” on 4’ rod" },
            { text: "Aprons with embroidered logo" },
          ],
        },
      ],
      images: [],
    },
  ]
  return (
    <div id="details" className="container-fluid lt-grey-bg section">
      <div className="container detailsSection">
        <h1 className="text-center my-4">Pricing</h1>
        <h4 className="margin-bottom center">Create your perfect setup...</h4>

        {pricingInfo.map((pkg, i) => (
          <PricingItem
            key={i}
            pkg={pkg}
            level={level}
            setLevel={setLevel}
            isDirty={isDirty}
            setDirty={setDirty}
            isExpanded={pkg.isExpanded}
            toggleExpand={pkg.toggleExpand}
            i={i}
          />
        ))}
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
