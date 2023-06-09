import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="md:flex hidden items-center justify-center bg-[#000000] px-8 py-8 text-[22px] text-white">
        <ul className="md:flex hidden ">
          <li className="text-shadow-md cursor-pointer p-8 duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
            <Link href="/about">About</Link>
          </li>
          <li className="text-shadow-md cursor-pointer p-8 duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="text-shadow-md cursor-pointer p-8 duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="text-shadow-md cursor-pointer p-8 duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
            <Link href="/resume">Résumé</Link>
          </li>
        </ul>
      </div>
      {/* <div className="bg-[#000000] px-32 py-32 md:hidden">
        <button
          onClick={handleNav}
          className="fixed left-[87%] z-10 cursor-pointer bg-[#000000]  text-white md:hidden"
        >
          {nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
      </div>
      <div
        className={
          !nav
            ? " absolute left-[62%] top-auto block w-[30%] bg-[#000000] text-white"
            : "fixed left-[100%]"
        }
      >
        <ul className="flex flex-col items-center px-16 md:hidden">
          <li className="text-shadow-md p-8 hover:text-[#8A2BE2] ">
            <Link href="/about">About</Link>
          </li>
          <li className="text-shadow-md p-8 hover:text-[#8A2BE2]">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="text-shadow-md p-8 hover:text-[#8A2BE2]">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="text-shadow-md p-8 hover:text-[#8A2BE2] ">
            <Link href="/resume">Résumé</Link>
          </li>

          <li className="text-shadow-md p-8 hover:text-[#8A2BE2]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
