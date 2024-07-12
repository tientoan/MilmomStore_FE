import React from "react";
import MilMomBtn from "../components/MilMomBtn";

export default function ChangePassword() {
  return (
    <div className="px-40">
      <div className="font-bold text-3xl">Thay đổi mật khẩu</div>
      <div className="font-medium text-lg my-5">
        Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
      </div>

      <div className="px-40 font-medium">
        <div className="bg-white rounded-md p-3 mb-5">
          <div className="mb-5 text-lg">Mật khẩu cũ</div>
          <input type="password" className="p-3 rounded-md w-full border border-neutral-500" />
        </div>
        <div className="bg-white rounded-md p-3 mb-5">
          <div className="mb-5 text-lg">Mật khẩu mới</div>
          <input type="password" className="p-3 rounded-md w-full border border-neutral-500" />
        </div>
        <div className="bg-white rounded-md p-3 mb-5">
          <div className="mb-5 text-lg">Xác nhận lại mật khẩu mới</div>
          <input type="password" className="p-3 rounded-md w-full border border-neutral-500" />
        </div>

        <div className="flex justify-end">
          <MilMomBtn className="rounded-md" content="Lưu" />
        </div>
      </div>
    </div>
  );
}
