import React from "react";
import AdminSideBar from "../components/AdminSideBar";
import AdminNav from "../components/AdminNav";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="px-5 flex bg-neutral-200">
      <div className="w-1/6 mr-5">
        <AdminSideBar />
      </div>
      <div className="w-5/6">
        <AdminNav />
        <Outlet />
      </div>
    </div>
  );
}
