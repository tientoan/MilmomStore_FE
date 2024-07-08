import React from "react";
import { ColumnChart } from "./ColumnChart";

export default function OrderChart() {
  return (
    <div>
      <div className="flex justify-between items-center mb-20">
        <div className="font-medium text-3xl">
          Thống kê doanh thu MilMom theo số đơn hàng
        </div>
        <MilMomBtn
          content="Xuất file"
          text="text-white"
          className="rounded-lg"
        />
      </div>

      <div className="rounded-xl overflow-hidden">
        <div className="flex justify-between items-center bg-red-200">
          <div className="font-medium text-xl">Bộ lọc</div>
          <div className="flex items-center">
            <div className="mr-3">
              <div className="text-sm mb-1">Thời gian bắt đầu</div>
              <input type="date" className="p-3" />
            </div>

            <div className="mr-3">
              <div className="text-sm mb-1">Thời gian bắt đầu</div>
              <input type="date" className="p-3" />
            </div>

            <select className="p-3">
              <option>Ngày</option>
              <option>Tuần</option>
              <option>Tháng</option>
            </select>
          </div>
        </div>

        <ColumnChart />
      </div>
    </div>
  );
}
