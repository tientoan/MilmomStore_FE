import React from "react";
import {
  accountList,
  accountType,
  orderList,
  orderStatus,
} from "../../data/data";
import MilMomBtn from "../../components/MilMomBtn";
import Pagination from "../../components/Pagination";
import { getCurrentDate } from "../../helper/helper";
import ManagerTable, {
  orderManagerHeader,
} from "../../components/ManagerTable";

export default function OrderManager() {
  return (
    <div className="py-5">
      <div className="py-5 bg-red-100 rounded-lg min-h-screen text-sm">
        <div className="text-3xl font-medium mb-5">Quản lý đơn hàng</div>
        <div className="flex font-medium my-10 text-lg">
          {orderStatus.map((s) => (
            <div className="w-1/6 px-1">
              <div className={`rounded-xl text-center py-5 ${s.color}`}>
                {s.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-10 px-20">
         <div className="flex w-2/5">
         <input
            className="border rounded-md px-3 py-1 text-neutral-500 w-3/5 mr-2"
            placeholder="tìm kiếm theo mã đơn hàng"
          />
          <input
            className="border rounded-md px-3 py-1 text-neutral-500 w-2/5"
            placeholder="filter theo ngày"
            type="date"
          />
         </div>
          <MilMomBtn
            content="Tạo mới"
            text="text-white"
            font="font-base"
            className="rounded-lg"
          />
        </div>
        <div className="px-20">
          <ManagerTable datas={orderList} headerTable={orderManagerHeader} />
        </div>

        <div className="mt-20">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
