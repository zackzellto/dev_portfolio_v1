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
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative bottom-96 flex flex-col items-center font-sans">
        <h1 className="text-shadow-md mb-4 text-[48px] font-extrabold text-white">
          I'm Zack
        </h1>
        <h4 className="text-shadow-md mb-8 max-w-[47%] text-center text-[16px] font-extrabold text-white shadow-md">
          a Software Engineer. I also have a thing for UI/UX.
        </h4>
        <MainImage />
        <div className="mt-10 flex flex-col items-center justify-center">
          <SkillIcons />
          <div className="text-shadow-md relative bottom-24 mt-[150px] text-[14px] font-extrabold text-white shadow-md">
            Interested in working together? Let's talk!
          </div>
          <button
            onClick={openModal}
            className="mt-4 ml-8 rounded-lg border bg-white p-8 text-sm font-extrabold text-[#8A2BE2] shadow-md"
          >
            <Link href={""}>Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
