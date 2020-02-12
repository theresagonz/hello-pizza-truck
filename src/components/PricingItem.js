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
        fontFamily: "var(--accent-font)",
        cursor: "pointer",
      }}
      onClick={e => handleClick(e)}
    >
    <div className="pricing-item-info">
      <div className="pricing-item-category">{pkg.category}</div>
      <div className="price">{formatPrice(pkg.price)}</div>
      </div>
      <AddPricingItemButton
        currLevel={level}
        myLevel={i}
        setLevel={setLevel}
        isDirty={isDirty}
        setDirty={setDirty}
      />
    </div>
  )
}

export default PricingItem
