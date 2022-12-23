import { DiGithubBadge } from "react-icons/di"
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2"

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
      <div className="absolute flex items-center justify-center gap-4 bg-switch-light/70 dark:bg-switch-dark/70 w-full h-1/2 bottom-0 left-0 translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 text-xs md:text-sm lg:text-base">
        <button className="w-1/3 p-3 bg-switch-light/80 hover:bg-switch-light dark:bg-switch-dark text-primary-two dark:text-secondary-two hover:text-primary-four hover:dark:text-secondary-one rounded-xl flex items-center justify-center gap-2 transition duration-300 ease-in-out"><DiGithubBadge className="text-xl md:text-2xl"/> Source</button>
        <button className="w-1/3 p-3 bg-orange-light dark:bg-orange-dark rounded-xl flex items-center justify-center gap-2"><HiOutlineGlobeEuropeAfrica className="text-xl md:text-2xl"/> Live</button>
      </div>
    </div>
  );
}
