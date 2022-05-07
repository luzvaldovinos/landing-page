import React from "react"
import RocketIcon from "../images/rocket-icon.svg"

function Navbar() {
  return(
    <nav>
      <span className="nav-menu">
        <span className="logo-wordmark">
          <img
            src={RocketIcon}
            className="rocket-icon"
            />
          <p>Apollo</p>
        </span>
        <span className="nav-innards">
          <p>Schedule</p>
          <p>About Us</p>
          <p>Contact</p>
        </span>
      </span>
    </nav>
  )
}

export default Navbar
