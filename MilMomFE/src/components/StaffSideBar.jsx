import React from "react";
import { blankAvatar, sideBarAdminData, sideBarStaffData } from "../data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import milmom from "../assets/milmom.png";
export default function StaffSideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" h-screen px-10 pt-10 ">
      <div className="border rounded-lg pt-5 h-full bg-white">
        <img className="mb-10" src={milmom} />
        <div className="flex items-center mb-10">
          <img src={blankAvatar} className="w-1/3 mr-2 rounded-full" />
          <div className="font-bold text-lg">Staff</div>
        </div>
        {sideBarStaffData.map((data) => (
          <div onClick={() => navigate(data.link)} className="w-full">
            <div
              className={`font-light ${
                location.pathname == data.link
                  ? "text-blue-900 font-medium"
                  : "text-neutral-500"
              } mb-5 px-5`}
            >
              {data.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
