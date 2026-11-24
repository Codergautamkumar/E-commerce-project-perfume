import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { BsCart4 } from "react-icons/bs";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { Mycontext } from '../../App';
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsBagCheck } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";





const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const context = useContext(Mycontext);

  return (
    <header className='bg-[#121212]'>
        <div className="top-strip py-2 border-t-[2px] border-[#917108] border-b-[2px]">
            <div className="container !text-[#917108]">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className="text-[14px] font-[500]">First time by & Get up to 50% off (offer for limited time)</p>
                    </div>
                    <div className="col2 flex items-center justify-end">
                        <ul className='flex items-center gap-3'>
                            <li className="list-none">
                                <Link to="/help-center" className='text-[13px] hover:text-red-300 font-[500] transition'>Help Center </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/order-tracking" className='text-[13px] hover:text-red-300 font-[500] transition'>Order Tracking</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/order-tracking" className='text-[13px] hover:text-red-300 font-[500] transition'>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header py-4 border-t-[2px] border-[#917108] border-b-[2px]">
            <div className="container flex items-center justify-between">
                <div className="col1 w-[25%]">
                    <Link to={"/"}><img src="/logo2.jpeg" alt='logo' style={{width: '150px' , height: 'auto' , objectFit: 'contain'}}/></Link>
                </div>

                <div className="col2 w-[40%]">
                    <Search />
                </div>

                <div className="col3 w-[35%] flex items-center pl-7 !text-[#c5a059]">
                    <ul className="flex items-center justify-end gap-3 w-full">

                    {
                        context.isLogin == false ?
                        (
                            <li className="list-none">
                            <Link to='/login' className='link transition text-[15px] font-[500]'>Login</Link> | &nbsp;
                            <Link to='/register' className='link transition text-[15px] font-[500]'>Sign-up</Link>
                        </li>
                        ) : (
                            <>
                            <Button className="!text-[#c5a059] MyAccountWrap flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-black'><FaRegUser className='text-[16px] text-[#917108]'/></Button>

                                <div className="info flex flex-col">
                                    <h4 className='leading-3 text-[14px] mb-0 capitalize text-[#917108] font-[500] text-left justify-start'>Gaurav singh</h4>
                                    <span className='text-[13px] capitalize text-left text-[#c5a059] font-[400] justify-start'>gauravsingh44550@gmail.com</span>
                                </div>
                            </Button>

                             <Menu
                             anchorEl={anchorEl}
                             id="account-menu"
                             open={open}
                             onClose={handleClose}
                             onClick={handleClose}
                             slotProps={{
                             paper: {
                             elevation: 0,
                             sx: {
                             overflow: 'visible',
                             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                             mt: 1.5,
                             '& .MuiAvatar-root': {
                             width: 32,
                             height: 32,
                             ml: -0.5,
                             mr: 1,
                             },
                             '&::before': {
                             content: '""',
                             display: 'block',
                             position: 'absolute',
                             top: 0,
                             right: 14,
                             width: 10,
                             height: 10,
                             bgcolor: 'background.paper',
                             transform: 'translateY(-50%) rotate(45deg)',
                             zIndex: 0,
                             },
                             },
                             },
                             }}
                             transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                             anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                             >
                             <Link to="/my-account" className='w-full block'>
                             <MenuItem onClick={handleClose} className='flex gap-2'>
                             <FaRegUser className='text-[18px]'/> <span className='text-[14px] !py-2'>My Account</span>
                             </MenuItem>
                             </Link>
                             <Link to="/my-orders" className='w-full block'>
                            <MenuItem onClick={handleClose} className='flex gap-2'>
                            <BsBagCheck className='text-[18px]'/> <span className='text-[14px] !py-2'>Orders </span>
                            </MenuItem>
                            </Link>
                            <Link to="/my-list" className='w-full block'>
                            <MenuItem onClick={handleClose} className='flex gap-2'>
                            <FaRegHeart className='text-[18px]'/><span className='text-[14px] !py-2'> My List </span>
                            </MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose} className='flex gap-2'>
                            <IoIosLogOut className='text-[18px]'/><span className='text-[14px] !py-2'> Logout </span>
                            </MenuItem>
                            </Menu>
                            </>
                        )
                    }
                        

                        <li>
                            <Tooltip title="Compare">
                             <IconButton aria-label="show 4 unread messages" style={{color: '#c5a059'}}>
                             <Badge badgeContent={4} sx={{ '& .MuiBadge-badge': { backgroundColor: '#c5a059', color:'#000'}}}>
                                <GoGitCompare />
                             </Badge>
                             </IconButton>
                             </Tooltip>
                        </li>


                        <li>
                            <Tooltip title="Wishlist">
                             <IconButton aria-label="show 4 unread messages" style={{color: '#c5a059'}}>
                             <Badge badgeContent={4} sx={{ '& .MuiBadge-badge': { backgroundColor: '#c5a059', color:'#000'}}}>
                                <FaRegHeart />
                             </Badge>
                             </IconButton>
                             </Tooltip>
                        </li>


                        <li>
                            <Tooltip title="Cart">
                             <IconButton aria-label="show 4 unread messages" style={{color: '#c5a059'}} onClick={()=>context.setOpenCartPanel(true)}>
                             <Badge badgeContent={4} sx={{ '& .MuiBadge-badge': { backgroundColor: '#c5a059', color:'#000'}}}>
                                <BsCart4 />
                             </Badge>
                             </IconButton>
                             </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

         <Navigation/>
    </header>
  )
}

export default Header;