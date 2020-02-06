import React, { useState } from "react"
import Gallery from "./Gallery"
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
        <div className="option-label">
          <h2>{pkg.headline}</h2>
          {pkg.isRequired ? (
            <div className="check-mark required-checkbox">&#10003;</div>
          ) : i <= level ? (
            <div
              className={"check-mark add-remove-button remove"}
              onClick={e => {
                e.stopPropagation()
                setLevel(i - 1)
              }}
            >
              &#10003;
            </div>
          ) : (
            <div
              className={"add-remove-button add"}
              onClick={e => {
                e.stopPropagation()
                if (!isDirty) setDirty(true)
                setLevel(i)
              }}
            >
              +
            </div>
          )}
        </div>
        <div className="price-summary">
          <p className="">{pkg.summary}</p>
        </div>
        <h4 className="price">{formatPrice(pkg.price)}</h4>
        <div className={"expanded-price-info" + isExpanded}>
          <hr></hr>
          {pkg.description &&
            pkg.description.map((p, i) => {
              return <p key={"p-" + i}>{p.text}</p>
            })}
          {pkg.expandableInfos &&
            pkg.expandableInfos.map((list, i) => {
              return (
                <div key={"info-" + i}>
                  <h4>{list.label}</h4>
                  {list.description && (
                    <p
                      style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}
                      key={i}
                    >
                      {list.description}
                    </p>
                  )}
                  <ul>
                    {list.infos.map((info, i) => {
                      const subInfos =
                        info.subInfos && info.subInfos.length
                          ? info.subInfos
                          : null
                      return subInfos ? (
                        <div key={info.label + "-" + i}>
                          <li>{info.text || info.jsxWithLink}</li>
                          <ul>
                            {subInfos.map((subInfo, k) => (
                              <li key={"subInfo-" + i + "-" + k}>
                                {subInfo.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <li key={i}>{info.text || info.jsxWithLink}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          {pkg.images && pkg.images.length !== 0 && (
            <Gallery images={pkg.images} thumbnailPosition="right" />
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingItem
