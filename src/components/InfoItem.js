import React from "react"
import Gallery from "./Gallery"
import Fade from 'react-reveal/Fade';

function InfoItem({ section }) {
  const label = section.label
  const sectionId = label.split(" ")[0].toLowerCase()
  const featureText = !label ? { fontSize: "1.5em" } : null

  return (
    <div id={sectionId} className="section-wrapper container-fluid">
      <Fade><h2 className="section-label">{label}</h2></Fade>
      <div className="row">
          <div className="gallery-wrapper col-sm-12 col-md-7 col-lg-8">
            {section.images && <Gallery images={section.images} />}
          </div>
      
      <div className="section-info col-sm-12 col-md-5 col-lg-4">
        {/* {section.label && <h1>{section.label}</h1>} */}
        {section.descriptions && (
          <div className="pMarginTop">
            {section.descriptions.map((description, i) => (
            <Fade>
              <p style={featureText} key={i}>
                {description}
              </p>
            </Fade>
            ))}
            <div className="details-container">


              {section.infos && (
                <div className="section-infos">
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
                            <span>{info.boldText}:</span> {info.text}
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
      </div>
    </div>
  )
}

export default InfoItem
