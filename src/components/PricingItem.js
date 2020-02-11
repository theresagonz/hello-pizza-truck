import React from "react"
import AddPricingItemButton from "./AddPricingItemButton"
import formatPrice from "../libraries/formatPrice"

function PricingItem({
  pkg,
  i,
  level,
  setLevel,
  isDirty,
  setDirty,
  pricingItemDisplayed,
  changePricingItem,
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
        border: "0.5px solid #d3d3d3",
        borderBottom: "0",
        fontFamily: "var(--accent-font)",
        cursor: "pointer",
      }}
      onClick={e => handleClick(e)}
    >
      <div className="pricing-summary-info">
        <div
          className="pricing-item-category"
          style={{ fontSize: "var(--summary-font-size)", fontWeight: "600" }}
        >
          {pkg.category}
        </div>
        <div>
          <div className="price">{formatPrice(pkg.price)}</div>
          <AddPricingItemButton
            currLevel={level}
            myLevel={i}
            setLevel={setLevel}
            isDirty={isDirty}
            setDirty={setDirty}
          />
        </div>
      </div>
    </div>
  )
}

export default PricingItem
