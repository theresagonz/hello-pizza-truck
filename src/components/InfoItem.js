import React from "react"
import ImageGallery from "react-image-gallery"

function InfoItem({ section, toggleInfoMap }) {
  const label = section.label
  const featureText = !label ? { fontSize: "1.5em" } : null
  // const shouldShow = toggleInfoMap && toggleInfoMap[label] && toggleInfoMap[label].shouldShow
  // const toggleMethod = toggleInfoMap && toggleInfoMap[label] && toggleInfoMap[label].toggleMethod

  return (
    <div className="section-label-wrapper">
      <div className="gallery">
        {section.images && (
          <ImageGallery items={section.images} thumbnailPosition="right" />
        )}
      </div>
      {section.label && <h1>{section.label}</h1>}
      {section.descriptions && (
        <div className="pMarginTop">
          {section.descriptions.map((description, i) => (
            <p style={featureText} key={i}>
              {description}
            </p>
          ))}
          <div className="details-container">
            {section.infos && (
              <div>
                <h5 className="white-text">Details</h5>
                <ul>
                  {section.infos &&
                    section.infos.map((info, j) => {
                      const subInfos =
                        info.subInfos && info.subInfos.length
                          ? info.subInfos
                          : null
                      return subInfos ? (
                        <div key={section.label + "-" + j}>
                          <li>{info.text || info.jsxWithLink}</li>
                          <ul>
                            {subInfos.map((subInfo, k) => (
                              <li key={"subInfo-" + j + "-" + k}>
                                {subInfo.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : info.boldText ? (
                        <li key={section.label + "-" + j}>
                          <span className="white-text">{info.boldText}:</span> {info.text}
                        </li>
                      ) : (
                        <li key={section.label + "-" + j}>{info.text}</li>
                      )
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default InfoItem
