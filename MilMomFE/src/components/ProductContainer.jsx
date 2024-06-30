import React from "react";
import { formatCurrency } from "../helpers/helper";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductContainer({ product }) {
  return (
    <div className="rounded-xl shadow-lg">
      <div className="rounded-xl h-60 overflow-hidden">
        <img className="m-auto" src={product?.image} />
      </div>
     <div className="p-5">
     <div className="font-medium">{product?.name}</div>
      <div className="flex text-yellow-500">
        <Icon icon="material-symbols:star" />
        <Icon icon="material-symbols:star" />
        <Icon icon="material-symbols:star" />
        <Icon icon="material-symbols:star" />
        <Icon icon="material-symbols:star" />
      </div>
      <div className="text-lg text-red-300 flex justify-between">
        <div>{formatCurrency(product?.price??0)}</div>

        <Icon icon="mdi:cart" />
      </div>
     </div>
    </div>
  );
}
