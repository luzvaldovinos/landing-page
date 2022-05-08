import React from "react"

function Progress() {
  return(
    <div className="progress-section">
      <p className="progress-p">40% Done</p>
      {/* container */}
      <div className="progress-container">
      {/* skill */}
        <div className="progress-amt"></div>
      </div>

    </div>
  )
}

export default Progress
