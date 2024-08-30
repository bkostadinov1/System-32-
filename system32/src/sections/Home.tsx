import React, { useEffect, useState } from "react";

// Images
import Logo from "../assets/images/Logo.png";
import Hero from "../assets/images/Hero.png";

// Icons
import Particles from "../assets/icons/particles.png";

const Home = () => {
  return (
    <div className="relative overflow-hidden flex justify-center items-center w-full bg-root-background min-h-full ">
      <img
        className="absolute max-md:hidden h-3/4 top-1/3 -left-[35rem] object-cover"
        src={Hero}
      />
      <img
        className="absolute max-md:hidden h-3/4 top-1/3 -right-[35rem] object-cover"
        src={Hero}
      />
      <div className="flex relative flex-col md:p-4">
        <img
          className="absolute max-md:hidden -top-12 -left-9 w-24 object-cover"
          src={Particles}
        />
        <img
          className="absolute max-md:hidden -bottom-14 -right-5 w-24 object-cover"
          src={Particles}
        />
        <div className="flex flex-col max-md:space-y-3 justify-center items-center md:rounded-xl bg-darkBackground w-full max-md:h-screen md:w-[50rem] z-50">
          <div className="flex max-md:flex-col-reverse space-x-7 justify-center items-center">
            <div className="flex text-center space-y-2 flex-col font-amsterdam text-white">
              <p className="text-7xl tracking-widest animate-pulse">System32</p>
              <p className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-error to-success">
                You can't without us!
              </p>
            </div>
            <img src={Logo} className="w-64" />
          </div>
          <div className="w-2/3 bg-gray-400 h-0.5 mb-3"></div>
          <div className="w-will text-white text-xl text-wrap leading-loose p-8 shadow-xl rounded-lg z-50">
            <h1 className="text-xl text-center font-bold text-error mb-2">
              Team System32
            </h1>
            <p>
              Dive into the dynamic world of "Az moga tuk I sega" with Team
              System32! As we compete in this thrilling challenge, our unity and
              passion drive us to break new ground and redefine limits. Stay
              tuned for a journey filled with innovation and exceptional talent!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
