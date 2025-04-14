import React from "react";
import "./AirPort.css";

import chopin from "../images/chopin.webp";
import krakow from "../images/krakow.webp";
import katowice from "../images/katowice.webp";
import modlin from "../images/modlin.webp";
import lublin from "../images/lublin.webp";
import bydgosz from "../images/bydgosz.webp";
import szczecin from "../images/szczecin.webp";
import lodz from "../images/lodz.webp";
import rzeszow from "../images/rzeszow.webp";
import gdansk from "../images/gdansk.webp";
import wroclaw from "../images/wroclaw.webp";
import poznan from "../images/poznan.webp";

function AirPort() {
  return (
    <section className="airport-section">
      <h2>Odbiór z Lotnisk</h2>
      <p className="airport-description">
        Oferuję odbiór i transport z największych lotnisk w Polsce.
      </p>
      <div className="airport-gallery">
        <div className="airport-item">
          <img src={chopin} alt="Lotnisko Chopina" />
          <p>Chopin (Warszawa)</p>
        </div>
        <div className="airport-item">
          <img src={krakow} alt="Lotnisko Kraków" />
          <p>Kraków</p>
        </div>
        <div className="airport-item">
          <img src={katowice} alt="Lotnisko Katowice" />
          <p>Katowice</p>
        </div>
        <div className="airport-item">
          <img src={lublin} alt="Lotnisko Lublin" />
          <p>Lublin</p>
        </div>
        <div className="airport-item">
          <img src={szczecin} alt="Lotnisko Szczecin" />
          <p>Szczecin</p>
        </div>
        <div className="airport-item">
          <img src={rzeszow} alt="Lotnisko Rzeszów" />
          <p>Rzeszów</p>
        </div>
        <div className="airport-item">
          <img src={gdansk} alt="Lotnisko Gdańsk" />
          <p>Gdańsk</p>
        </div>
        <div className="airport-item">
          <img src={wroclaw} alt="Lotnisko Wrocław" />
          <p>Wrocław</p>
        </div>
      </div>
      <p className="airport-note">
        Oferuję także transport z mniejszych lotnisk na życzenie klienta –
        zadzwoń, by ustalić szczegóły.
      </p>
    </section>
  );
}

export default AirPort;
