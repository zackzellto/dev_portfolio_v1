import React from "react";
import Image from "next/image";
import PortfolioMainImage from "../..//media/images/portfolio_main_image.png";

const MainImage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={PortfolioMainImage}
        alt="Portfolio Main Image"
        className="rounded-4xl shadow-4xl relative h-auto w-[240px] max-w-xl"
      />
    </div>
  );
};

export default MainImage;
