import React from 'react'
import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItems from './cartItems';




const CartPage = () => {


  return (
   <section className="section py-5 pb-10">
    <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">

            <div className="shadow-md rounded-md bg-black">
                <div className="py-2 px-3 border-b border-[#121212]">
                    <h2 className='text-[#917108]'>Your Cart</h2>
                    <p className="mt-0 text-[#c5a059]">There are <span className="font-bold text-[#ff5252]">2</span> products in your cart</p>
                </div>

               <CartItems size="S" qty={1}/>
               <CartItems size="S" qty={1}/>
               <CartItems size="S" qty={1}/>
               <CartItems size="S" qty={1}/>
            </div>
        </div>

        <div className="rightPart w-[30%]">
            <div className="shadow-md rounded-md bg-black p-5">
                <h3 className='text-[#917108] pb-3'>CART TOTALS</h3>
                <hr />

                <p className="flex items-center justify-between">
                    <span className='text-[#c5a059] text-[14px] font-[500]'>Subtotal</span>
                    <span className='text-[#ff5252] text-[14px] font-[500]'>1999/-Rs</span>
                </p>

                <p className="flex items-center justify-between">
                    <span className='text-[#c5a059] text-[14px] font-[500]'>Shipping</span>
                    <span className='text-[#ff5252] text-[14px] font-[500]'>Free</span>
                </p>

                <p className="flex items-center justify-between">
                    <span className='text-[#c5a059] text-[14px] font-[500]'>Estimate for</span>
                    <span className='text-[#ff5252] text-[14px] font-[500]'>India Delhi</span>
                </p>

                <p className="flex items-center justify-between">
                    <span className='text-[#c5a059] text-[14px] font-[500]'>TOTAL</span>
                    <span className='text-[#ff5252] text-[14px] font-[500]'>1999/-Rs</span>
                </p>
                <br />

                <Button className='btn-org btn-lg flex w-full gap-2'><BsFillBagCheckFill className='text-[20px]'/> CheckOut</Button>
            </div>
        </div>
    </div>
   </section>
  )
}


export default CartPage;