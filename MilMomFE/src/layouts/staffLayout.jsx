import React from "react";
import AdminSideBar from "../components/AdminSideBar";
import AdminNav from "../components/AdminNav";
import { Outlet } from "react-router-dom";
import StaffSideBar from "../components/StaffSideBar";

export default function StaffLayout() {
  return (
    <div className="px-5 flex bg-neutral-200">
      <div className="w-3/12 mr-5">
        <StaffSideBar />
      </div>
      <div className="w-9/12">
        <Outlet />
      </div>
    </div>
  );
}
