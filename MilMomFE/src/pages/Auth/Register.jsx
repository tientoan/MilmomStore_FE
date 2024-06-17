import React from "react";
import milmomtext from "../../assets/milmomtext2.png";
import MilMomBtn from "../../components/MilMomBtn";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
  return (
    <div className="flex items-center min-h-screen">
      <div className="w-4/5 m-auto font-light">
        <img src={milmomtext} className="w-3/5 mb-20"/>
        <div className="grid grid-cols-2 gap-7 mb-10">

          <div className="mb-3">
            <div className="mb-4 ">Tên Tài khoản</div>
            <input className="p-2 w-full text-neutral-500 border-2 rounded-md" placeholder="Nguyen Van A"/>
          </div>

          <div className="mb-3">
            <div className="mb-4 ">Mật khẩu</div>
            <input className="p-2 w-full text-neutral-500 border-2 rounded-md" placeholder="**************"/>
          </div>

          <div className="mb-3">
            <div className="mb-4 ">Email</div>
            <input className="p-2 w-full text-neutral-500 border-2 rounded-md" placeholder="info@gmail.com"/>
          </div>
          
          <div className="mb-3">
            <div className="mb-4 ">Họ tên</div>
            <input className="p-2 w-full text-neutral-500 border-2 rounded-md" placeholder="Nguyen Van A"/>
          </div>

          <div className="mb-3">
            <div className="mb-4 ">Địa chỉ</div>
            <input className="p-2 w-full text-neutral-500 border-2 rounded-md" placeholder="Địa chỉ giao hàng"/>
          </div>

          <div className="mb-3">
            <div className="mb-4 ">Số điện thoại</div>
            <input className="p-2 w-full text-neutral-500 border-2 rounded-md" placeholder="1234567890"/>
          </div>

          
          
        </div>
        <div onClick={() => navigate("/")} className="flex justify-end font-medium"><button className="px-5 bg-black text-white py-2 mr-5 rounded-md">
          Hủy
        </button>
        <MilMomBtn content="Đăng ký tài khoản" text="text-white" className="rounded-md"/></div>
      </div>
    </div>
  );
}
