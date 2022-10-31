import React from "react";
import logorza from "../assets/logorza.png";
export default function Card({ image, series, title }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="imagem logo" />
      </div>

      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
          <span className="card-top">RAZOR</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            <img src={logorza} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
