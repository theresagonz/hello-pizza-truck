import React, { useState } from "react"
import PricingItem from "../components/PricingItem"
import PricingDetails from "../components/PricingDetails"
import formatPrice from "../libraries/formatPrice"
import { useStaticQuery, graphql } from "gatsby"

// truck gallery
import truck from "../images/truck-exterior-rear-sm.jpg"

// trailer gallery
import truckTrailer from "../images/gallery/trailer/truck-trailer-sm.jpg"
import truckTrailer2 from "../images/gallery/trailer/truck-trailer-2-sm.jpg"
import trailer from "../images/gallery/trailer/trailer.jpg"
import trailer2 from "../images/gallery/trailer/trailer2.jpg"
import trailerSetup from "../images/gallery/trailer/trailer-setup-sm.jpg"

// equipment gallery
import kitchenEqpmt from "../images/gallery/equipment/kitchen-eqpmt-sm.jpg"
import pizzaWarmer from "../images/gallery/equipment/pizza-warmer.jpg"
import prepArea from "../images/gallery/kitchen/prep-area-sm.jpg"
import prepTable from "../images/gallery/equipment/prep-table.jpg"

// business gallery
import webMenu from "../images/gallery/business/web-menu.jpg"

function Pricing() {
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

  const [whichPricingItem, changePricingItem] = useState("truck")
  const [isDirty, setDirty] = useState(false)
  const [level, setLevel] = useState(0)

  const handleChangePricingItem = item => changePricingItem(item)
  const handleResetClick = () => {
    setLevel(0)
    setDirty(false)
  }
  const setDirtyTrue = () => {
    setDirty(true)
  }

  const totalPrices = [80000, 87000, 93000, 97000]
  const pricingInfo = [
    {
      category: "Just the truck",
      summary: "Truck and oven as described above",
      price: 80000,
      reference: "truck",
      images: [{ original: truck }],
      hideThumbs: true,
    },
    {
      category: "Kitchen support equipment",
      summary:
        "Equipment and supplies for running a mobile wood fired pizza business",
      price: 7000,
      reference: "kitchen",
      expandableInfos: [
        {
          label: "Equipment",
          infos: [
            { text: "Spiral dough mixer, Häussler 25 quart" },
            {
              text:
                "Refrigerator – Blue Air full size stainless steel commercial two-door with 15 pan dough rack on one side",
            },
            {
              text:
                "Refrigerated prep table, Turbo Air 48”, with an assortment of half, third, sixth and ninth trays",
            },
            {
              text:
                "Heater/dough proofer with stainless top and shelf, half-size Win-Holt NHP-PD-ECO",
            },
            {
              text:
                "Pizza warmer, Hatco FDWD-1X, on rolling cart with two shelves",
            },
            { text: "Half baker rack with stainless top" },
          ],
        },
        {
          label: "Accessories",
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
        {
          label: "Sales equipment",
          description: "The following items are mounted to a portable cart:",
          infos: [
            {
              text:
                "iPad Air, 2nd generation model A1566, for a POS system of your choice",
            },
            { text: "ShopKeep counter iPad mount and Survivor iPad case" },
            { text: "Credit card reader, Ingenico iCMP" },
            { text: "Cash drawer, APG Vasario" },
            { text: "Broadband router, Verizon 4G LTE" },
            { text: "Receipt printer, Star TSP100" },
          ],
        },
      ],
      images: [
        { original: kitchenEqpmt },
        { original: pizzaWarmer },
        { original: prepArea },
        { original: prepTable },
      ],
    },
    {
      category: "Second unit trailer",
      summary:
        "Make your setup more flexible with this mobile mini-kitchen in a trailer! Can operate independently or along with the truck.",
      price: 6000,
      reference: "trailer",
      description: [
        {
          text:
            "Starting with a 6' x 12' Road Force tandem axle trailer, we installed a wood fired oven and venting system, lighting, refrigeration, a counter with storage cabinets, and a portable hand wash sink.",
        },
        {
          text:
            "When open, the ramp door can become a workspace with included camper jacks. Also included is a remote-controlled winch to assist with moving the oven in and out of trailer.",
        },
      ],
      expandableInfos: [
        {
          label: null,
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
            { text: "12V battery to power lights and winch" },
          ],
        },
      ],
      images: [
        { original: truckTrailer },
        { original: truckTrailer2 },
        { original: trailer },
        { original: trailer2 },
      ],
    },
    {
      category: "Business and support extras",
      summary: "Training to make our pizza plus marketing and logo supplies",
      price: 4000,
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
                "Custom EZ-Up canopy shelter, 10” x 10” digitally printed with logo and 4 weight bags",
            },
            {
              text:
                "Picnic table, 6’ collapsible, with bench seats and umbrella",
            },
            { text: "Aprons with embroidered logo" },
          ],
        },
      ],
      images: [{ original: trailerSetup }, { original: webMenu }],
    },
  ]

  const currentPricingItem = pricingInfo.find(
    item => item.reference === whichPricingItem
  )

  return (
    <div id="pricing" className="section">
      <div className="pricing-section">
        <h1 className="section-heading my-6">Pricing</h1>
        <div className="p-text">
          Customize your setup!
          <br></br>
          Explore add-ons and pricing...
        </div>
        <h2
          className="price-container"
          style={{ textAlign: "center", margin: "var(--large) 0" }}
        >
          <span
            className="price-label"
            style={{ fontWeight: "400", fontSize: "var(--medium)" }}
          >
            {!isDirty ? "BASE" : "YOUR"} PRICE:{" "}
          </span>
          <span
            className="price"
            style={{ fontSize: "2rem", marginLeft: "7px" }}
          >
            {formatPrice(totalPrices[level])}
          </span>
        </h2>

        <div className="pricing-container">
          <div className="pricing-items">
            {pricingInfo.map((pkg, i) => (
              <PricingItem
                key={i}
                pkg={pkg}
                level={level}
                setLevel={setLevel}
                isDirty={isDirty}
                setDirtyTrue={setDirtyTrue}
                isExpanded={pkg.isExpanded}
                toggleExpand={pkg.toggleExpand}
                whichPricingItem={whichPricingItem}
                handleChangePricingItem={handleChangePricingItem}
                handleResetClick={handleResetClick}
                i={i}
              />
            ))}
          </div>
          <PricingDetails item={currentPricingItem} setLevel={setLevel} />
        </div>
      </div>
    </div>
  )
}

export default Pricing
