import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="mt-96">
      <div className="fixed left-24 top-[28px] h-[70%] w-[1px] bg-white">
        <AiFillGithub
          className="fixed left-[13px] top-[70%] mt-32 h-24 w-24 cursor-pointer text-white duration-500 hover:scale-110 hover:transition-all"
          size={20}
        />
        <AiFillLinkedin
          className="fixed left-[13px] top-[75%] mt-32 h-24 w-24 cursor-pointer text-white duration-500 hover:scale-110 hover:text-[#0077b5] hover:transition-all"
          size={20}
        />
        <AiFillTwitterCircle
          className="fixed left-[13px] top-[80.5%] mt-32 h-24 w-24 cursor-pointer text-white duration-500 hover:scale-110 hover:text-[#1DA1F2] hover:transition-all"
          size={20}
        />
        <FaDiscord className="fixed left-[13px] top-[85%] mt-[34px] h-24 w-24 cursor-pointer text-white duration-500 hover:scale-110 hover:text-[#7289DA] hover:transition-all" />
        <AiFillMail className="fixed left-[13px] top-[90%] mt-32 h-24 w-24 cursor-pointer text-white duration-500 hover:scale-110 hover:text-[#b57ceb] hover:transition-all" />
        <div className="fixed left-24 h-[50%] w-[1px] bg-white"></div>
      </div>

      <div className="fixed left-24 hidden h-[10%] w-[1px] bg-white">
        <div className="fixed right-14 top-[57%] mt-64 h-48 w-48 rotate-90 text-sm text-[#b57ceb]">
          <Link href={""}>zackzelltodev@gmail.com</Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
