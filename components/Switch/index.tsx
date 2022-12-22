import { useTheme } from "next-themes";

export default function Switch() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleTheme}
      className="outline-none border-none p-3 rounded-full cursor-pointer bg-switch-light dark:bg-switch-dark hover:bg-secondary-two hover:dark:bg-primary-two"
    >
      {theme === "dark" ? (
        <img className="w-6 h-6" src="/dark.svg" alt="dark-button" />
      ) : (
        <img className="w-6 h-6" src="/light.svg" alt="light-button" />
      )}
    </button>
  );
}
