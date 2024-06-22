import React from "react";
import { sideBarAdminData } from "../data/data";
import { Link } from "react-router-dom";

export default function AdminSideBar() {
  return (
    <div className="border rounded-lg min-h-screen bg-white px-5 pt-40">
      {sideBarAdminData.map((data) => (
        <Link to={data.link} className="rounded-xl bg-neutral-400 p-3 mb-3">
          {data.icon}
          <div className="text-center">{data.content}</div>
        </Link>
      ))}
    </div>
  );
}
