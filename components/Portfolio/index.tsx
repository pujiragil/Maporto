export default function Portfolio() {
  return (
    <div className="grid md:grid-cols-2 w-full md:w-9/12 lg:w-7/12 gap-8">
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
    <div className="w-full h-52 overflow-hidden rounded-2xl">
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
}
