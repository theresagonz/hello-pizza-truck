import React from "react"
import ReactTooltip from "react-tooltip"

export default function AddPricingItemButton({
  myLevel,
  currLevel,
  setLevel,
  isDirty,
  setDirtyTrue,
}) {
  const handleAddClick = () => {
    if (!isDirty) setDirtyTrue()
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
      cursor: "default",
      msg: "Added!",
    },
    {
      type: "activePlus",
      className: "add fa fa-plus-circle clickable",
      handleClick: handleAddClick,
      style: { cursor: "pointer", transition: "color 0.25s, fontSize 0.25s" },
      cursor: "pointer",
      msg: "Click to add",
    },
    {
      type: "disabledPlus",
      className: "add fa fa-plus-circle disabled",
      handleClick: null,
      style: { opacity: "0.4", cursor: "default" },
      cursor: "default",
      msg: "Please add previous options first",
    },
  ]

  let whichButton = isAdded
    ? "check"
    : !isClickable
    ? "disabledPlus"
    : "activePlus"

  const button = buttonsInfo.find(button => button.type === whichButton)
  return (
    <div
      className="pricing-button"
      style={{ fontSize: "1.8em", cursor: button.cursor, marginLeft: "4%" }}
    >
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
