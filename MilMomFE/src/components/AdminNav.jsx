import React from "react";
import milmom from "../assets/milmom.png";
import { blankAvatar } from "../data/data";
export default function AdminNav() {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center">
        <img src={milmom} />
        <span className="font-bold text-xl">Dashboard</span>
      </div>

      <div className="flex items-center">
        <Icon icon="mdi:bell-outline" />
        <img src={blankAvatar} />
      </div>
    </div>
  );
}
