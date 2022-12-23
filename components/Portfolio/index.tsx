import { DiGithubBadge } from "react-icons/di";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";

export default function Portfolio() {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-[464px] md:max-w-none md:w-11/12 lg:w-8/12 gap-8">
      <PortfolioItem src="/images/port-1.png" alt="porfolio-image" />
      <PortfolioItem src="/images/port-2.png" alt="porfolio-image" />
      <PortfolioItem src="/images/port-3.png" alt="porfolio-image" />
      <PortfolioItem src="/images/port-4.png" alt="porfolio-image" />
      <PortfolioItem src="/images/port-5.png" alt="porfolio-image" />
      <PortfolioItem src="/images/port-6.png" alt="porfolio-image" />
    </div>
  );
}

interface PortfolioItemProps {
  src: string;
  alt: string;
}

function PortfolioItem({ src, alt }: PortfolioItemProps) {
  return (
    <div className="w-full h-52 lg:h-60 overflow-hidden rounded-2xl relative cursor-pointer group">
      <img
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
