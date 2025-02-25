import * as React from "react";
import "./Card.css";

export default function OutlinedCard({ data }) {
  return (
    <div className="countryCard">
      <img src={data.png} alt={data.png} className="image" />
      <h3>{data.common}</h3>
    </div>
  );
}
