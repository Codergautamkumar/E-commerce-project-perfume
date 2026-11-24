import React from 'react'
import { MdCloudUpload } from "react-icons/md";
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router';

const AccountSidebar = () => {
  return (
    <div className="card bg-black shadow-md rounded-md sticky top-[10px]">
                    <div className="w-full p-5 flex items-center justify-center flex-col">
                        <div className='w-[80px] h-[80px] rounded-full overflow-hidden mb-4 relative group'>
                            <img src="https://img.magnific.com/free-photo/portrait-smiling-indian-person-posing-front-camera_482257-122324.jpg?semt=ais_hybrid&w=740&q=80" className='w-full h-full object-cover' />

                            <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                                <MdCloudUpload className='text-[25px] text-[#c5a059]'/>
                                <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0'/>
                            </div>
                        </div>

                        <h3 className='text-[#917108]'>Rashi Sharma</h3>
                        <h6 className='text-[#c5a059] text-[13px] font-[500]'>gauravsingh44550@gmail.com</h6>
                    </div>

                    <ul className="list-none pb-5 myAccountTabs">
                        <li className="w-full">
                            <NavLink to='/my-account' exact={true} activeClassName='isActive'>
                            <Button className='w-full !text-left !PY-2 !px-5 !justify-start !text-[#c5a059] !capitalize !rounded-none flex items-center gap-2'> <FaRegUser className='text-[15px]'/> User Profile</Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to='/my-list' exact={true} activeClassName='isActive'>
                            <Button className='w-full !text-left !PY-2 !px-5 !justify-start !text-[#c5a059] !capitalize !rounded-none flex items-center gap-2'> <FaRegHeart className='text-[15px]'/>My List</Button>
                            </NavLink>
                        </li>

                        <li className="w-full">
                            <NavLink to='/my-orders' exact={true} activeClassName='isActive'>
                            <Button className='w-full !text-left !PY-2 !px-5 !justify-start !text-[#c5a059] !capitalize !rounded-none flex items-center gap-2'> <BsBagCheck className='text-[15px]'/>My Orders</Button>
                            </NavLink>
                        </li>

                        <li className="w-full">
                            
                            <Button className='w-full !text-left !PY-2 !px-5 !justify-start !text-[#c5a059] !capitalize !rounded-none flex items-center gap-2'> <IoIosLogOut className='text-[18px]'/> Logout</Button>
                           
                        </li>
                    </ul>
                </div>
  )
}

export default AccountSidebar;