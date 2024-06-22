import React, { memo } from "react";
import { formatCurrency } from "../helpers/helper";

export const cartHeader = [
  {
    content: "Tên sản phẩm",
    id: "name",
    width: "w-4/12",
  },
  {
    content: "Hình ảnh",
    id: "image",
    format: (product) => <img className="m-auto" src={product?.image} />,
    width: "w-3/12",
  },
  {
    content: "Số lượng",
    format: (product) => <input className="border text-center" defaultValue={1} min={1} max={99} />,
    width: "w-1/12",
  },
  {
    content: "Đơn giá",
    id: "price",
    format: (product) => <>{formatCurrency(product?.price)}</>,
    width: "w-2/12",
  },
  {
    content: "Tổng tiền",
    id: "price",
    format: (product) => <>{formatCurrency(product?.price)}</>,
    width: "w-2/12",
  },
];

function Table({ headerTable, datas }) {
  return (
    <div>
      <table>
        <thead>
          <tr className="bg-neutral-100 px-5">
            <td className="py-3 text-center">#</td>
            {headerTable.map((header) => (
              <th className={`py-3 text-center ${header?.width}`}>
                {header?.content}
              </th>
            ))}
            <td></td>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              {headerTable.map((header) => (
                <td className="text-center">
                  {header?.format ? header.format(data) : data[header?.id]}
                </td>
              ))}
              <td>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table)