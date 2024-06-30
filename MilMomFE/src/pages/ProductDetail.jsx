import React from "react";
import { detailProduct, emptyAvatar } from "../data/data";
import { formatCurrency } from "../helpers/helper";
import MilMomBtn from "../components/MilMomBtn";
import Slider from "react-slick";
import { Icon } from "@iconify/react/dist/iconify.js";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function ProductDetail() {
  return (
    <div className="py-10 px-40">
      <div className="flex items-center">
        <div className="w-1/2">
          <img className="mb-5 w-full" src={detailProduct?.image[0]} />

          {/* <Slider {...settings}>
            {detailProduct?.image.map((img) => (
              <div>
                <img src={img} />
              </div>
            ))}
          </Slider> */}
        </div>
        <div className="w-1/2 px-10">
          <div className="text-4xl font-bold mb-3">{detailProduct?.name}</div>
          <div className="text-sm text-neutral-500 mb-20">
            {detailProduct?.from}
          </div>
          <div className="flex mb-5">
            <div className="text-3xl font-bold text-blue-950 mr-10">
              {formatCurrency(detailProduct?.price)}
            </div>
            <div className="px-2 py-1 bg-yellow-100 rounded-3xl mr-3 flex items-center text-yellow-400 text-sm">
              <Icon icon="material-symbols:star-outline" />
              <span className="ml-2">{detailProduct?.rate}</span>
            </div>
            <div className="px-2 py-1 rounded-3xl bg-slate-100 flex items-center text-red-300 text-sm">
              <Icon
                icon="icon-park-outline:comment"
                className="text-blue-950"
              />
              <span className="ml-2">{detailProduct?.comment} đánh giá</span>
            </div>
          </div>

          <div className="flex mb-2">
            <div className="font-bold text-neutral-500 mr-28 line-through">
              {formatCurrency(
                detailProduct?.price -
                  detailProduct?.price * detailProduct?.sale
              )}
            </div>
            <div className="px-2 py-1 flex items-center text-sm">
              <div className="text-green-700">93%</div>
              <span className="ml-2 text-neutral-500">
                Người đã mua và đánh giá
              </span>
            </div>
          </div>

          <hr className="my-5" />

          <div className="flex mb-20">
            <MilMomBtn
              content="Mua Ngay"
              text="text-white"
              px="px-5"
              className="mr-5"
            />

            <div
              className={`bg-red-300 rounded-md text-white font-medium px-5 py-2`}
            >
              <div className="flex items-center">
                {" "}
                <Icon icon="tdesign:shop" className="mr-3" /> Thêm vào giỏ hàng{" "}
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4 flex">
            <Icon icon="tdesign:shop" className="mr-3 text-red-300" />
            <div>
              <div className="font-bold text-blue-900">Hoàn trả hàng</div>
              <div className="text-sm text-neutral-500">
                Miễn đổi trả trong vòng 30 ngày kể từ ngày nhận hàng thành công.
                Chi tiết tại đây.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="text-4xl font-medium mb-10">
          Thông tin chi tiết sản phẩm
        </div>
        <div className="grid grid-cols-4 mb-5">
          <div className="p-5 font-medium border border-neutral-500">
            Tên sản phẩm
          </div>
          <div className="p-5 font-medium border border-neutral-500 col-span-3">
            {detailProduct?.name}
          </div>
          <div className="p-5 font-medium border border-neutral-500 bg-neutral-100">
            Nhà sản xuất
          </div>
          <div className="p-5 font-medium border border-neutral-500 col-span-3">
            {detailProduct?.from}
          </div>
          <div className="p-5 font-medium border border-neutral-500">
            Hướng dẫn sử dụng
          </div>
          <div className="p-5 font-medium border border-neutral-500 col-span-3"></div>
          <div className="p-5 font-medium border border-neutral-500 bg-neutral-100">
            Trọng lượng sản phẩm
          </div>
          <div className="p-5 font-medium border border-neutral-500 col-span-3"></div>
          <div className="p-5 font-medium border border-neutral-500">Thành phần</div>
          <div className="p-5 font-medium border border-neutral-500 col-span-3"></div>
        </div>
      </div>

      <div>
        <div className="text-3xl font-medium mb-10">Đánh giá sản phẩm</div>
        <div className="flex">
          <div className="w-1/12 mr-1">
            <img src={emptyAvatar} />
          </div>

          <div>
            <div className="font-bold mb-1">Thùy Dương</div>
            <div className="flex text-yellow-500 items-center">
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <Icon icon="material-symbols:star" />
              <span className="ml-3 text-neutral-500">03/06/2024 13:05</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
