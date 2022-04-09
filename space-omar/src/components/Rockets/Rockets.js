import React, { useEffect, useState } from "react";
import RocketCard from "../RocketCard/RocketCard";
import { getRockets } from "../../services/spacex";
import "./Rockets.css";

const Rockets = () => {
  const [rocketsList, setRocketsList] = useState([]);

  useEffect(() => {
    const getRocketsList = async () => {
      const rockets = await getRockets();
      setRocketsList(rockets);
    };
    getRocketsList();
  }, []);

  return (
    <>
      <h1 className="title">SPACE X TRADING CARD GAME</h1>
      <div className="cards-container">
        {rocketsList.map((rocket, index) => (
rocket? <RocketCard key={index} rocket={rocket} /> : <></>
        ))}
      </div>
    </>
  );
};

export default Rockets;
