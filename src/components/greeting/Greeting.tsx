import React from "react";
import SkillIcons from "./SkillIcons";

const Greeting = () => {
  return (
    <div className="flex font-sans">
      <h1 className="text-shadow-md absolute left-[22%] top-[20%] text-3xl font-extrabold text-white md:left-[22%] md:top-[20%] md:text-7xl">
        I'm Zack
      </h1>
      <h4 className="absolute left-[15%] top-[28%] text-sm font-extrabold text-white shadow-md md:left-[15%] md:top-[28%] md:text-2xl">
        a Software engineer. I also have a thing for UI/UX.
      </h4>
      <div>
        <div className="flex flex-col items-center justify-center">
          <SkillIcons />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
