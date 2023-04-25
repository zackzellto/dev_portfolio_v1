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
      <div className="hidden cursor-pointer items-center justify-center bg-[#0C0216] px-8 py-8 text-[22px] text-white md:flex">
        <ul className="hidden md:flex ">
          <li className="p-8 hover:text-[#8A2BE2]">
            <Link href="/about">About</Link>
          </li>
          <li className="p-8 hover:text-[#8A2BE2]">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="p-8 hover:text-[#8A2BE2]">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="p-8 hover:text-[#8A2BE2]">
            <Link href="/resume">Résumé</Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#0C0216] px-32 py-32">
        <button
          onClick={handleNav}
          className="fixed left-[87%] cursor-pointer bg-[#0C0216]  text-white md:hidden"
        >
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </button>
      </div>
      <div
        className={
          !nav
            ? " absolute left-[67%] top-auto block w-[30%] bg-[#0C0216] text-white"
            : "fixed left-[100%]"
        }
      >
        <ul className="flex flex-col items-center px-16 md:hidden">
          <li className="p-8 hover:text-[#8A2BE2] ">
            <Link href="/about">About</Link>
          </li>
          <li className="p-8 hover:text-[#8A2BE2]">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="p-8 hover:text-[#8A2BE2]">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="p-8 hover:text-[#8A2BE2] ">
            <Link href="/resume">Résumé</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
