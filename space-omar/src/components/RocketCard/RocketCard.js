import React from "react";
import "./RocketCard.css";


const RocketCard = ({rocket}) => {
    console.log(rocket)
    return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-data">{rocket.id}</p>
        <div className="card-header-name">
          <p>{rocket.company}</p>
          <h4>{rocket.rocket_name}</h4>
        </div>
      </div>
      <div className="card-image">
        <img src={rocket.flickr_images[0]} alt="#"/>
      </div>
      <div className="card-desc">
        <p className="card-body-desc">First Flight</p> <span> {rocket.first_flight} </span>
        <p className="card-body-desc">Height</p> <span> {rocket.height[0]} </span>
        <p className="card-body-desc">Mass</p>  <span> {rocket.mass[0]} </span>
        <p className="card-body-desc">{rocket.description}</p>
        <p className="card-footer-text"><a href="#">{rocket.wikipedia}</a></p>
      </div>
    </div>
  );
};

export default RocketCard;
