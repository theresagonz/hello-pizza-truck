import React, { useState } from "react"
import PricingItem from "../components/PricingItem"
import PricingDetails from "../components/PricingDetails"
import formatPrice from "../libraries/formatPrice"
import { useStaticQuery, graphql } from "gatsby"

// trailer gallery
import trailer from "../images/gallery/trailer/trailer.jpg"
import trailer2 from "../images/gallery/trailer/trailer2.jpg"

// equipment gallery
import pizzaWarmer from "../images/gallery/equipment/pizza-warmer.jpg"
import truckPrepArea from "../images/gallery/kitchen/truck-prep-area.png"
import prepTable from "../images/gallery/equipment/prep-table.jpg"

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

  const [pricingItemDisplayed, changePricingItem] = useState("kitchen")

  const totalPrices = [80000, 87000, 93000, 97000]

  const featureStyle = {
    fontSize: "1.5em",
    padding: "20px 12px",
  }

  const [isDirty, setDirty] = useState(false)
  const [level, setLevel] = useState(0)

  const pricingInfo = [
    {
      category: "Just the truck",
      summary: "Truck, oven, and everything shown above",
      price: 80000,
      reference: "truck",
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
        { original: pizzaWarmer, thumbnail: pizzaWarmer },
        { original: truckPrepArea, thumbnail: truckPrepArea },
        { original: prepTable, thumbnail: prepTable },
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
        { original: trailer, thumbnail: trailer },
        { original: trailer2, thumbnail: trailer2 },
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
      images: [],
    },
  ]

  const currentPricingItem = pricingInfo.find(
    item => item.reference === pricingItemDisplayed
  )

  return (
    <div id="pricing" className="container section">
      <div className="container pricing-section">
        <h1 className="section-heading my-6">Pricing</h1>
        <div
          style={{
            textAlign: "center",
            fontSize: "var(--summary-git adfont-size)",
            marginBottom: "var(--xl-margin)",
          }}
        >
          Customize your setup!
          <br></br>
          Explore add-ons and pricing...
        </div>
        <h2
          className="price-container"
          style={{ textAlign: "center", margin: "var(--lg-margin) 0" }}
        >
          <span
            className="price-label"
            style={{ fontWeight: "400", fontSize: "28px" }}
          >
            {!isDirty ? "BASE" : "YOUR"} PRICE:{" "}
          </span>
          <span className="price">{formatPrice(totalPrices[level])}</span>
        </h2>
        <div>
          <div className="pricing-items">
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
                pricingItemDisplayed={pricingItemDisplayed}
                changePricingItem={changePricingItem}
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
