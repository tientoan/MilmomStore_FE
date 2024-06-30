import { Icon } from "@iconify/react/dist/iconify.js";
import { memo } from "react";

export const userManagerHeader = [
    {
      content:"ID NGƯỜI DÙNG",
      id:"id",
      width:"w-2/12"
    },
    {
      content:"HỌ VÀ TÊN NGƯỜI DÙNG",
      id:"name",
      width:"w-2/12"
    },
    {
      content:"EMAIL",
      id:"email",
      width:"w-3/12"
    },
    {
      content:"SỐ ĐIỆN THOẠI",
      id:"phone",
      width:"w-2/12"
    },
    {
      content:"VAI TRÒ",
      id:"roleId",
      width:"w-1/12"
    },
    {
      content:"TRẠNG THÁI",
      id:"status",
      width:"w-1/12"
    },
  ]
  

  export const orderManagerHeader = [
    {
      content:"ID ĐƠN HÀNG",
      id:"id",
      width:"w-2/12"
    },
    {
        content:"NGÀY TẠO ĐƠN HÀNG",
        id:"createdDate",
        width:"w-2/12"
      },
    {
      content:"HỌ VÀ TÊN KHÁCH HÀNG",
      id:"name",
      width:"w-2/12"
    },
    
    {
      content:"SỐ ĐIỆN THOẠI",
      id:"phone",
      width:"w-1/12"
    },
    {
      content:"ĐỊA CHỈ",
      id:"address",
      width:"w-1/12"
    },
    {
      content:"CHI TIẾT SẢN PHẨM",
      id:"detail",
      width:"w-3/12"
    },
  ]

  export const reportManagerHeader = [
    {
      content:"ID ĐƠN HÀNG",
      id:"id",
      width:"w-2/12"
    },
    {
        content:"NGÀY TẠO REPORT",
        id:"createdDate",
        width:"w-2/12"
      },
    {
      content:"HỌ VÀ TÊN KHÁCH HÀNG",
      id:"name",
      width:"w-2/12"
    },
    
    {
      content:"SỐ ĐIỆN THOẠI",
      id:"phone",
      width:"w-1/12"
    },
    {
      content:"NỘI DUNG REPORT",
      id:"content",
      width:"w-2/12"
    },
    {
      content:"HÌNH ẢNH THỰC CHI TIẾT REPORT",
      id:"detail",
      width:"w-2/12"
    },
  ]
  
 
 function ManagerTable({indexHeader=undefined, bg="bg-red-300", headerTable, datas=[], isDelete = true, onDelete = () => {}, next = () => {} }) {
    return (
      <div>
        <table>
          <thead>
            <tr className={`${bg} px-5`}>
              {indexHeader&&<td className="py-3 text-center px-3">{indexHeader}</td>}
              {headerTable.map((header) => (
                <th className={`py-3 text-center font-medium px-5 text-wrap border border-black ${header?.width}`}>
                  {header?.header?header.header():header?.content}
                </th>
              ))}
              {isDelete && <td className="px-3 w-2/12 text-center font-medium border border-black">TÙY CHỈNH</td>}
            </tr>
          </thead>
          <tbody>
            {datas
              ? datas?.map((data, index) => (
                  <tr className="font-medium">
                    {indexHeader&&<td className="text-center py-10">{index + 1}</td>}
                    {headerTable.map((header) => (
                      <td className="text-center py-5 px-5 border border-black">
                        {header?.format ? header.format(data, next) : data[header?.id]}
                      </td>
                    ))}
                    {isDelete && (
                      <td className="text-center border border-black">
                        <button onClick={() => onDelete(data)}><Icon icon="charm:menu-kebab" /></button>
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

  export default memo(ManagerTable)