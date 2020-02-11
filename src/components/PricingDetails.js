import React from "react"
import Gallery from "./Gallery"

function PricingDetails(props) {
  const { category, summary, description, expandableInfos, images } = props.item
  return (
    <div
      className="pricing-details"
      style={{ border: "0.5px solid #d3d3d3", borderTop: "0" }}
    >
      <h2
        className="pricing-details-category"
        style={{
          textTransform: "uppercase",
          marginBottom: "var(--sm-margin)",
        }}
      >
        {category}
      </h2>
      <div
        className="pricing-item-summary"
        style={{
          fontSize: "var(--summary-font-size)",
          marginBottom: "var(--med-margin)",
        }}
      >
        {summary}
      </div>
      {images && images.length !== 0 && (
        <Gallery images={images} thumbnailPosition="right" />
      )}
      <div
        className="pricing-item-description"
        style={{
          marginTop: "var(--med-margin)",
          lineHeight: "var(--p-line-height)",
        }}
      >
        {description &&
          description.map((p, i) => {
            return <p key={"p-" + i}>{p.text}</p>
          })}
        {expandableInfos &&
          expandableInfos.map((list, i) => {
            return (
              <div
                className="pri"
                style={{ margin: "var(--med-margin) 0" }}
                key={"info-" + i}
              >
                <h5 style={{ margin: "var(--sm-margin) 0" }}>{list.label}</h5>
                {list.description && (
                  <p
                    style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}
                    key={i}
                  >
                    {list.description}
                  </p>
                )}
                <ul style={{ lineHeight: "var(--ul-line-height)" }}>
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
      </div>
    </div>
  )
}

export default PricingDetails
