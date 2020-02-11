import React from "react"
import AddPricingItemButton from "./AddPricingItemButton"
import formatPrice from "../libraries/formatPrice"

function PricingItem({ pkg, i, level, setLevel, isDirty, setDirty }) {
  return (
    <div className="pricing-item">
      <div className="pricing-summary-info">
        <div className="headline">{pkg.headline}</div>
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
