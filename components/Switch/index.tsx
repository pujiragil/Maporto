import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      className="outline-none border-none p-3 rounded-full cursor-pointer bg-switch-light dark:bg-switch-dark hover:bg-secondary-two hover:dark:bg-primary-two"
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
      src = '/light.svg'
      break
    case 'dark':
      src = '/dark.svg'
      break
    default:
      src = '/dark.svg'
      break
  }

  return <Image src={src} width={20} height={20} alt="icon" />
}