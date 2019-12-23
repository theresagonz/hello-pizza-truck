import React from "react"
import ImageGallery from "react-image-gallery"

function InfoItem({section, featureText, shouldShow, toggleMethod}) {
  return (
    <div className="sectionLabelWrapper">
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
          <div className="detailsContainer">
            {section.infos && (
              <div>
                <h5 className="sectionLabel">
                  <span
                    className="pointer"
                    onClick={() => toggleMethod(!shouldShow)}
                  >
                    {shouldShow ? "- Collapse" : "+ More info"}
                  </span>
                  {/* {shouldShow ? " Collapse" : " More info"} */}
                </h5>
                <ul>
                  {section.infos &&
                    section.infos.map((info, j) => {
                      const subInfos =
                        info.subInfos && info.subInfos.length
                          ? info.subInfos
                          : null
                      return subInfos ? (
                        <div
                          className={
                            "toggleShow" + (!shouldShow ? " show" : null)
                          }
                          key={section.label + "-" + j}
                        >
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
                        <li
                          key={section.label + "-" + j}
                          className={
                            "toggleShow" + (!shouldShow ? " show" : null)
                          }
                        >
                          <strong>{info.boldText}:</strong> {info.text}
                        </li>
                      ) : (
                        <li
                          key={section.label + "-" + j}
                          className={
                            "toggleShow" + (!shouldShow ? " show" : null)
                          }
                        >
                          {info.text}
                        </li>
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
