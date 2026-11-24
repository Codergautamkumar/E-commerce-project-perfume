import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from './CategoryPanel';

import '../Navigation/style.css';



const Navigation = () => {

    const[isOpenCatpanel, setIsOpenCatPanel] = useState(false);

    const openCategorypanel=()=>{
        setIsOpenCatPanel(true)

    }
  return (
    <><nav className='bg-black !text-[#917108]'>
        <div className="container flex items-center justify-end gap-8">
            <div className="col_1 w-[20%] bg-black">
                <Button className='!text-[#917108] gap-2 w-full' onClick={openCategorypanel}><HiOutlineMenuAlt1 className='text-[18px]'/>Shop by categories <FaAngleDown className='text-[14px] ml-auto font-bold'/></Button>
            </div>
            
            <div className="col_2 w-[60%]">
                <ul className='flex items-center gap-8 nav'>
                    <li className='list-none'>
                        <Link className='link transition text-[14px] font-[500]'>
                          <Button className='link transition !font-[500] !text-[#917108] hover:!text-[#ff5252] !py-3'>Home</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link className='link transition text-[14px] font-[500]'>
                          <Button className='link transition !font-[500] !text-[#917108] hover:!text-[#ff5252] !py-3'>Fragrance</Button>
                        </Link>
                    </li>
                    <li className='list-none relative'>
                        <Link className='link transition text-[14px] font-[500]'>
                          <Button className='link transition !font-[500] !text-[#917108] hover:!text-[#ff5252] !py-3'>Fashion</Button>
                        </Link>

                                             {/** SUB ITEM IN MEN */}

                        <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                            <ul>
                                <li className="list-none w-full relative">
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[#917108] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                          <ul>
                                            <li className="list-none w-full">
                                              <Link to='/' className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Shirt</Button>
                                              </Link>
                                            </li>
                                            <li className="list-none w-full">
                                              <Link to='/' className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                              </Link>
                                            </li>
                                            <li className="list-none w-full">
                                              <Link to='/' className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Italian Pant</Button>
                                              </Link>
                                            </li>

                                          </ul>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-none w-full">
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[#917108] w-full !text-left !justify-start !rounded-none'>Women</Button>
                                    </Link>
                                </li>
                                <li className="list-none w-full">
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[#917108] w-full !text-left !justify-start !rounded-none'>Girl</Button>
                                    </Link>
                                </li>
                                <li className="list-none w-full">
                                    <Link to='/' className='w-full'>
                                    <Button className='!text-[#917108] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </li>
                    <li className='list-none'>
                        <Link className='link transition text-[14px] font-[500]'>
                          <Button className='link transition !font-[500] !text-[#917108] hover:!text-[#ff5252] !py-3'>Watches</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link className='link transition text-[14px] font-[500]'>
                          <Button className='link transition !font-[500] !text-[#917108] hover:!text-[#ff5252] !py-3'>Footwear</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link className='link transition text-[14px] font-[500]'>
                          <Button className='link transition !font-[500] !text-[#917108] hover:!text-[#ff5252] !py-3'>Beauty</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link className='link transition text-[14px] font-[500]'>
                          <Button className='link transition !font-[500] !text-[#917108] hover:!text-[#ff5252] !py-3'>HandCraft</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col_3 w-[20%]"><p className='text=[14px] font=[500] flex items-center gap-3 mb-0 mt-0'>
                <IoRocketOutline />
                Free international delivery
                </p>
            </div>

        </div>
    </nav>
    
    {/* Category Pannel component*/}
    
    <CategoryPanel isOpenCatpanel={isOpenCatpanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
    </>
  )
}

export default Navigation;