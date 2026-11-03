import React from "react";
import Animated from "../components/Animated";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center
         bg-[url('/assets/heroBanner.png')] bg-cover bg-center bg-no-repeat px-4 pt-20">
      <Animated y={-20} delay={0.2}>
        <p className="text-orange-600">WHERE FLAVOR MEETS ELEGANCE</p>
      </Animated>

      <Animated>
        <h1 className="text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5 font-urbanist text-balance">
            Crafted for unforgetable dining moments
        </h1>
      </Animated>

      <Animated delay={0.2}>
        <p className="text-orange-600">WHERE FLAVOUR MEETS ELEGANCE</p>
      </Animated>
    

    </section>
  );
};

export default HeroSection;
