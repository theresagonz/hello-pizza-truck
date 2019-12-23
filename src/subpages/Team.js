import React, { useState } from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"
import InfoItem from "../components/InfoItem"

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
import truckRearOpen from "../images/gallery/truck/truck-rear-open.jpg"
import truckRearClosed from "../images/gallery/truck/truck-rear-closed.jpg"

// bathroom gallery
import bathroom from "../images/gallery/bathroom/truck-bathroom.jpg"
import electricalPanel from "../images/gallery/bathroom/truck-electrical-panel.jpg"
import electrical from "../images/gallery/bathroom/truck-electrical.jpg"

// electrical gallery
import wiring1 from "../images/gallery/electrical/truck-wiring.jpg"
import wiring2 from "../images/gallery/electrical/truck-wiring2.jpg"
import wiring3 from "../images/gallery/electrical/truck-wiring3.jpg"
import wiring4 from "../images/gallery/electrical/truck-wiring4.jpg"
import wiring5 from "../images/gallery/electrical/truck-wiring5.jpg"
import wiring6 from "../images/gallery/electrical/truck-wiring6.jpg"

// plumbing gallery
import freshwater from "../images/gallery/plumbing/plumbing-freshwater.jpg"
import greywater from "../images/gallery/plumbing/plumbing-greywater.jpg"
import waterHeater from "../images/gallery/plumbing/water-heater.jpg"

// construction gallery
import veryBeginning from "../images/gallery/construction/very-beginning.jpg"
import veryBeginning2 from "../images/gallery/construction/very-beginning2.jpg"
import beginnings from "../images/gallery/construction/beginnings.jpg"
import window from "../images/gallery/construction/window.jpg"
import bathroomBeginnings from "../images/gallery/construction/bathroom-beginnings.jpg"
import bathroomBeginnings2 from "../images/gallery/construction/bathroom-beginnings3.jpg"
import bathroomBeginnings3 from "../images/gallery/construction/bathroom-beginnings3.jpg"
import bathroom2 from "../images/gallery/construction/bathroom2.jpg"
import ceiling from "../images/gallery/construction/ceiling.jpg"
import ceiling2 from "../images/gallery/construction/ceiling2.jpg"
import ceiling3 from "../images/gallery/construction/ceiling3.jpg"
import rearDoor from "../images/gallery/construction/rear-door.jpg"
import dadPipe from "../images/gallery/construction/dad-pipe.jpg"
import wallBeginnings from "../images/gallery/construction/wall-beginnings.jpg"
import window2 from "../images/gallery/construction/window2.jpg"
import kitchenBeginnings from "../images/gallery/construction/kitchen-beginnings.jpg"
import kitchenBeginnings2 from "../images/gallery/construction/kitchen-beginnings2-sm.jpg"
import kitchenBeginnings3 from "../images/gallery/construction/kitchen-beginnings3.jpg"
import slideWall from "../images/gallery/construction/slide-wall.jpg"
import slideWall2 from "../images/gallery/construction/slide-wall2.jpg"
import slideWall3 from "../images/gallery/construction/slide-wall3.jpg"
import exteriorUtilities from "../images/gallery/construction/exterior-utilities.jpg"
import exteriorUtilities2 from "../images/gallery/construction/exterior-utilities2.jpg"
import driveReady from "../images/gallery/construction/truck-drive-ready.jpg"
import truckSetup from "../images/gallery/construction/truck-setup.jpg"

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
        "Customers can see the food cooking and fire crackling from the outside serve window.",
        "Be your own commissary! The truck is licensed in Mesa County, Colorado as a full commercial kitchen.",
        "The front serve window wall slides out to add working space. There are plenty of storage space in cabinets, racks, and under the oven.",
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
      images: [
        { original: bathroom, thumbnail: bathroom },
        { original: electrical, thumbnail: electrical },
        { original: electricalPanel, thumbnail: electricalPanel },
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
        { original: truckRearOpen, thumbnail: truckRearOpen },
        { original: truckRearClosed, thumbnail: truckRearClosed },
      ],
    },
    {
      label: "Electrical",
      descriptions: [
        "Fully powered by 110 volts through an inverter system, the kitchen switches seamlessly between either solar, generator or shore power. Depending on the time of year, the bank of four 24-volt batteries can power the kitchen fully for up to 10 hours.",
      ],
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
      images: [
        { original: wiring1, thumbnail: wiring1 },
        { original: wiring2, thumbnail: wiring2 },
        { original: wiring3, thumbnail: wiring3 },
        { original: wiring4, thumbnail: wiring4 },
        { original: wiring5, thumbnail: wiring5 },
        { original: wiring6, thumbnail: wiring6 },
        { original: electricalPanel, thumbnail: electricalPanel },
        { original: electrical, thumbnail: electrical },
      ],
    },
    {
      label: "Plumbing",
      descriptions: [
        "Fresh water is supplied to the three sinks and toilet from either the 55-gallon tank or a shore hook-up for a continuous supply. Hot water is supplied by a propane hot water heater.",
      ],
      infos: [
        { text: "Full plumbing with tanks located underneath truck" },
        { text: "Fresh water tank, 55-gallon" },
        { text: "Gray water tank, 35-gallon" },
        { text: "Black water tank, 35-gallon" },
        { text: "Hot water heater, Atwood 6-gallon propane" },
        { text: "Water pump, Shurflo 110V electrical, 3 gpm" },
      ],
      images: [
        { original: freshwater, thumbnail: freshwater },
        { original: greywater, thumbnail: greywater },
        { original: waterHeater, thumbnail: waterHeater },
      ],
    },
    {
      label: "Construction",
      descriptions: [
        "In the spring of 2015, I began building a new mobile kitchen. I purchased a used 26-foot U-Haul box truck and stripped it to the frame and with a blank canvas built a full commercial kitchen complete with a new and larger wood fired oven. ",
      ],
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
      images: [
        { original: veryBeginning, thumbnail: veryBeginning },
        { original: veryBeginning2, thumbnail: veryBeginning2 },
        { original: beginnings, thumbnail: beginnings },
        { original: bathroom2, thumbnail: bathroom2 },
        { original: bathroomBeginnings, thumbnail: bathroomBeginnings },
        { original: bathroomBeginnings2, thumbnail: bathroomBeginnings2 },
        { original: bathroomBeginnings3, thumbnail: bathroomBeginnings3 },
        { original: ceiling, thumbnail: ceiling },
        { original: ceiling2, thumbnail: ceiling2 },
        { original: rearDoor, thumbnail: rearDoor },
        { original: ceiling3, thumbnail: ceiling3 },
        { original: window, thumbnail: window },
        { original: bathroom2, thumbnail: bathroom2 },
        { original: dadPipe, thumbnail: dadPipe },
        { original: wallBeginnings, thumbnail: wallBeginnings },
        { original: window2, thumbnail: window2 },
        { original: slideWall, thumbnail: slideWall },
        { original: slideWall2, thumbnail: slideWall2 },
        { original: slideWall3, thumbnail: slideWall3 },
        { original: kitchenBeginnings, thumbnail: kitchenBeginnings },
        { original: kitchenBeginnings2, thumbnail: kitchenBeginnings2 },
        { original: kitchenBeginnings3, thumbnail: kitchenBeginnings3 },
        { original: exteriorUtilities, thumbnail: exteriorUtilities },
        { original: exteriorUtilities2, thumbnail: exteriorUtilities2 },
        { original: driveReady, thumbnail: driveReady },
        { original: truckSetup, thumbnail: truckSetup },
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
                <InfoItem
                  section={section}
                  featureText={featureText}
                  shouldShow={shouldShow}
                  toggleMethod={toggleMethod}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
