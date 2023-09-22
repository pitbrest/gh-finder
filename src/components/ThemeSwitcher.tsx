import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className="flex gap-4 items-center"
      onClick={() => setIsDark(!isDark)}
    >
      <span className="text-sm">{themeText}</span>
      <ThemeIcon className="w-8 h-8" />
    </div>
  );
}

export default ThemeSwitcher;
