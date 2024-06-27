import React from "react";
import { sideBarAdminData } from "../data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import milmom from "../assets/milmom.png";
export default function AdminSideBar() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className=" h-screen px-10 pt-20 ">
      <div className="border rounded-lg pt-5 h-full bg-white">
        <img className="mb-20" src={milmom} />
        {sideBarAdminData.map((data) => (
          <div onClick={() => navigate(data.link)} className="w-full">
            <div className={`w-10 block m-auto rounded-full ${location.pathname==data.link?"bg-red-100 text-red-400":"bg-neutral-100 text-neutral-400"} p-3 mb-3`}>
              {data.icon}
            </div>
            <div className={`text-center font-light ${location.pathname==data.link?"text-red-500":"text-neutral-500"} mb-5`}>
              {data.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
