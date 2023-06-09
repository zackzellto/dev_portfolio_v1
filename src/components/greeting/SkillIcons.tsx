/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import BootstrapIcon from "../../media/svg/icons/bootstrap_icon.svg";
import CssIcon from "../../media/svg/icons/css_icon.svg";
import DockerIcon from "../../media/svg/icons/docker_icon.svg";
import FigmaIcon from "../../media/svg/icons/figma_icon.svg";
import FlaskIcon from "../../media/svg/icons/flask_icon.svg";
import GimpIcon from "../../media/svg/icons/gimp_icon.svg";
import GitIcon from "../../media/svg/icons/git_icon.svg";
import GoogleIcon from "../../media/svg/icons/google_icon.svg";
import HtmlIcon from "../../media/svg/icons/html_icon.svg";
import JavaScriptIcon from "../../media/svg/icons/javascript_icon.svg";
import MongoDBIcon from "../../media/svg/icons/mongodb_icon.svg";
import NextJSIcon from "../../media/svg/icons/nextjs_icon.svg";
import NodeJSIcon from "../../media/svg/icons/nodejs_icon.svg";
import PhotoshopIcon from "../../media/svg/icons/photoshop_icon.svg";
import PostgreSQLIcon from "../../media/svg/icons/postgresql_icon.svg";
import PythonIcon from "../../media/svg/icons/python_icon.svg";
import ReactIcon from "../../media/svg/icons/react_icon.svg";
import TailwindCSSIcon from "../../media/svg/icons/tailwindcss_icon.svg";
import TypeScriptIcon from "../../media/svg/icons/typescript_icon.svg";
import Image from "next/image";

const SkillIcons = () => {
  return (
    <div className="relative top-[40%] flex flex-col flex-wrap items-center justify-center">
      <div className="px-2 py-2 px-0 py-0 flex items-center">
        <Image
          src={BootstrapIcon}
          alt="Bootstrap Icon"
          className="m-4 m-8 h-40 w-40"
        />
        <Image src={CssIcon} alt="CSS Icon" className="m-4  m-8 h-40 w-40" />
        <Image
          src={DockerIcon}
          alt="Docker Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={FigmaIcon}
          alt="Figma Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={FlaskIcon}
          alt="Flask Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image src={GimpIcon} alt="Gimp Icon" className="m-4  m-8 h-40 w-40" />
      </div>
      <div className="px-2 py-2 px-0 py-0 flex">
        <Image src={GitIcon} alt="Git Icon" className="m-4  m-8 h-40 w-40" />
        {/* <Image
          src={GoogleIcon}
          alt="Google Icon"
          className="m-4  m-8 h-40 w-40"
        /> */}
        <Image
          src={TypeScriptIcon}
          alt="TypeScript Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image src={HtmlIcon} alt="HTML Icon" className="m-4  m-8 h-40 w-40" />
        <Image
          src={JavaScriptIcon}
          alt="JavaScript Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={MongoDBIcon}
          alt="MongoDB Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={NextJSIcon}
          alt="NextJS Icon"
          className="m-4  m-8 h-40 w-40"
        />
      </div>
      <div className="px-2 py-2 px-0 py-0 flex">
        <Image
          src={NodeJSIcon}
          alt="NodeJS Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={PhotoshopIcon}
          alt="Photoshop Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={PostgreSQLIcon}
          alt="PostgreSQL Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={PythonIcon}
          alt="Python Icon"
          className="m-4  m-8 h-40 w-40"
        />

        <Image
          src={ReactIcon}
          alt="React Icon"
          className="m-4  m-8 h-40 w-40"
        />
        <Image
          src={TailwindCSSIcon}
          alt="TailwindCSS Icon"
          className="m-4  m-8 h-40 w-40"
        />
      </div>
    </div>
  );
};

export default SkillIcons;
