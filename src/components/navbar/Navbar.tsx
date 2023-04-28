import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-black text-white">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/"></Link>
            </div>
          </div>
          <div className="-mr-2 flex phone:hidden">
            <button
              onClick={handleNav}
              type="button"
              className="p-2 inline-flex items-center justify-center rounded-md text-white hover:bg-gray-700 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <AiOutlineClose className="h-6 w-6 block" aria-hidden="true" />
              ) : (
                <AiOutlineMenu className="h-6 w-6 block" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="phone:ml-6 hidden phone:flex phone:items-center">
            <ul className="phone:space-x-4 phone:flex">
              <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
                <Link href="/about">About</Link>
              </li>
              <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
                <Link href="/experience">Experience</Link>
              </li>
              <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
                <Link href="/resume">Résumé</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {nav ? (
        <div className="phone:hidden" id="mobile-menu">
          <ul className="phone:pt-4 phone:pb-3 phone:flex phone:flex-col phone:items-center">
            <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
              <Link href="/about">About</Link>
            </li>
            <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
              <Link href="/experience">Experience</Link>
            </li>
            <li className="text-shadow-md p-2 cursor-pointer duration-500 hover:scale-110 hover:text-[#8A2BE2] hover:transition-all">
              <Link href="/resume">Résumé</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
