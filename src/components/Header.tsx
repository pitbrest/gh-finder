import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <div className="flex justify-between text-xl mb-10 header font-semibold">
      <div>devFinder</div>
      <ThemeSwitcher />
    </div>
  );
}

export default Header;
