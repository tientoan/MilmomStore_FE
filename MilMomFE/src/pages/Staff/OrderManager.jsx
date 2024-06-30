import React from "react";
import { accountList, accountType, orderList } from "../../data/data";
import MilMomBtn from "../../components/MilMomBtn";
import Pagination from "../../components/Pagination";
import { getCurrentDate } from "../../helper/helper";
import ManagerTable, { orderManagerHeader } from "../../components/ManagerTable";

export default function OrderManager() {
  return (
    <div className="py-5">
        <div className="py-5 px-20 bg-white rounded-lg min-h-screen text-sm">
      <div className="text-2xl font-medium mb-5">
      Đơn Hàng - Ngày {getCurrentDate()}
      </div>
      <div className="flex items-center justify-between mb-10">
          
          <input
            className="border rounded-md px-3 py-1 text-neutral-500 w-2/5"
            placeholder="tìm kiếm đơn hàng theo id"
          />
        <MilMomBtn
          content="Tạo mới"
          text="text-white"
          font="font-base"
          className="rounded-lg"
        />
      </div>
      <ManagerTable datas={orderList} headerTable={orderManagerHeader} />

      <div className="mt-20">
        <Pagination />
      </div>
    </div>
    </div>
  );
}
