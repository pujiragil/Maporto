import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import light from "/public/light.svg"
import dark from "/public/dark.svg"

export default function Switch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleTheme}
      className="outline-none mb-6 md:mb-8 border-none p-3 md:p-4 rounded-full cursor-pointer bg-switch-light dark:bg-switch-dark hover:bg-secondary-two hover:dark:bg-primary-two transition duration-300 ease-in-out"
    >
      <ThemedImage/>
    </button>
  );
}

function ThemedImage() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = light
      break
    case 'dark':
      src = dark
      break
    default:
      src = dark
      break
  }

  return <Image className="md:w-6 md:h-6" src={src} alt="icon" />
}