import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";




const Register = () => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <section className="section py-10">
        <div className="container">
            <div className="card shadow-md w-[400px] m-auto rounded-md bg-black p-5 px-10">
                <h3 className='text-[#917108] text-center text-[20px]'>Register with a new account</h3>

                <form className='w-full mt-5'>
                    <div className="form-group w-full mb-5 bg-[#121212]">
                        <TextField type='text' id="name" label="Full Name" variant="outlined" className='w-full' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                    </div>

                    <div className="form-group w-full mb-5 bg-[#121212]">
                        <TextField type='email' id="email" label="Email Id *" variant="outlined" className='w-full' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                    </div>

                    <div className="form-group w-full mb-5 bg-[#121212] relative">
                        <TextField type={isPasswordShow===false ? 'password' : 'text'} id="password" label="Password *" variant="outlined" className='w-full' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>

                        <Button className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#c5a059]" onClick={() =>{setIsPasswordShow(!isPasswordShow)}}> 
                            { isPasswordShow===false ? <IoEye className='text-[20px] opacity-75'/> :
                                 <IoEyeOff className='text-[20px] opacity-75'/>
                            }
                         </Button>
                    </div>


                    <div className="flex items-center w-full mt-3">
                        <Button className='btn-org w-full'>Sign Up</Button>
                    </div>

                    <p className='text-[#c5a059] text-center font-[500]'>Already have an account ? <Link className='link text-[14px] cursor-pointer font-[600] !text-[#917108]' to="/login">Login</Link></p>

                    <p className='text-center font-[500] text-[#c5a059]'>Or continue with social account</p>

                    <Button className='flex gap-3 w-full !bg-[#121212] btn-lg !text-[#ff5252]'><FcGoogle className='text-[20px]'/> Login with Google</Button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register;