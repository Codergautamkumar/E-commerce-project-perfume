import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


const Sidebar = () => {

    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
    const [priceRange, setpriceRange] = useState([100, 5000]);
    const Slider = RangeSlider.default || RangeSlider;
    
  return (
    <aside className="sidebar">
        <div className="box">
            <h3 className='text-[#917108] text-[16px] font-[600] flex items-center pr-5'>Filter By 
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#c5a059]' onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                    {
                        isOpenCategoryFilter===true ? <FaAngleUp /> : <FaAngleDown />
                    }
                    
                    </Button>
            </h3>
            <Collapse isOpened={isOpenCategoryFilter}>
            <div className="scroll px-4 relative -left-[13px]">
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Fragrance" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Fashion" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Watches" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Footware" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Beauty" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="HandCraft" className='w-full'/>
            </div>
            </Collapse>
        </div>

        <div className="box">
            <h3 className='text-[#917108] text-[16px] font-[600] flex items-center pr-5'>Availability 
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#c5a059]' onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}>
                    {
                        isOpenAvailFilter===true ? <FaAngleUp /> : <FaAngleDown />
                    }
                    
                    </Button>
            </h3>
            <Collapse isOpened={isOpenAvailFilter}>
            <div className="scroll px-4 relative -left-[13px]">
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Available (17)" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="In Stock (10)" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Not Available" className='w-full'/>
                
            </div>
            </Collapse>
        </div>

        <div className="box mt-3">
            <h3 className='text-[#917108] text-[16px] font-[600] flex items-center pr-5'>Size 
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#c5a059]' onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                    {
                        isOpenSizeFilter===true ? <FaAngleUp /> : <FaAngleDown />
                    }
                    
                    </Button>
            </h3>
            <Collapse isOpened={isOpenSizeFilter}>
            <div className="scroll px-4 relative -left-[13px]">
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Small (17)" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Medium (10)" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="Large (15)" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="XL (12)" className='w-full'/>
                <FormControlLabel control={<Checkbox size="small" sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="XXL (5)" className='w-full'/>
                
            </div>
            </Collapse>
        </div>

        <div className="box">
            <h3 className='text-[#917108] mb-3 text-[16px] font-[600] flex items-center pr-5'>Filter By Price 
            </h3>

            <Slider min={0} max={5000} step={100} value={priceRange} onInput={(val) => setpriceRange(val)}/>
                <div className="flex pt-4 pb-2 priceRange">
                <span className='text-[13px] text-[#917108]'>
                    From: <strong className='text-dark text-[#c5a059]'>Rs: {100}</strong>
                </span>
                <span className='ml-auto text-[#917108]'>
                    From: <strong className='text-dark text-[#c5a059]'>Rs: {500}</strong>
                </span>
            </div>
            
        </div>

        <div className="box">
            <h3 className='text-[#917108] mb-3 text-[16px] font-[600] flex items-center pr-5'>Filter By Rating
            </h3>
            <div className="w-full">
                <Rating name='size-small' defaultValue={5} size='small' readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
            </div>
            <div className="w-full">
                <Rating name='size-small' defaultValue={4} size='small' readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
            </div>
            <div className="w-full">
                <Rating name='size-small' defaultValue={3} size='small' readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
            </div>
            <div className="w-full">
                <Rating name='size-small' defaultValue={2} size='small' readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
            </div>
            <div className="w-full">
                <Rating name='size-small' defaultValue={1} size='small' readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar;
