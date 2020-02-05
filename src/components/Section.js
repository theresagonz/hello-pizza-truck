import React from "react"
import Gallery from "./Gallery"
import Fade from "react-reveal/Fade"

function Section({ section }) {
  const label = section.label
  const sectionId = label.split(" ")[0].toLowerCase()
  const featureText = !label ? { fontSize: "1.5em" } : null
  console.log('hasLongDesc', section.hasLongDescription)

  if (!section.hasLongDescription) {
    return (
      <div id={sectionId} className="section-wrapper container-fluid">
        <Fade>
          <h2 className="section-label">{label}</h2>
        </Fade>
        <div className="row section-content">
          <div className="gallery-wrapper col-sm-12 col-md-6 col-lg-5">
            {section.images && <Gallery images={section.images} />}
          </div>

          <div className="section-info col-sm-12 col-md-4 col-lg-4">
            {/* {section.label && <h1>{section.label}</h1>} */}
            {section.descriptions && (
              <div className="section-descriptions">
                {section.descriptions.map((description, i) => (
                  <Fade>
                    <p style={featureText} key={i}>
                      {description}
                    </p>
                  </Fade>
                ))}
                {/* <div className="section-details-container"> */}
                  {section.infos && (
                    <div className="section-details col-sm col-md col-lg">
                      <ul>
                      <Fade>
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
                        </Fade>
                      </ul>
                    </div>
                  )}
                {/* </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div id={sectionId} className="section-wrapper container-fluid">
        <Fade>
          <h2 className="section-label">{label}</h2>
        </Fade>
        <div className="row section-content">
          <div className="gallery-wrapper col-sm-12 col-md-7 col-lg-6">
            {section.images && <Gallery images={section.images} />}
          </div>

          <div className="section-info col-sm-12 col-md-5 col-lg-6">
            {/* {section.label && <h1>{section.label}</h1>} */}
            {section.descriptions && (
              <div className="section-descriptions">
                {section.descriptions.map((description, i) => (
                  <Fade>
                    <p style={featureText} key={i}>
                      {description}
                    </p>
                  </Fade>
                ))}
              </div>
            )}
          </div>
          {/* <div className="section-details-container"> */}
            {section.infos && (
              <div className="section-details">
                <ul>
                <Fade>
                  {section.infos.map((info, j) => {
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
                  </Fade>
                </ul>
              </div>
            )}
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default Section
