import React, { memo } from "react";
import { blankAvatar, navbarData } from "../data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MilMomBtn from "./MilMomBtn";
import { Icon } from "@iconify/react/dist/iconify.js";
import milmom from "../assets/milmom.png";
import { useRecoilState } from "recoil";
import { accountAtom } from "../atom/accountAtom";
import { toast } from "react-toastify";

const Navbar = () => {
  const logo = "https://res.cloudinary.com/dr2hpvick/image/upload/v1720421442/719ecdbb-feb1-4116-99a4-9ce21cac1b80_k8w6lb.png";
  const [account, setAccount] = useRecoilState(accountAtom);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex items-center" style={{backgroundColor:"#ffd1dc"}}>
      <div
        onClick={() => navigate("/")}
        className="w-1/6 flex items-center px-5"
      >
        <img src={logo} className="w-1/4" />
      </div>
      <div className="w-4/6 flex items-center justify-evenly px-20">
        {navbarData.map((data) => (
          <Link
            to={data.link}
            className="block text-center text-wrap font-medium"
          >
            {data.content}
          </Link>
        ))}
      </div>
      <div className="w-1/6 flex items-center justify-around">
        <Icon
          onClick={() => {
            if (!account) {
              toast.warning("Đăng nhập để sử dụng giỏ hàng");
              return;
            }
            navigate("/Cart");
          }}
          icon="mdi:cart"
          className={`text-3xl ${
            location.pathname == "/Cart" && "text-red-300"
          }`}
        />
        <Icon icon="tabler:bell-ringing-2-filled" className="text-3xl" />
        {account ? (
          <>
          <div className="w-1/12">
            <img 
              onClick={() => navigate("/profile")}
              src={blankAvatar} className="rounded-full" />
          </div>
           <MilMomBtn
           onClick={() => {
            localStorage.removeItem('account')
            setAccount(undefined)
           }}
           className="rounded-md"
           content="Đăng xuất"
         />
          </>
        ) : (
          <MilMomBtn
            onClick={() => navigate("/login")}
            className="rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default memo(Navbar);
