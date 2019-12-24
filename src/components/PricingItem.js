import React, { useState } from "react"
import ImageGallery from "react-image-gallery"
import formatPrice from "../libraries/formatPrice"

function PricingItem({ pkg, i, level, setLevel, isDirty, setDirty }) {
  const isRequired = pkg.isRequired ? " required" : ""
  const isSelected = level >= i ? " selected" : " not-selected"
  const isExpanded = pkg.isExpanded ? "" : " hidden"

  return (
    <div
      className={"option-container" + isSelected + isRequired}
      onClick={() => pkg.toggleExpand(!pkg.isExpanded)}
    >
      <div className={"option"}>
        <h2 className="">
          {pkg.headline}{" "}
          {pkg.isRequired ? (
            <span className="check-mark required">&#10003;</span>
          ) : i <= level ? (
            <span
              className={"check-mark add-remove-button remove"}
              onClick={e => {
                e.stopPropagation()
                setLevel(i - 1)
              }}
            >
              &#10003;
            </span>
          ) : (
            <span
              className={"add-remove-button add"}
              onClick={e => {
                e.stopPropagation()
                if (!isDirty) setDirty(true)
                setLevel(i)
              }}
            >
              +
            </span>
          )}
        </h2>
        <div className="price-summary">
          <p className="">{pkg.summary}</p>
          <h4>{formatPrice(pkg.price)}</h4>
        </div>
        <div className={isExpanded}>
          {pkg.descriptions &&
            pkg.descriptions.map((p, i) => {
              return <p>{p.text}</p>
            })}
          {pkg.expandableInfos &&
            pkg.expandableInfos.map((list, i) => {
              return (
                <div>
                  <h4>{list.category}</h4>
                  <ul>
                    {list.infos.map((info, i) => (
                      <li key={i}>{info.text}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          {pkg.images && pkg.images.length !== 0 && (
            <ImageGallery items={pkg.images} thumbnailPosition="right" />
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingItem
