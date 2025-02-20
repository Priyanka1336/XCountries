import * as React from "react";
import "./Card.css";

export default function OutlinedCard({ data }) {
  return (
    <div className="box">
      <img src={data.flag} alt={data.name} className="image" />
      <h3>{data.name}</h3>
    </div>
  );
}
