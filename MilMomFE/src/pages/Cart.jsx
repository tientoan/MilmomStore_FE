import React from 'react'
import Table, { cartHeader } from '../components/Table'
import { detailProduct } from '../data/data'
import MilMomBtn from '../components/MilMomBtn'
import ProductContainer from '../components/ProductContainer'
import OtherProducts from '../components/OtherProducts'

export default function Cart() {
  return (
    <div className='px-5'>
        <div className='text-red-300 font-bold text-2xl mb-5'>Giỏ hàng của bạn</div>
        <div className='flex mb-10'>
            <div className='w-4/5 border border-black rounded-xl px-2 mr-5'>
                <Table headerTable={cartHeader} datas={[detailProduct]}/>
            </div>
            <div className='w-1/5'>
                <div className='border border-black rounded-xl p-3 mb-5'>
                    <div className='text-lg font-medium mb-3'>Địa chỉ nhận hàng</div>
                    <input placeholder='nhập địa chỉ của bạn tại đây' className='text-neutral-500 w-full px-5 py-2'/>
                </div>
                <div className='border border-black rounded-xl p-3'>
                    <div className='flex justify-between'>
                        <div className='text-neutral-300'>Tạm tính</div>
                        <div className=''>0đ</div>
                    </div>
                    <hr className='my-5'/>
                    <div className='flex justify-between mb-5'>
                        <div className=''>Tổng tiền</div>
                        <div className=''>0đ</div>
                    </div>

                    <div><MilMomBtn className='rounded-xl border-2 border-black' py='py-3' content='Mua hàng'/></div>
                </div>
            </div>
        </div>

        <OtherProducts />
    </div>
  )
}
