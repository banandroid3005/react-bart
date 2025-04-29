import React from "react";
import "../../App.css";
import { Helmet } from "react-helmet";
import "../../components/HeroSection.css";
import HeroSection from "../HeroSection";
import WhyUs from "../WhyUs";

function Home() {
  return (
    <>
      <Helmet>
        <title>Zamów luksusowy przejazd, transfer lotniskowy lub transport biznesowy</title>
        <meta
          name="description"
          content="Skontaktuj się z nami, aby zamówić usługę taxi Lexus ES300h w Kielcach. Dostępność, informacje o rezerwacjach, oraz kontakt telefoniczny."
        />
      </Helmet>
      <HeroSection />
      <WhyUs />
    </>
  );
}

export default Home;
