import React from "react";
import "./tile.css";

function Tile(props) {
  console.log(props);
  return (
    <>
      <div className="tile-container">
        <img src={props.imageUrl} alt="location" key={props.imageUrl} />
        <div>
          <div className="tile-head">
            <span class="material-symbols-outlined">move_location</span>
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google map</a>
          </div>
          <div className="tile-body">
            <h2>{props.title}</h2>
            <h4>
              {props.startDate} - {props.endDate}
            </h4>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Tile;
