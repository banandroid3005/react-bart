import React from "react";
import "./CnInfo.css";
import { MdPhone, MdEmail } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function CnInfo() {
  return (
    <div className="cninfo-container">
      <div className="cninfo-item">
        <MdPhone />
        <strong>PL:</strong>
        <a href="tel:+48660866047">+48 660 866 047</a>
      </div>
      <div className="cninfo-item">
        <FiGlobe />
        <strong>EN:</strong>
        <a href="tel:+447425931918">+44 7425 931918</a>
      </div>
      <div className="cninfo-item">
        <MdEmail />
        <strong>Email:</strong>
        <a href="mailto:bartpremiumservices@gmail.com">
        bartpremiumservices@gmail.com
        </a>
      </div>
      <div className="cninfo-item">
        <FaWhatsapp />
        <a
          href="https://wa.me/48660866047"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Whatsapp</strong>
        </a>
      </div>
    </div>
  );
}

export default CnInfo;
