import React from "react";
import { ButtonProps } from "../types";

function Button({ children, onclick }: ButtonProps) {
  return (
    <button
      className="px-2 py-1 md:px-4 md:py-2 top-4 md:top-3 rounded-lg active:scale-95"
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
