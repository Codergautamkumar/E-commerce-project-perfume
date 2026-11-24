import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <section className="py-10">
        <div className="container flex gap-5">
            <div className="leftCol w-[70%]">
                <div className="card bg-black shadow-md p-5 rounded-md w-full">
                    <h1 className='text-[#917108]'>Billing Details</h1>

                    <form className='w-full mt-5'>
                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[50%]">
                                <TextField label="Full Name" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>

                            <div className="col w-[50%]">
                                <TextField type='email' label="Email" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>

                        <h6 className='text-[#917108] text-[14px] font-[500] mb-3'>Street Address *</h6>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField label="House no. & Street Name" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField label="Apartment, suite, unit, etc.(landmark)" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField type='text' label="Town / City *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField type='text' label="State *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                            <div className="col w-[100%]">
                                <TextField type='text' label="Country *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>

                        <h6 className='text-[#917108] text-[14px] font-[500] mb-3'>Postcode / Zip *</h6>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField label="Zipcode *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField label="Phone NO. *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <div className="rightcol w-[30%]">
                <div className="card shadow-md bg-black p-5 rounded-md">
                    <h2 className="text-[#917108] mb-4">Your Order</h2>

                    <div className="flex items-center justify-between py-3 border-t border-b border-[#c5a059]">
                        <span className='text-[14px] text-[600] text-[#c5a059]'>Product</span>
                        <span className='text-[14px] text-[600] text-[#c5a059]'>Subtotal</span>
                    </div>

                    <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pt-2 pr-2 mb-5">

                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="../../../public/tempimg.jpg" className='w-full transiton-all group-hover:scale-105'/>
                            </div>

                            <div className="info">
                                <h4 className='text-[#c5a059] text-[14px]'>Velflex dicto-jam...</h4>
                                <span className='text-[#ff5252] text-[13px]'>Qty : 1</span>
                            </div>

                        </div>

                        <span className='text-[#ff5252] font-[500] text-[14px]'>1999/-RS</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="../../../public/tempimg.jpg" className='w-full transiton-all group-hover:scale-105'/>
                            </div>

                            <div className="info">
                                <h4 className='text-[#c5a059] text-[14px]'>Velflex dicto-jam...</h4>
                                <span className='text-[#ff5252] text-[13px]'>Qty : 1</span>
                            </div>

                        </div>

                        <span className='text-[#ff5252] font-[500] text-[14px]'>1999/-RS</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="../../../public/tempimg.jpg" className='w-full transiton-all group-hover:scale-105'/>
                            </div>

                            <div className="info">
                                <h4 className='text-[#c5a059] text-[14px]'>Velflex dicto-jam...</h4>
                                <span className='text-[#ff5252] text-[13px]'>Qty : 1</span>
                            </div>

                        </div>

                        <span className='text-[#ff5252] font-[500] text-[14px]'>1999/-RS</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="../../../public/tempimg.jpg" className='w-full transiton-all group-hover:scale-105'/>
                            </div>

                            <div className="info">
                                <h4 className='text-[#c5a059] text-[14px]'>Velflex dicto-jam...</h4>
                                <span className='text-[#ff5252] text-[13px]'>Qty : 1</span>
                            </div>

                        </div>

                        <span className='text-[#ff5252] font-[500] text-[14px]'>1999/-RS</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="../../../public/tempimg.jpg" className='w-full transiton-all group-hover:scale-105'/>
                            </div>

                            <div className="info">
                                <h4 className='text-[#c5a059] text-[14px]'>Velflex dicto-jam...</h4>
                                <span className='text-[#ff5252] text-[13px]'>Qty : 1</span>
                            </div>

                        </div>

                        <span className='text-[#ff5252] font-[500] text-[14px]'>1999/-RS</span>
                    </div>
                    </div>

                    <Button className='btn-org btn-lg w-full flex gap-2 items-center'><BsFillBagCheckFill className='text-[20px]'/>Checkout</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout;
