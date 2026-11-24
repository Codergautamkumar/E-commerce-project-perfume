import React from 'react'
import { Link } from 'react-router-dom';
import { TiDelete } from "react-icons/ti";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


const MyListItems = () => {

  return (
     <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[#121212]">
                    <div className="img w-[15%] rounded-md overflow-hidden">
                        <Link to="/product/7845" className='group'>
                            <img src="../../../public/tempimg.jpg" className='w-full group-hover:scale-105 transition-all'/>
                        </Link>
                    </div>

                    <div className="info w-[85%] relative">
                        <TiDelete className='text-[#917108] text-[24px] cursor-pointer absolute top-0 right-0 link transition-all'/>
                         <span className='text-[13px] text-[#917108]'>Velflex dicto-jammer</span>
                         <h3 className='text-[15px] text-[#c5a059]'><Link className='link'>Velflex Fragrance Flip-o-coller </Link></h3>
                         <Rating name="size-small" defaultValue={4} size="small" readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>

                       <div className="flex items-center gap-4 mt-3 mb-2">
                         <span className="price text-[#ff5252] text-[14px] font-[600]">999/-RS</span>
                         <span className="oldPrice line-through text-[#917108] text-[14px] font-[600]">1200/-RS</span>
                         <span className="price text-[#ff5252] text-[14px] font-[600]">55% Off</span>
                      </div>

                      <Button className='btn-org btn-sm'>Add to Cart</Button>
                    </div>

                </div>
  )
}

export default MyListItems;