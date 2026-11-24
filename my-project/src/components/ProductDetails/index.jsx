import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import QtyBox from '../QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";


const ProductDetailsComponent = () => {

    const [ProductActionIndex, setProductActionIndex] = useState(null);

  return (
    <>
    <h1 className='text-[#917108] text-[24px] font-[600] mb-2'>Flip-o-coller</h1>
                <div className="flex items-center gap-3">
                    <span className='text-[#c5a059] text-[13px]'>Brands :{" "} <span className='font-[500] text-[#917108] opacity-95'>Velflex Fragrance</span></span>

                    <Rating name='size-small' defaultValue={4} size='small' readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
                    <span className='text-[13px] text-[#c5a059] cursor-pointer'>Review (5)</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                   <span className="oldPrice line-through text-[#917108] text-[20px] font-[600]">1200/-RS</span>
                   <span className="price text-[#ff5252] text-[20px] font-[600]">999/-RS</span>
                   <span className='text-[#c5a059] text-[14px]'>Available In Stock : <span className='font-bold text-green-800'>147 Item</span></span>
                </div>

                <p className='text-[#c5a059] mt-3 pr-10px mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto cupiditate tempore consequatur odio vitae pariatur velit rem sapiente, corporis magni odit magnam qui dolore omnis esse consectetur optio enim! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium eligendi suscipit dignissimos temporibus doloremque quam ipsam aliquam laboriosam, dolorem vitae ratione mollitia possimus, sunt quasi sed perspiciatis. Placeat, natus?</p>

                <div className="flex items-center gap-3">
                    <span className='text-[16px] text-[#917108]'>Size:</span>
                    <div className="flex items-center gap-1 actions">
                        <Button className={`${ProductActionIndex === 0 ? '!bg-primary !text-white' : ''}`} onClick={()=>setProductActionIndex(0)}>S</Button>
                        <Button className={`${ProductActionIndex === 1 ? '!bg-primary !text-white' : ''}`} onClick={()=>setProductActionIndex(1)}>M</Button>
                        <Button className={`${ProductActionIndex === 2 ? '!bg-primary !text-white' : ''}`} onClick={()=>setProductActionIndex(2)}>L</Button>
                        <Button className={`${ProductActionIndex === 3 ? '!bg-primary !text-white' : ''}`} onClick={()=>setProductActionIndex(3)}>XL</Button>
                    </div>
                </div>

                <p className='text-[14px] text-[#917108] mt-4 mb-2'>Est. Delivery Time 2-3 Days</p>

                <div className="flex items-center mt-4 gap-4">
                    <div className="qtyBoxWrapper w-[70px]">
                        <QtyBox/>
                    </div>

                    <Button className="btn-org flex gap-2"><MdOutlineShoppingCart className='text-[18px]'/> Add to Cart</Button>
                </div>

                <div className="flex items-center gap-4 mt-4">
                   <span className='flex items-center gap-2 text-[16px] link cursor-pointer font-[500] text-[#c5a059]'> <FaRegHeart className='text-[18px]'/> Add to Wishlist</span>

                   <span className='flex items-center gap-2 text-[16px] link cursor-pointer font-[500] text-[#c5a059]'> <GoGitCompare className='text-[18px]'/> Add to Compare</span>
                </div>
    </>
  )
}

export default ProductDetailsComponent;