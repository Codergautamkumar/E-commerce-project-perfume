import React from 'react'
import { IoTimerOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";



const BlogItem = () => {
  return (
    <div className="blogItem">
        <div className="imgWrapper group w-full overflow-hidden rounded-md cursor-pointer">
            <img src="https://templatekit.kitprostudio.com/grance/wp-content/uploads/sites/280/2026/08/testi-2.jpg" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt=" blog image" />

            <span className="flex items-center justify-center text-white absolute bottom-[200px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
                <IoTimerOutline className='text-[16px]'/> 2 Jan, 2027
            </span>
        </div>

        <div className="info py-4">
            <h2 className='text-[15px] font-[600] mb-1 text-[#917108]'>
                <Link to='/' className='link'>long-lasting Middle Eastern perfumery</Link>
            </h2>
            <p className='text-[12px] font-[600] text-[rgb(197,160,89)] mb-4'>
                While they do not have a dedicated mainstream blog, you can read community reviews and find product listings on platforms like the expensive collection, and offering high-end fragrance experiences
            </p>

            <Link className='link font-[600] text-[14px] flex items-center gap-1 text-[#917108]'>Read More <IoIosArrowForward/> </Link>
        </div>
    </div>
  )
}

export default BlogItem;