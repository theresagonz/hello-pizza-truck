import React from "react"
import AddPricingItemButton from "./AddPricingItemButton"
import formatPrice from "../libraries/formatPrice"

function PricingItem({
  pkg,
  i,
  level,
  setLevel,
  isDirty,
  pricingItemDisplayed,
  changePricingItem,
  handleResetClick,
  setDirtyTrue,
}) {
  const handleClick = e => {
    e.stopPropagation()
    changePricingItem(pkg.reference)
  }

  const active = pricingItemDisplayed === pkg.reference ? " active" : ""

  return (
    <div
      className={"pricing-item" + active}
      style={{
        fontFamily: "var(--accent-font)",
        cursor: "pointer",
      }}
      onClick={e => handleClick(e)}
    >
      <div className="pricing-item-info">
        <div className="pricing-item-category">{pkg.category}</div>
        <div className="price">{formatPrice(pkg.price)}</div>
      </div>
      <div
        className="reset-btn-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {i === 0 && isDirty ? (
          <button
            className="btn btn-dark"
            onClick={handleResetClick}
            style={{ height: "37px", marginRight: "0" }}
          >
            Reset
          </button>
        ) : (
          <AddPricingItemButton
            currLevel={level}
            myLevel={i}
            setLevel={setLevel}
            isDirty={isDirty}
            setDirtyTrue={setDirtyTrue}
          />
        )}
      </div>
    </div>
  )
}

export default PricingItem
