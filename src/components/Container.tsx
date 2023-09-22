import React from "react";
import { ContainerProps } from "../types/";

function Container({ children }: ContainerProps) {
  return (
    <div className="w-full md:w-[734px] mx-auto px-2 py-6">{children}</div>
  );
}

export default Container;
