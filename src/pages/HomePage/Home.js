import React from "react";
import HeroSection from "../HeroSection";
import { homeObj1 } from "./Data";
const Home = () => {
  return (
    <>
      <HeroSection {...homeObj1} />
    </>
  );
};

export default Home;
