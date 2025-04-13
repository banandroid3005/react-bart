import React from "react";
import "./CnInfo.css";
import { MdPhone, MdEmail } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";

function CnInfo() {
  return (
    <div className="cninfo-container">
      <div className="cninfo-item">
        <FiGlobe />
        <strong>PL:</strong>
        <a href="tel:+48660866047">+48 500 600 800</a>
      </div>
      <div className="cninfo-item">
        <FiGlobe />
        <strong>EN:</strong>
        <a href="tel:+447425931918">+44 7425 931918</a>
      </div>
      <div className="cninfo-item">
        <MdEmail />
        <strong>Email:</strong>
        <a href="mailto:kontakt@bart-premium.pl">kontakt@bart-premium.pl</a>
      </div>
    </div>
  );
}

export default CnInfo;
