import React from "react";
import Button from "../Button/Button";

import Lottie from "lottie-react";
import animation from "../../data/lottie-animation.json";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-10 gap-4 lg:gap-6">
      <div className="space-y-6 lg:basis-1/2">
        <h1 className="font-bold text-6xl lg:text-7xl">
          One Step Closer To Your{" "}
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p className="text-lg font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="lg:basis-1/2">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
