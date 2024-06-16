import React, { memo } from 'react'
import ProductContainer from './ProductContainer'
import { detailProduct } from '../data/data'

const OtherProducts = () => {
  return (
    <div>
            <div className='text-red-300 font-bold text-3xl'>Các sản phẩm khác</div>
            <div className='text-neutral-400 font-bold text-2xl text-right'>Xem tất cả</div>

            <div className='flex flex-wrap'>
                <div className='w-1/4 px-5 mb-10'>
                    <ProductContainer product={detailProduct}/>
                </div>
                <div className='w-1/4 px-5'>
                    <ProductContainer product={detailProduct}/>
                </div>
                <div className='w-1/4 px-5'>
                    <ProductContainer product={detailProduct}/>
                </div>
                <div className='w-1/4 px-5'>
                    <ProductContainer product={detailProduct}/>
                </div>
                <div className='w-1/4 px-5'>
                    <ProductContainer product={detailProduct}/>
                </div>
                <div className='w-1/4 px-5'>
                    <ProductContainer product={detailProduct}/>
                </div>
                <div className='w-1/4 px-5'>
                    <ProductContainer product={detailProduct}/>
                </div>
                <div className='w-1/4 px-5'>
                    <ProductContainer product={detailProduct}/>
                </div>
            </div>
        </div>
  )
}

export default memo(OtherProducts)
