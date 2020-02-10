import React, { useState } from "react"
import Gallery from "./Gallery"
import formatPrice from "../libraries/formatPrice"

function PricingItem({ pkg, i, level, setLevel, isDirty, setDirty }) {
  const isRequired = pkg.isRequired ? " required" : ""
  const isSelected = level >= i ? " selected" : " not-selected"

  return (
    <div className="pricing-item row">
      <div className="pricing-summary">
        <div className="headline">{pkg.headline}</div>
        <div className="price">{formatPrice(pkg.price)}</div>
        <div className="col-xs-1">
          {(isRequired || isSelected) && <i className="fa fa-check-circle" />}
          {!isSelected && <i className="fa fa-plus-circle" />}
        </div>
      </div>
    </div>
  )
}

export default PricingItem
