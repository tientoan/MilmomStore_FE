import { Icon } from "@iconify/react/dist/iconify.js";
import { memo } from "react";
import { convertToCustomFormat } from "../helper/helper";
import MilMomBtn from "./MilMomBtn";
import { format } from "@cloudinary/url-gen/actions/delivery";

export const userManagerHeader = [
  {
    content: "ID NGƯỜI DÙNG",
    id: "userID",
    width: "w-2/12",
  },
  {
    content: "HỌ VÀ TÊN NGƯỜI DÙNG",
    id: "name",
    width: "w-2/12",
  },
  {
    content: "EMAIL",
    id: "email",
    width: "w-3/12",
  },
  {
    content: "SỐ ĐIỆN THOẠI",
    id: "phone",
    width: "w-2/12",
  },
  {
    content: "VAI TRÒ",
    id: "roleId",
    width: "w-1/12",
    format: (account) => (
      <div>
        {account?.roles?.map((role) => (
          <span className="mx-3">{role}</span>
        ))}
      </div>
    ),
  },
  {
    content: "TRẠNG THÁI",
    id: "status",
    width: "w-1/12",
  },
];

export const orderManagerHeader = [
  {
    content: "ID ĐƠN HÀNG",
    id: "orderID",
    width: "w-2/12",
  },
  {
    content: "NGÀY TẠO ĐƠN HÀNG",
    id: "orderDate",
    width: "w-2/12",
    format: (order) => convertToCustomFormat(order.orderDate),
  },
  {
    content: "HỌ VÀ TÊN KHÁCH HÀNG",
    id: "name",
    width: "w-2/12",
    format: (order) => order.shippingInfor.receiverName,
  },
 
  {
    content: "SỐ ĐIỆN THOẠI",
    id: "phone",
    width: "w-1/12",
    format: (order) => order.shippingInfor.phone,
  },
  {
    content: "ĐỊA CHỈ",
    id: "address",
    width: "w-1/12",
    format: (order) => order.shippingInfor.detailAddress,
  },
  {
    content: "CHI TIẾT SẢN PHẨM",
    id: "detail",
    width: "w-3/12",
    format: (order) =>
      order.orderDetails.map((od) => (
        <>
          <div>
            {od.product.name} X {od.quantity}
          </div>
        </>
      )),
  },
  {
    content: "TRẠNG THÁI",
    id: "status",
    width: "w-1/12",
    format: (order) => {
      const orderStatusMap = {
        0: "Chờ Thanh Toán",
        1: "Chờ Xác Nhận",
        2: "Đang Giao Hàng",
        3: "Đã Nhận Hàng",
        4: "Đã Hoàn Tất",
        5: "Đã Hủy",
        6: "Chờ Hoàn Tiền",
        7: "Yêu Cầu Trả Hàng",
      };
 
      const statusClasses = {
        0: "text-yellow-500",
        1: "text-blue-500",
        2: "text-orange-500",
        3: "text-purple-500",
        4: "text-green-500",
        5: "text-red-500",
        6: "text-pink-500",
        7: "text-teal-500",
      };
 
      return (
        <span className={statusClasses[order.status]}>
          {orderStatusMap[order.status]}
        </span>
      );
    },
  },
];

function ManagerTable({
  indexHeader = undefined,
  bg = "bg-red-300",
  headerTable,
  datas = [],
  isDelete = true,
  onApprove = () => {},
  approveContent = "",
  onDelete = () => {},
  deleteContent = "",
  next = () => {},
}) {
  const hidden = (event) => {
    const div = event.target.parentNode.parentNode.querySelector("div")
    console.log(event.target.parentNode.parentNode)
    console.log(div)
    if(!div.classList.contains('hidden')){
      div.classList.add('hidden')
    }else{
      div.classList.remove('hidden')
    };
  };
  const hiddenStatuses = [0, 2, 4, 5]; // Chờ Thanh Toán, Đang Giao Hàng, Đã Hoàn Tất, Đã Hủy
 
  // Check if any order has a status in hiddenStatuses
  const shouldHideActions = datas.some(order => hiddenStatuses.includes(order.status));
 
  return (
    <div className="bg-white">
      <table>
        <thead>
          <tr className={`${bg} px-5 uppercase`}>
            {indexHeader && (
              <td className="py-3 text-center px-3 font-medium border border-black">{indexHeader}</td>
            )}
            {headerTable.map((header) => (
              <th
                className={`py-3 text-center font-medium px-5 text-wrap border border-black ${header?.width}`}
              >
                {header?.header ? header.header() : header?.content}
              </th>
            ))}
            {isDelete && !shouldHideActions && (
              <td className="px-3 w-2/12 text-center font-medium border border-black">
                TÙY CHỈNH
              </td>
            )}
          </tr>
        </thead>
        <tbody>
          {datas
            ? datas?.map((data, index) => (
                <tr className="font-medium">
                  {indexHeader && (
                    <td className="text-center py-10">{index + 1}</td>
                  )}
                  {headerTable.map((header) => (
                    <td className="text-center py-5 px-5 border border-black">
                      {header?.format
                        ? header.format(data, next)
                        : data[header?.id]}
                    </td>
                  ))}
                  {isDelete && !shouldHideActions && (
                    <td className="text-center border border-black ">
                      <button onClick={hidden}>
                        <Icon icon="charm:menu-kebab" />
                      </button>
                      <div className="hidden absolute p-3 border border-red-300 rounded-lg bg-white right-5">
                        <MilMomBtn onClick={() => onApprove(data)} content={approveContent} className="mb-3 rounded-md" bg="bg-orange-300" />
                        <MilMomBtn onClick={() => onDelete(data)} content={deleteContent} className="mb-3 rounded-md" text="text-white"/>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}


export const reportManagerHeader = [
  {
    content: "ID ĐƠN HÀNG",
    id: "id",
    width: "w-2/12",
  },
  {
    content: "NGÀY TẠO REPORT",
    id: "createdDate",
    width: "w-2/12",
  },
  {
    content: "HỌ VÀ TÊN KHÁCH HÀNG",
    id: "name",
    width: "w-2/12",
  },

  {
    content: "SỐ ĐIỆN THOẠI",
    id: "phone",
    width: "w-1/12",
  },
  {
    content: "NỘI DUNG REPORT",
    id: "content",
    width: "w-2/12",
  },
  {
    content: "HÌNH ẢNH THỰC CHI TIẾT REPORT",
    id: "detail",
    width: "w-2/12",
  },
];

export const revenueProductHeader = [
  {
    content: "ID sản phẩm",
    id: "id",
    width: "w-2/12",
  },
  {
    content: "Tên sản phẩm",
    id: "productName",
    width: "w-3/12",
  },
  {
    content: "Thời gian",
    id: "createdDate",
    width: "w-2/12",
  },
  {
    content: "SỐ lượng",
    id: "quantity",
    width: "w-1/12",
  },
  {
    content: "Giá tiền",
    id: "price",
    width: "w-2/12",
  },
  {
    content: "Thành tiền",
    id: "price",
    width: "w-2/12",
  },
];

export const statisticalProductTable = [
  {
    content: "ID sản phẩm",
    id: "id",
    width: "w-3/12",
  },
  {
    content: "Tên sản phẩm",
    id: "productName",
    width: "w-4/12",
  },
  {
    content: "Số lượng",
    id: "quantitySold",
    width: "w-3/12",
  },
];

export const productManagerHeader = [
  {
    content: "ID sản phẩm",
    id: "productId",
    width: "w-1/12",
  },
  {
    content: "Tên sản phẩm",
    id: "name",
    width: "w-2/12",
  },
  {
    content: "Loại sản phẩm",
    id: "productName",
    width: "w-2/12",
    format: (product) => product.category.name,
  },
  {
    content: "Số lượng trong kho",
    id: "inventoryQuantity",
    width: "w-1/12",
  },
  {
    content: "Giá sản phẩm",
    id: "purchasePrice",
    width: "w-2/12",
  },
  {
    content: "Hình ảnh",
    id: "image",
    width: "w-2/12",
    format: (product) => (
      <div className="overflow-x-scroll flex">
        {product?.imageProducts.map((img) => (
          <img src={img.image} className="w-full inline" />
        ))}
      </div>
    ),
  },
  {
    content: "Trạng thái",
    id: "status",
    width: "w-1/12",
    format: (product) => (
      <span
        className={`${product?.status ? "text-green-500" : "text-red-500"}`}
      >
        {product?.status ? "Active" : "Deactive"}
      </span>
    ),
  },
];



export default memo(ManagerTable);
