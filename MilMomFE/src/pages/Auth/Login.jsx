import React from "react";
import milmomtext from "../../assets/milmomtext.png";
import MilMomBtn from "../../components/MilMomBtn";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex items-center min-h-screen">
      <div className="w-2/3 m-auto">
        <img className="w-full mb-2" src={milmomtext} />
        <div className="font-medium text-neutral-500 text-sm mb-5">
          Đăng nhập để trải nghiệm đầy đủ dịch vụ và thông tin hơn
        </div>

        <div className="mb-3">
          <div className="mb-2 font-medium">Tên người dùng</div>
          <input className="p-2 w-4/5 text-neutral-500 border-2 rounded-md" placeholder="Tên người dùng"/>
        </div>

        <div className="mb-20">
          <div className="mb-2 font-medium">Tên người dùng</div>
          <input className="p-2 w-4/5 text-neutral-500 border-2 rounded-md" type="password" placeholder="**************"/>
        </div>

        <button className="w-4/5 bg-black text-white py-2 mb-3">
          Đăng nhập
        </button>
        <MilMomBtn content="Đăng ký" className="w-4/5 mb-5" />
        <div className="text-center w-4/5 mb-3">
          <Link to={"/forgotPassword"} className="text-neutral-500 underline underline-offset-4">
            Bạn quên mật khẩu ?
          </Link>
        </div>

        <div className="text-center w-4/5 mb-3">
          <Link to={"/register"} className="text-neutral-500">
            Bạn chưa có tài khoản ? <span className="text-red-300 font-medium">Đăng ký ngay</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
