import React, { memo } from "react";
import { navbarData } from "../data/data";
import { Link, useNavigate } from "react-router-dom";
import MilMomBtn from "./MilMomBtn";
import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/logo.png";
import milmom from "../assets/milmom.png";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center">
      <div className="w-1/6 flex items-center px-5">
        <img src={logo} className="w-1/4" />
        <img src={milmom} />
      </div>
      <div className="w-3/6 flex items-center justify-evenly px-20">
        {navbarData.map((data) => (
          <Link
            to={data.link}
            className="block text-center text-wrap font-medium"
          >
            {data.content}
          </Link>
        ))}
      </div>
      <div className="w-2/6 flex items-center justify-around">
        <Icon icon="mdi:cart" className="text-3xl"/>
        <Icon icon="tabler:bell-ringing-2-filled" className="text-3xl"/>
        <MilMomBtn onClick={() => navigate("/login")} className="rounded-md"/>
      </div>
    </div>
  );
}

export default memo(Navbar)
