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
            ? "active-menu-button"
            : "text-primary-three"
        } menu-button`}
      >
        Portfolio
      </button>
      <button
        onClick={handleActive}
        name="skills"
        className={`${
          active === "skills"
            ? "active-menu-button"
            : "text-primary-three"
        } menu-button`}
      >
        Skills
      </button>
    </div>
  );
}
