import React from "react";
import AreaChartComponent from "../../components/AreaChart";
import { PieChartComponent, data } from "../../components/Piechart";

export default function Dashboard() {
  return (
    <div>
      <div className="flex py-10">
        <div className="w-2/3 mr-5 rounded-xl border font-medium p-5 bg-white">
          <div className="flex items-center">
            <div className="w-1/3">
              <div>Statistics</div>
              <PieChartComponent />
            </div>
            <div className="w-2/3 grid grid-cols-2 gap-5">
              {data.map((d) => (
                <div className="text-right">
                  <div className="font-light inline-flex items-center">
                    <span
                      style={{ backgroundColor: d.color }}
                      className="inline-block rounded-full w-2 h-2 text-xs mr-2"
                    >
                      .
                    </span>
                    {d.name}
                  </div>
                  <div>{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/3 border rounded-xl p-5 bg-white">
          <div className="flex justify-between items-end">
            <div className="font-medium text-lg">Sản phẩm bán chạy </div>
            <div className="font-light">See ranking</div>
          </div>

          <div className="my-5">
            {data.slice(0, 4).map((d, index) => (
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <div
                    className={`font-bold text-white rounded-xl px-3 py-2 mr-3`}
                    style={{ backgroundColor: `${d.color}` }}
                  >
                    {index + 1}
                  </div>
                  <div>{d.name}</div>
                </div>

                <div>{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex mt-5 font-medium">
        <div className="w-2/3 mr-5 h-96 rounded-xl border font-medium bg-white p-5">
          <div className="mb-10">Overview</div>
          <AreaChartComponent />
        </div>
        <div className="w-1/3 border rounded-xl p-5 bg-white">
          <div className="mb-10 text-lg">Active percentage</div>
          <div className="flex items-end mb-10">
            <div className="font-bold text-2xl mr-2">59.4</div>
            <div className="font-light text-sm">Total</div>
          </div>

          <div class="w-full bg-red-200 rounded-full h-4 mb-10">
            <div
              class="bg-red-400 h-4 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>

          <div className="grid grid-cols-2 font-light">
            <div>
              <div>Online</div>
              <div className="font-bold">100 Users</div>
            </div>
            <div>
              {" "}
              <div>Offline</div>
              <div className="font-bold">100 Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
