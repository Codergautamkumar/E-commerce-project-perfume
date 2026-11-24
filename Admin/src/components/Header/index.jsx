import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoIosNotifications } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";




const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))

const Header = () => {

    const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };


  return (
    <header className='w-full h-[auto] py-2 pl-72 pr-7 bg-[#191927] shadow-md flex items-center justify-between'>
        <div className="part1">
            <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[#00d7d2]'><HiOutlineMenuAlt2 className='text-[22px] text-[#00d7d2]'/></Button>
        </div>

        <div className="part2 w-[40%] flex items-center justify-end gap-5">
            <IconButton aria-label='cart'>
                <StyledBadge badgeContent={4} color="secondary">
                    <IoIosNotifications className='text-[25px] text-[#00d7d2]'/>
                </StyledBadge>
            </IconButton>

            <div className="relative">
                <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer" onClick={handleClickMyAcc}>
                <img src="../../../public/tempimg.jpg" className='w-full h-full object-cover'/>
                </div>

                <Menu
               anchorEl={anchorMyAcc}
               id="account-menu"
               open={openMyAcc}
               onClose={handleCloseMyAcc}
               onClick={handleCloseMyAcc}
               slotProps={{
               paper: {
               elevation: 0,
               sx: {
                  bgcolor: '#191927',
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
            <MenuItem onClick={handleCloseMyAcc}>
              <div className="flex items-center gap-3">
                <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer" >
                <img src="../../../public/tempimg.jpg" className='w-full h-full object-cover'/>
                </div>
                <div className="info">
                <h3 className='text-[#15px] text-[#e4e3ec] font-[500] leading-5'>Rashi Sharma</h3>
                <p className='text-[12px] text-[#8e72ee] font-[400] opacity-70'>rashisharma4412@gmail.com</p>
              </div>
              </div>
            </MenuItem>
            <Divider sx={{ borderColor: '#e4e3ec'}}/>

            <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
              <FaRegUser className='text-[#00d7d2] text-[18px]'/> <span className='text-[14px] text-[#e4e3ec]'>Profile</span>
            </MenuItem>

            <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
              <IoIosLogOut className='text-[#00d7d2] text-[18px]'/> <span className='text-[14px] text-[#e4e3ec]'>Sign Out</span>
            </MenuItem>

            
            </Menu>
            </div>
        </div>
    </header>
  )
}

export default Header;