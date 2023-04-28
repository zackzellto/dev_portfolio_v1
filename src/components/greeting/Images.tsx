import React from "react";
import Image from "next/image";
import PortfolioMainImage from "../..//media/images/portfolio_main_image.png";

const MainImage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={PortfolioMainImage}
        alt="Portfolio Main Image"
        className="rounded-4xl fixed bottom-[-35px] h-auto w-[210px] max-w-xl py-48 shadow-2xl"
      />
    </div>
  );
};

export default MainImage;
