import React, { memo } from "react";
import { formatCurrency } from "../helpers/helper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DEFAULT_IMG } from "../data/data";

function ProductContainer({ product }) {

  const totalStars = 5;
  const fullStars = Math.floor(product.averageRating);
  const halfStar = product.averageRating - fullStars >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rounded-xl shadow-lg">
      <div className="rounded-xl h-60 overflow-hidden">
        <img className="m-auto" src={product?.imageProducts?product?.imageProducts[0].image:DEFAULT_IMG} style={{width:"80%"}} />
      </div>
     <div className="p-5">
     <div className="font-medium truncate mb-2">{product?.name}</div>
      <div className="flex text-yellow-500 mb-2">
          {Array(fullStars)
            .fill()
            .map((_, index) => (
              <Icon key={`full-${index}`} icon="material-symbols:star" />
            ))}
          {halfStar && <Icon icon="material-symbols:star-half" />}
          {Array(emptyStars)
            .fill()
            .map((_, index) => (
              <Icon key={`empty-${index}`} icon="material-symbols:star-outline" />
            ))}
      </div>
      <div className="text-lg text-white flex justify-between">
        <h3 className="text-lg text-pink-500 font-bold rounded-xl font-sans">
          {formatCurrency(product.purchasePrice)}
        </h3>
        <div className="flex justify-center items-center bg-pink-500 rounded-full w-10 h-10">
          <Icon icon="mdi:cart" className="text-md" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default memo(ProductContainer)
