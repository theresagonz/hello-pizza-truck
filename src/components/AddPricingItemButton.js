import React from "react"
import ReactTooltip from "react-tooltip"

export default function AddPricingItemButton({
  myLevel,
  currLevel,
  setLevel,
  isDirty,
  setDirty,
}) {
  const handleAddClick = () => {
    if (!isDirty) setDirty(true)
    setLevel(currLevel + 1)
  }
  const isAdded = myLevel <= currLevel
  const isClickable = myLevel === currLevel + 1
  const buttonsInfo = [
    {
      type: "check",
      className: "check fa fa-check-circle",
      style: { color: "green" },
      handleClick: null,
      msg: "Added!",
    },
    {
      type: "activePlus",
      className: "add fa fa-plus-circle clickable",
      handleClick: handleAddClick,
      style: { cursor: "pointer", transition: "color 0.15s" },
      msg: "Click to add",
    },
    {
      type: "disabledPlus",
      className: "add fa fa-plus-circle disabled",
      handleClick: null,
      style: { opacity: "0.3" },
      msg: "Must add all previous packages first",
    },
  ]

  let whichButton = isAdded
    ? "check" : (
      !isClickable
        ? "disabledPlus"
        : "activePlus"
    )

  const button = buttonsInfo.find(button => button.type === whichButton)
  return (
    <div className="pricing-button" style={{ fontSize: "1.8em" }}>
      <i
        className={button.className}
        style={button.style}
        data-tip={button.msg}
        onClick={button.handleClick}
        data-event-off="click"
        data-effect="solid"
        data-delay-show={300}
      />
      <ReactTooltip place="bottom" />
    </div>
  )
}
