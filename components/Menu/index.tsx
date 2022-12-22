import React, { useState } from "react";

export default function Menu() {
  return (
    <div className="py-2.5 flex flex-col items-center justify-center gap-8">
      <MenuSwitch />
    </div>
  );
}

function MenuSwitch() {
  const [active, setActive] = useState("portfolio");

  const handleActive = (e: any) => {
    setActive(e.target.name);
  };

  return (
    <div className="w-full flex items-center justify-center p-2 gap-3.5 bg-switch-light dark:bg-switch-dark rounded-xl text-xs font-medium">
      <button
        onClick={handleActive}
        name="portfolio"
        className={`${
          active === "portfolio"
            ? "bg-switch-semilight dark:bg-dark text-primary-four dark:text-secondary-two"
            : "text-primary-three"
        } rounded-xl p-3.5 flex-1 transition-all duration-300 ease-in-out`}
      >
        Portfolio
      </button>
      <button
        onClick={handleActive}
        name="skills"
        className={`${
          active === "skills"
            ? "bg-switch-semilight dark:bg-dark text-primary-four dark:text-secondary-two"
            : "text-primary-three"
        } rounded-xl p-3.5 flex-1 transition-all duration-300 ease-in-out`}
      >
        Skills
      </button>
    </div>
  );
}
