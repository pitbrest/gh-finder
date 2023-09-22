import React from "react";
import { InfoItemProps } from "../types/";

function InfoItem({ icon, text, isLink }: InfoItemProps) {
  const currentText = text || "Not available";
  let currentHref = "";

  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : ` https://${text}`;
  }

  return (
    <div className="basis-[47%] shrink-0 flex gap-3">
      <div className="icon-container w-8 h-8">{icon}</div>
      <div className="">
        {isLink && text ? (
          <a href={currentHref} target="_blank" rel="noreferrer">
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
}

export default InfoItem;
