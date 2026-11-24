import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TiDelete } from "react-icons/ti";
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CartItems = (props) => {

  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setCartItems] = useState(props.size);
  const openSize = Boolean(sizeanchorEl);

  const [qtyeanchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyeanchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if(value!==null){
        setCartItems(value)
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if(value!==null){
        setSelectedQty(value)
    }
  };

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

                         <div className="flex items-center gap-4 mt-2">
                            <div className='relative'>
                                <span className='flex items-center justify-center bg-[#121212] text-[11px] text-[#fff] font-[600] py-1 px-2 rounded-md cursor-pointer' onClick={handleClickSize}>Size: {selectedSize} <GoTriangleDown /> </span>

                                <Menu
                                  id="size-menu"
                                  anchorEl={sizeanchorEl}
                                  open={openSize}
                                  onClose={()=>handleCloseSize(null)}
                                  MenuListProps={{
                                   'aria-labelledby': 'basic-button',
                                  }}
                                >
                                <MenuItem onClick={()=>handleCloseSize('S')}>S</MenuItem>
                                <MenuItem onClick={()=>handleCloseSize('M')}>M</MenuItem>
                                <MenuItem onClick={()=>handleCloseSize('L')}>L</MenuItem>
                                <MenuItem onClick={()=>handleCloseSize('XL')}>XL</MenuItem>
                                <MenuItem onClick={()=>handleCloseSize('XXL')}>XXL</MenuItem>
                                </Menu>
                            </div>

                            <div className="relative">
                                <span className='flex items-center justify-center bg-[#121212] text-[11px] text-[#fff] font-[600] py-1 px-2 rounded-md cursor-pointer' onClick={handleClickQty}>Qty: {selectedQty}<GoTriangleDown /> </span>

                                <Menu
                                  id="size-menu"
                                  anchorEl={qtyeanchorEl}
                                  open={openQty}
                                  onClose={()=>handleCloseQty(null)}
                                  MenuListProps={{
                                   'aria-labelledby': 'basic-button',
                                  }}
                                >
                                <MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
                                <MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
                                <MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
                                <MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
                                <MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
                                </Menu>
                            </div>
                         </div>

                       <div className="flex items-center gap-4 mt-3">
                         <span className="price text-[#ff5252] text-[14px] font-[600]">999/-RS</span>
                         <span className="oldPrice line-through text-[#917108] text-[14px] font-[600]">1200/-RS</span>
                         <span className="price text-[#ff5252] text-[14px] font-[600]">55% Off</span>
                      </div>
                    </div>
                </div>
  )
}

export default CartItems;