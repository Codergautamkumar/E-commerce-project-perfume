import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Mycontext } from '../../App';




const ForgotPassword = () => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isPasswordShow2, setIsPasswordShow2] = useState(false);


    const context = useContext(Mycontext);
    const history = useNavigate();


  return (
    <section className="section py-10">
        <div className="container">
            <div className="card shadow-md w-[400px] m-auto rounded-md bg-black p-5 px-10">
                <h3 className='text-[#917108] text-center text-[20px]'>Forgot Password</h3>

                <form className='w-full mt-5'>
                    <div className="form-group w-full mb-5 bg-[#121212] relative">
                        <TextField type={isPasswordShow===false ? 'password' : 'text'} id="password" label="New Password" variant="outlined" className='w-full' name='name' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>

                        <Button className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#c5a059]" onClick={() =>{setIsPasswordShow(!isPasswordShow)}}> 
                            { isPasswordShow===false ? <IoEye className='text-[20px] opacity-75'/> :
                                 <IoEyeOff className='text-[20px] opacity-75'/>
                            }
                         </Button>
                    </div>

                    <div className="form-group w-full mb-5 bg-[#121212] relative">
                        <TextField type={isPasswordShow2===false ? 'password' : 'text'} id="confirmpassword" label="Confirm Password" variant="outlined" className='w-full' name='password' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>

                        <Button className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#c5a059]" onClick={() =>{setIsPasswordShow2(!isPasswordShow2)}}> 
                            { isPasswordShow2===false ? <IoEye className='text-[20px] opacity-75'/> :
                                 <IoEyeOff className='text-[20px] opacity-75'/>
                            }
                         </Button>
                    </div>


                    <div className="flex items-center w-full mt-3">
                        <Button className='btn-org w-full'>Chnage Password</Button>
                    </div>

                </form>
            </div>
        </div>
    </section>
  )
}

export default ForgotPassword;