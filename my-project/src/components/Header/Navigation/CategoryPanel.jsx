import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { LuCopyPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { TbCopyMinus } from "react-icons/tb";






const CategoryPanel = (props) => {


     const [submenuIndex, setSubmenuIndex] = useState(null);
     const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen)
  };    

  const openSubmenu=(index)=>{
    if (submenuIndex===index) {
      setSubmenuIndex(null);
    }else{
      setSubmenuIndex(index);
    }
  }

  const openInnerSubmenu=(index) => {
    if (innerSubmenuIndex===index) {
      setInnerSubmenuIndex(null);
    }else{
      setInnerSubmenuIndex(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >

        <h3 className='p-3 text-[18px] font-[500] flex items-center justify-between'>Shop By Categories <IoMdClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/></h3>

        <div className="scroll">
          <ul className="w-full">
            <li className="list-none flex items-center relative">
              <Link to='/' className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[#917108]'>Fashion</Button>
              </Link>

              {
                submenuIndex===0 ? (
                  <TbCopyMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                ) : (
                  <LuCopyPlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                )
              }                                  

                                                {/**SUB MENU */}
                {
                  submenuIndex===0 &&
                  <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link to='/'>
                  <Button className='w-full !text-left !justify-start !px-3 !text-[#917108]'>Apparel</Button>
                  </Link>

                  {
                    innerSubmenuIndex===0 ? (
                      <TbCopyMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/> 
                    ) : (
                      <LuCopyPlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                    )
                  }
                        

                                                {/**INNER SUB MERNU */}
                    {
                      innerSubmenuIndex===0 &&
                      <ul className="inner_submenu absolute top-[100%] left-[0%] w-full pl-3">

                         <li className="list-none relative mb-1">
                           <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Tablet</Link>
                         </li>

                         <li className="list-none relative mb-1">
                           <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Crepe T-Shirt</Link>
                         </li>

                         <li className="list-none relative mb-1">
                           <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather Watch</Link>
                         </li>

                         <li className="list-none relative mb-1">
                           <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond</Link>
                         </li>
                     </ul>
                    }
                  
                </li>
              </ul>
                }


            </li>
          </ul>
        </div>
      
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatpanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;