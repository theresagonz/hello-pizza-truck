import React from "react"
import Gallery from "./Gallery"

function PricingDetails(props) {
  const { headline, summary, description, expandableInfos, images } = props.item
  return (
    <div className="pricing-details">
      <h3>{headline}</h3>
      <div className="price-summary">
        <div className="">{summary}</div>
      </div>
      <div className="expanded-price-info">
        {description &&
          description.map((p, i) => {
            return <p key={"p-" + i}>{p.text}</p>
          })}
        {expandableInfos &&
          expandableInfos.map((list, i) => {
            return (
              <div key={"info-" + i}>
                <h5>{list.label}</h5>
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
        {images && images.length !== 0 && (
          <Gallery images={images} thumbnailPosition="right" />
        )}
      </div>
    </div>
  )
}

export default PricingDetails
