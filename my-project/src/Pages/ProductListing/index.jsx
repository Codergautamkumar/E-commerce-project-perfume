import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem';
import ProductItemListView from '../../components/ProductItemListView';
import Button from '@mui/material/Button';
import { IoGrid } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';



const ProductListing = () => {
    const [itemView, setItemView] = useState('grid');
    const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='py-5 pb-0'>
        
        <div className="container">
            <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover"  href="/" className='link transition !text-[#c5a059] hover:!text-[#ff5252]'>
          Home
        </Link>
        <Link
          underline="hover"
         
          href="/"
          className='link transition !text-[#c5a059] hover:!text-[#ff5252]'
        >
          Fashion
        </Link>
            </Breadcrumbs>
        </div>

        <div className="bg-[#121212] p-2 mt-4">
            <div className="container flex gap-3">
            <div className="sidebarWrapper w-[20%] h-100 bg-black rounded-md pl-2 pr-2">
                <Sidebar/>
            </div>

            <div className="rightContent w-[80%] py-3">

                <div className="bg-black p-2 w-full mb-4 rounded-md flex items-center justify-between">
                    <div className="col1 flex items-center itemViewActions">
                        <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#917108] ${itemView === 'list' && 'active'}`}
                           onClick={()=>setItemView('list')}
                        >
                            <RiMenuLine className='text-[40px]'/></Button>
                        <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#917108] ${itemView === 'grid' && 'active'}`}
                           onClick={()=>setItemView('grid')}
                        >
                            <IoGrid className='text-[40px]'/></Button>

                        <span className='text-[14px] font-[500] pl-3 text-[#917108]'>There are 50+ products.</span>

                    </div>

                    <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                        <span className='text-[14px] font-[500] pl-3 text-[#917108]'>Short By:</span>

                         <Button
                         id={buttonId}
                         aria-controls={open ? menuId : undefined}
                         aria-haspopup="true"
                         aria-expanded={open}
                         onClick={handleClick}
                         className='!bg-[#121212] !text-[12px] !capitalize !border-2 !border-[#917108] !text-[#ff5252]'
                         >
                         Sales, highest to lowest
                         </Button>
                         <Menu
                         id={menuId}
                         anchorEl={anchorEl}
                         open={open}
                         onClose={handleClose}
                         slotProps={{
                            paper: {
                                sx: {
                                    backgroundColor: '#000000',
                                    color: '#917108'
                                },
                            },
                         list: {
                          'aria-labelledby': buttonId,
                         },
                         }}
                         >
                         <MenuItem onClick={handleClose} className='!text-[13px] !capitalize'>Sales, highest to lowest</MenuItem>
                         <MenuItem onClick={handleClose} className='!text-[13px] !capitalize'>Relevance</MenuItem>
                         <MenuItem onClick={handleClose} className='!text-[13px] !capitalize'>Name, A to Z</MenuItem>
                         <MenuItem onClick={handleClose} className='!text-[13px] !capitalize'>Name, Z to A</MenuItem>
                         <MenuItem onClick={handleClose} className='!text-[13px] !capitalize'>Price, low to high</MenuItem>
                         <MenuItem onClick={handleClose} className='!text-[13px] !capitalize'>Price, high to low</MenuItem>
                         </Menu>
                    </div>
                </div>


                <div className={`grid ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-1' } gap-4`}>
                    {
                        itemView === 'grid' ?
                        (
                            <>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        </>
                        ) : (
                            <>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        </>
                    )}
                </div>

                <div className="flex items-center justify-center mt-10">
                    <Pagination count={10} showFirstButton showLastButton />
                </div>

            </div>
        </div>
        </div>
    </section>
  )
}

export default ProductListing;
