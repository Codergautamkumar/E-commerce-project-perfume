import React, { useContext } from 'react'
import '../productItem/style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Mycontext } from '../../App';




const ProductItem = () => {

    const context = useContext(Mycontext);

  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-[#917108] bg-black flex items-center">
        <div className="group ImgWrapper w-[20%] rounded-md relative">
            <Link to=''>
             <div className="img h-[180px] overflow-hidden rounded-sm">
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" className='w-full'/>

                <img src="https://www.dazzeandblussh.com/cdn/shop/files/bg_jasmine_aura_main.webp?v=1783791513&width=400" className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 h-[180px] group-hover:scale-105'/>
             </div>
            </Link>

            <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]'>10% Off</span>

            <div className="actions absolute top-[200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[35px] transition-all duration-700 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
                <Tooltip describeChild placement="left-start">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white' onClick={() => context.setOpenProductDetailsModal(true)}><MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white'/></Button>
                </Tooltip>

                <Tooltip describeChild placement="left-start">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white'><GoGitCompare className='text-[18px] !text-black group-hover:text-white hover:!text-white'/></Button>
                </Tooltip>

                <Tooltip describeChild placement="left-start">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white'><FaRegHeart className='text-[18px] !text-black group-hover:text-white hover:!text-white'/></Button>
                </Tooltip>
            </div>
            
        </div>
        <div className="info p-2 py-5 px-8 w-[80%] ">
            <h6 className='text-[15px] !font-[400] text-[#917108]'><Link to='/' className='link transition-all'>Velflex Dicto-Jammer</Link></h6>
            <h3 className='text-[18px] title mt-2 font-[500] mb-3 text-[#c5a059]'><Link to='/' className='link transition-all'>Best perfume which is provide fragnace like orange</Link></h3>
            <p className='text-[14px] mb-3 text-[#c5a059]'>Fresh, bold, and endlessly wearable. Crafted with vibrant citrus top notes, a smooth aromatic heart, Velflex transitions seamlessly from morning meetings to late-night plans. One spray is all it takes to make your presence unforgettable.</p>
            <Rating name="size-small" defaultValue={4} size="small" readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>

            <div className="flex items-center gap-4">
                <span className="oldPrice line-through text-[#917108] text-[15px] font-[600]">1200/-RS</span>
                <span className="price text-[#ff5252] text-[15px] font-[600]">999/-RS</span>
            </div>

            <div className="mt-3">
                <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[22px]'/> Add to cart</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem;