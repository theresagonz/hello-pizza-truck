import React from "react"
import Gallery from "./Gallery"

function PricingDetails(props) {
  const { category, summary, description, expandableInfos, images } = props.item
  return (
    <div className="pricing-details">
      <h2
        className="pricing-details-category"
        style={{
          textTransform: "uppercase",
          marginBottom: "var(--tiny)",
        }}
      >
        {category}
      </h2>
      <div
        className="pricing-item-summary"
        style={{
          fontSize: "var(--summary-font-size)",
          marginBottom: "var(--medium)",
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
          marginTop: "var(--medium)",
          lineHeight: "var(--p-line-height)",
        }}
      >
        {description &&
          description.map((p, i) => {
            return (
              <p
                className="pricing-item-intro"
                style={{ fontWeight: "200", fontSize: "var(--small-med" }}
                key={"p-" + i}
              >
                {p.text}
              </p>
            )
          })}
        {expandableInfos &&
          expandableInfos.map((list, i) => {
            return (
              <div
                className="pri"
                style={{ margin: "var(--medium) 0" }}
                key={"info-" + i}
              >
                <h5 style={{ margin: "var(--tiny) 0" }}>{list.label}</h5>
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
