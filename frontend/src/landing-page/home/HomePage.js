import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Eduction from "./Eduction";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Eduction />
      <OpenAccount />
    </>
  );
};

export default HomePage;
