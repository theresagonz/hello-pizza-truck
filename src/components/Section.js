import React from "react"
import Gallery from "./Gallery"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Section({ section }) {
  const label = section.label
  const sectionId = label.split(" ")[0].toLowerCase()
  const featureText = !label ? { fontSize: "1.5em" } : null
  const columnRelWidth = section.hasLongDescription ? "5" : "4"

  return (
    <div id={sectionId} className="section-wrapper container-fluid">
      <Fade>
        <h2 className="section-heading">{label}</h2>
      </Fade>
      <div className="row section-content">
        <Fade>
          <div className="gallery-wrapper col-sm-12 col-md-6 col-lg-7">
            {section.images && <Gallery images={section.images} />}
          </div>
        </Fade>
        <div
          className={`section-info col-sm-12 col-md-${columnRelWidth} col-lg-${columnRelWidth}`}
        >
          {/* {section.label && <h1>{section.label}</h1>} */}
          {section.description && (
            <div
              className="section-description"
              style={{ lineHeight: "var(--p-line-height)", fontSize: "var(--small-med)" }}
            >
              {section.description.map((description, i) => (
                <Fade>
                  <p style={featureText} key={i}>
                    {description}
                  </p>
                </Fade>
              ))}
            </div>
          )}
        </div>
        <Fade>
          {section.infos && (
            <div className="section-details shadow">
              <h4
                className="section-details-label"
                style={{ textAlign: 'center' }}
              >
                Details
              </h4>
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
        </Fade>
      </div>
      {/* <div class="subsection-nav-links">
        <Fade>
          <div className="down-arrow">
            <AnchorLink className="nav-link" href={section.nextSubsectionLink}>
              <i className="fa fa-chevron-down" /> next
            </AnchorLink>
          </div>
          <div className="up-arrow">
            <AnchorLink className="nav-link" href="#home">
              <i className="fa fa-chevron-up" /> top
            </AnchorLink>
          </div>
        </Fade>
      </div> */}
    </div>
  )
}

export default Section
