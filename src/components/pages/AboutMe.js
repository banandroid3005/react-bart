import React from "react";
import "./AboutMe.css";
import { Helmet } from "react-helmet";

function AboutMe() {
  return (
    <>
      <div className="about-me-container">
        <Helmet>
          <title>O mnie – Taxi Premium Lexus ES300h Kielce</title>
          <meta
            name="description"
            content="Poznaj właściciela i kierowcę usługi premium taxi Lexus ES300h w Kielcach. Dowiedz się, dlaczego warto skorzystać z naszej oferty."
          />
        </Helmet>
        <div className="about-me-photo">
          <img
            src={require("../../images/face.jpg")}
            alt="moje zdjecie"
            loading="lazy"
          />
        </div>
        <div className="about-me-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut erat
          quis augue imperdiet molestie. Fusce quis orci mattis, fermentum elit
          at, lacinia erat. Mauris purus nulla, malesuada eget tempus finibus,
          sollicitudin sit amet elit. Proin semper tincidunt leo sit amet
          fermentum. Donec consequat turpis sit amet eleifend tempus. Nam
          convallis nisi vitae magna porttitor dapibus. Morbi commodo turpis
          vitae.
        </div>
      </div>
    </>
  );
}

export default AboutMe;
