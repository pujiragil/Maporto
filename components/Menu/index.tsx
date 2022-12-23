import { MouseEventHandler, useState } from "react";
import Portfolio from "../Portfolio";
import Skills from "../Skills";

export default function Menu() {
  const [active, setActive] = useState("portfolio");

  const handleActive = (e: any) => {
    setActive(e.target.name);
  };

  return (
    <div className="py-2.5 flex flex-col items-center justify-center gap-8 mb-8 md:mb-16 lg:mb-24 transition-all duration-300 ease-in-out">
      <MenuSwitch active={active} handleActive={handleActive} />
      {active === "portfolio" ? <Portfolio key={"portfolio"} /> : <Skills />}
    </div>
  );
}

interface MenuSwitchProps {
  active: string;
  handleActive: MouseEventHandler;
}

function MenuSwitch({ active, handleActive }: MenuSwitchProps) {
  return (
    <div className="max-w-[464px] w-full md:max-w-none md:w-11/12 lg:w-8/12 flex items-center justify-center p-2 gap-3.5 md:gap-7 bg-switch-light dark:bg-switch-dark rounded-xl text-xs md:text-sm lg:text-base">
      <button
        onClick={handleActive}
        name="portfolio"
        className={`${
          active === "portfolio" ? "active-menu-button" : "text-primary-three"
        } menu-button`}
      >
        Portfolio
      </button>
      <button
        onClick={handleActive}
        name="skills"
        className={`${
          active === "skills" ? "active-menu-button" : "text-primary-three"
        } menu-button`}
      >
        Skills
      </button>
    </div>
  );
}
