import Link from "next/link";
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
          className="fixed right-16 top-[64%] h-32 w-32 text-white duration-500 hover:scale-110 hover:transition-all md:left-106 md:top-[61%] md:mt-64 md:h-48 md:w-48 md:cursor-pointer"
          size={20}
        />
        <AiFillLinkedin
          className="fixed right-16 top-[70%] h-32 w-32 text-white duration-500 hover:scale-110 hover:text-[#0077b5] hover:transition-all md:left-106 md:top-[66%] md:mt-64 md:h-48 md:w-48 md:cursor-pointer"
          size={20}
        />
        <AiFillTwitterCircle
          className="fixed right-16 top-[76%] h-32 w-32 text-white duration-500 hover:scale-110 hover:text-[#1DA1F2] hover:transition-all md:left-106 md:top-[71%] md:mt-64 md:h-48 md:w-48 md:cursor-pointer"
          size={20}
        />
        <FaDiscord className="fixed right-16 top-[82%] h-32 w-32 text-white duration-500 hover:scale-110 hover:text-[#7289DA] hover:transition-all md:left-106 md:top-[76%] md:mt-64 md:h-48 md:w-48 md:cursor-pointer" />
      </div>

      <div className="md:fixed md:right-128 md:h-[50%] md:w-[2px] md:bg-white">
        <div className="xs:hidden md:fixed md:right-114 md:top-[61%] md:mt-64 md:h-48 md:w-48 md:rotate-90 md:text-lg md:text-[#8A2BE2]">
          <Link href={""}>zackzelltodev@gmail.com</Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
