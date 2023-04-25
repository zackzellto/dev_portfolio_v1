import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="md:mt-128">
      <div className="xs:hidden md:fixed md:left-128 md:h-[50%] md:w-[2px] md:bg-white ">
        <AiFillGithub
          className="fixed left-106 top-[61%] h-48 w-48 text-white md:mt-64"
          size={20}
        />
        <AiFillLinkedin
          className="fixed left-106 top-[66%] h-48 w-48 text-white md:mt-64"
          size={20}
        />
        <AiFillTwitterCircle
          className="fixed left-106 top-[71%] h-48 w-48 text-white md:mt-64"
          size={20}
        />
        <FaDiscord className="fixed left-106 top-[76%] h-48 w-48 text-white md:mt-64" />
      </div>

      <div className="xs:hidden md:fixed md:right-128 md:h-[50%] md:w-[2px] md:bg-white">
        <div className="fixed right-114 top-[61%] h-48 w-48 rotate-90 text-lg text-[#8A2BE2] md:mt-64">
          zackzelltodev@gmail.com
        </div>
        ;
      </div>
    </div>
  );
};

export default SocialLinks;
