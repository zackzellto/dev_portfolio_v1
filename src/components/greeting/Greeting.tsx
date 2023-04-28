import React from "react";
import SkillIcons from "./SkillIcons";
import MainImage from "./Images";
import { type } from "os";
import Link from "next/link";

type ModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const Greeting = () => {
  const [showModal, setShowModal] = React.useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-24">
      <div className="relative flex flex-col items-center font-sans">
        <h1 className="text-shadow-md mb-4 md:text-[64px] text-4xl font-extrabold text-white">
          I'm Zack
        </h1>
        <h4 className="text-shadow-md md:max-w-[47%] md:text-[16px] mb-8 w-full text-center text-lg font-extrabold text-white shadow-md">
          a Software Engineer. I also have a thing for UI/UX.
        </h4>

        <div className="flex flex-col items-center justify-center">
          <SkillIcons />
          <div className="text-shadow-md md:mt-20 md:text-[14px] relative bottom-24 mt-[150px] text-sm font-extrabold text-white shadow-md">
            Interested in working together? Let's talk!
          </div>
          <button
            onClick={openModal}
            className="mt-4 p-4 md:p-8 md:text-sm ml-8 rounded-lg border bg-white text-xs font-extrabold text-[#8A2BE2] shadow-md"
          >
            <Link href={""}>Contact Me</Link>
          </button>
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
