import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdOutlineDashboard } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from 'react-collapse';




const Sidebar = () => {

    const [subMenuIndex, setSubMenuIndex] = useState(null);
    const isOpenSubmenu = (index) => {
        if(subMenuIndex===index){
            setSubMenuIndex(null);
        }else{
            setSubMenuIndex(index);
        }
    }
  return (
    <>
       <div className="sidebar fixed top-0 left-0 bg-[#191927] w-[18%] h-full border-r border-[#e4e3ec] py-2 px-4">
        <div className="py-2 w-full">
            <Link to='/'> <img src="../../../public/logo2.jpeg" className='w-[400px]'/></Link>
        </div>

        <ul>
            <li>
                <Link to='/'>
                <Button className='w-full !capitalize !justify-start gap-3 !text-[16px] !text-[#00d7d2] !font-[500] !py-2'> <MdOutlineDashboard className='text-[20px]'/> Dashboard</Button>
                </Link>
            </li>

            <li><Button className='w-full !capitalize !justify-start gap-3 !text-[16px] !text-[#00d7d2] !font-[500] !py-2' onClick={()=>isOpenSubmenu(1)}> <FaImages className='text-[20px]'/> <span>Home Slides</span> <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center" > <FaAngleDown className={`transition-all  ${subMenuIndex === 1 ? 'rotate-180' : ''}`}/></span> 
            </Button>

            <Collapse isOpened={subMenuIndex === 1 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span> Home Banner List</Button>
                </li>
                <li className='w-full'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span>Add Home Banner Slide</Button>
                </li>
              </ul>
            </Collapse>
            </li>

            <li>
                <Link to='/users'>
                <Button className='w-full !capitalize !justify-start gap-3 !text-[16px] !text-[#00d7d2] !font-[500] !py-2'> <LuUsers className='text-[20px]'/> <span>Users</span></Button>
                </Link>
            </li>

            <li><Button className='w-full !capitalize !justify-start gap-3 !text-[16px] !text-[#00d7d2] !font-[500] !py-2' onClick={()=>isOpenSubmenu(3)}> <RiProductHuntLine className='text-[20px]'/> <span>Products</span><span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"> <FaAngleDown className={`transition-all  ${subMenuIndex === 3 ? 'rotate-180' : ''}`}/></span>
            </Button>
            <Collapse isOpened={subMenuIndex === 3 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                    <Link to='/products'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span> Products List</Button>
                    </Link>
                </li>
                <li className='w-full'>
                    <Link to='product/upload'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span>Product Upload</Button>
                    </Link>
                </li>
              </ul>
            </Collapse>
            </li>

            <li>
                <Button className='w-full !capitalize !justify-start gap-3 !text-[16px] !text-[#00d7d2] !font-[500] !py-2' onClick={()=>isOpenSubmenu(4)}> <MdOutlineCategory className='text-[20px]'/> <span>Category</span> <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"> <FaAngleDown className={`transition-all ${subMenuIndex === 4 ? 'rotate-180' : ''}`}/></span>
            </Button>
            <Collapse isOpened={subMenuIndex === 4 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                    <Link to='/categories'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span> Category List</Button>
                    </Link>
                </li>
                <li className='w-full'>
                    <Link to='/category/add'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span>Add a Category</Button>
                    </Link>
                </li>
                <li className='w-full'>
                    <Link to='/category/subcat'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span>Sub-Category List</Button>
                    </Link>
                </li>
                <li className='w-full'>
                    <Link to='/category/subcat/add'>
                    <Button className='!text-[#00d7d2] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-[#917108]'></span>Add a Sub-Category</Button>
                    </Link>
                </li>
              </ul>
            </Collapse>
            </li>

            <li>
                <Link to='/oders'>
                <Button className='w-full !capitalize !justify-start gap-3 !text-[16px] !text-[#00d7d2] !font-[500] !py-2'> <IoBagCheckOutline className='text-[20px]'/> <span>Orders</span></Button>
                </Link>
            </li>

            <li><Button className='w-full !capitalize !justify-start gap-3 !text-[16px] !text-[#00d7d2] !font-[500] !py-2'> <IoIosLogOut className='text-[20px]'/> LogOut</Button>
            </li>
        </ul>
       </div>
    </>
  )
}

export default Sidebar;