import React from "react"

function Cards(props) {
  let completed
  if (props.item.completed === true) {
    completed = <button className="grey-button">Mark as Done</button>
  } else if (props.item.completed === false) {
    completed = <button className="blue-button">Done</button>
  };


  return(
    <div className="card">
      <div className="card-title">
        <span>{props.item.title}</span>
      {completed && <div className="card-button-grey">{completed}</div>}
      </div>
    </div>
  )
}

export default Cards
