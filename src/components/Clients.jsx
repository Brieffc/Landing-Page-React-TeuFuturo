import React from "react";
import clients1 from "../assets/adobe.png";
import clients2 from "../assets/intel.png";
import clients3 from "../assets/pny.png";
import clients4 from "../assets/asus.png";

export default function Clients() {
  const data = [clients4, clients1, clients3, clients2];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
