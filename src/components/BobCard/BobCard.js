import React from "react";
import "./BobCard.css";

const BobCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img height="150" width="200" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default BobCard;