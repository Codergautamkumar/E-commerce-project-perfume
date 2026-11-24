import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";




const QtyBox = () => {

    const [qtyVal, setQtyVal] = useState(1);

    const plusQty=()=>{
        setQtyVal(qtyVal+1)
    }

    const minusQty=()=>{
        if(qtyVal===1){
            setQtyVal(1)
        }else{
            setQtyVal(qtyVal-1)
        }
    }
  return (
    <div className="qtyBox flex items-center relative">
        <input type="number" className='w-full h-[40px] p-2 pl-5 text-[15px] focus:outline-none border border-[#917108] rounded-md bg-black text-green-800' value={qtyVal}/>

        <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-20">
            <Button className='!min-w-[30px] !w-[30px] !h-[20px] !text-green-800 !rounded-none hover:!bg-[#ff5252]' onClick={plusQty}><MdOutlineKeyboardArrowDown className='text-[20px] opacity-95'/></Button>
            <Button className='!min-w-[30px] !w-[30px] !h-[20px] !text-green-800 !rounded-none hover:!bg-[#ff5252]' onClick={minusQty}><MdOutlineKeyboardArrowUp className='text-[20px] opacity-95'/></Button>
        </div>
    </div>
  )
}

export default QtyBox;