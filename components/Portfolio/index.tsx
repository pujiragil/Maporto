import Image, { StaticImageData } from "next/image";
import port1 from "/public/images/port-1.png"
import port2 from "/public/images/port-2.png"
import port3 from "/public/images/port-3.png"
import port4 from "/public/images/port-4.png"
import port5 from "/public/images/port-5.png"
import port6 from "/public/images/port-6.png"
import { DiGithubBadge } from "react-icons/di";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";

export default function Portfolio() {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-[464px] md:max-w-none md:w-11/12 lg:w-8/12 gap-8">
      <PortfolioItem src={port1} alt="porfolio-image" />
      <PortfolioItem src={port2} alt="porfolio-image" />
      <PortfolioItem src={port3} alt="porfolio-image" />
      <PortfolioItem src={port4} alt="porfolio-image" />
      <PortfolioItem src={port5} alt="porfolio-image" />
      <PortfolioItem src={port6} alt="porfolio-image" />
    </div>
  );
}

interface PortfolioItemProps {
  src: StaticImageData;
  alt: string;
}

function PortfolioItem({ src, alt }: PortfolioItemProps) {
  return (
    <div className="w-full h-52 lg:h-60 overflow-hidden rounded-2xl relative cursor-pointer group">
      <Image
        className="w-full h-full object-cover relative transition-all duration-300 ease-in-out group-hover:scale-110"
        src={src}
        alt={alt}
      />
      <div className="portfolio-button-wrapper">
        <button className="portfolio-button-primary">
          <DiGithubBadge className="text-xl md:text-2xl" /> Source
        </button>
        <button className="portfolio-button-secondary">
          <HiOutlineGlobeEuropeAfrica className="text-xl md:text-2xl" /> Live
        </button>
      </div>
    </div>
  );
}
