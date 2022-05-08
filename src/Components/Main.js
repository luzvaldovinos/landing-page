import React from "react"
import AstronautDarkened from "../images/astronaut-darkened.png"

function Main() {
  return(
    <div className="hero">
      <img
            src={AstronautDarkened}
            className="astronaut-image"
            style={{ height: 480,  width: 1440}}
            />
      <span className="hero-innards">
        <h3 className="hero-h3">Shoot for the Moon</h3>
        <button className="hero-button">Learn More</button>
      </span>
    </div>
  )
}

export default Main
