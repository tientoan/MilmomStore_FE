import React from 'react'
import ManagerTable, { statisticalProductTable } from '../../components/ManagerTable'
import Pagination from '../../components/Pagination'

export default function StatisticalProduct() {
  return (
    <div>
          <div className="flex justify-between items-center mb-20">
        <div className="font-medium text-3xl">
        Thống kê sản phẩm bán chạy
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

        <div className='flex'>
            <div className='w-1/4 px-2 py-2'>
                <div className='text-center py-2 bg-red-100 rounded-lg'>Tất cả</div>
            </div>
            <div className='w-1/4 px-2 py-2'><div className='text-center py-2 bg-red-100 rounded-lg'>Sữa Bột</div></div>
            <div className='w-1/4 px-2 py-2'><div className='text-center py-2 bg-red-100 rounded-lg'>Bột Ăn Dặm</div></div>
            <div className='w-1/4 px-2 py-2'><div className='text-center py-2 bg-red-100 rounded-lg'>Bánh Ăn Dặm</div></div>
        </div>

        <div className='px-10 my-10'>
            <ManagerTable datas={[]} headerTable={statisticalProductTable} indexHeader={"Top"}/>
        </div>

        <Pagination />

        
      </div>
    </div>
  )
}
