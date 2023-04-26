import React from "react";
import SkillIcons from "./SkillIcons";

const Greeting = () => {
  return (
    <div className="flex">
      <h1 className="text-shadow-md absolute left-[22%] top-[20%] font-extrabold text-white md:text-8xl">
        I'm Zack
      </h1>
      <h4 className="text-shadow-md absolute left-[15%] top-[28%] font-extrabold text-white md:text-2xl">
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
