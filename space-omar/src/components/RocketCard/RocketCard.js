import React from "react";
import "./RocketCard.css";


const RocketCard = ({rocket}) => {
    console.log(rocket)
    return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-data">ID: {rocket.id}</p>
        <div className="card-header-name">
          <p>{rocket.company}</p>
          <h2>{rocket.rocket_name}</h2>
        </div>
      </div>
      <div className="card-image">
        <img src={rocket.flickr_images[0]} alt="#"/>
      </div>
      <div className="card-desc">
        <div>
        <span><p className="card-body-desc"><b>First Flight: </b>{rocket.first_flight}</p> <p className="succ">{rocket.success_rate_pct}% SUCC</p></span>
        <p className="card-body-desc-top"><b>Height: </b> {rocket.height.meters} M</p>
        <p className="card-body-desc"><b>Mass: </b> {rocket.mass.kg} KG</p>
        <p className="card-body-desc">{rocket.description}</p>
        </div>
        <p className="card-footer-text">- SPACEX-API - <a href={rocket.wikipedia}> {rocket.rocket_name}</a></p>
      </div>
    </div>
  );
};

export default RocketCard;
