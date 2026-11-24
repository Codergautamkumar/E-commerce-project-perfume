import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountSidebar from '../../components/AccountSidebar';



const MyAccount = () => {
  return (
    <section className="py-10 w-full">
        <div className="container flex gap-5">
            <div className="col1 w-[20%]">
                <AccountSidebar/>
            </div>

            <div className="col2 w-[50%]">
                <div className="card bg-black p-5 shadow-md rounded-md">
                    <h2 className='text-[#917108] pb-3'>My Profile</h2>
                    <hr />

                    <form className='mt-5'>
                        <div className="flex items-center gap-5">
                            <div className='w-[50%]'>
                                <TextField label="Full Name *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                            <div className='w-[50%]'>
                                <TextField label="Email *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>
                        <div className="flex items-center mt-4 gap-5">
                            <div className='w-[50%]'>
                                <TextField label="Phone Number *" variant="outlined" className='w-full' size='small' sx={{"& .MuiInputLabel-root":{color: "#c5a059",}, "& .MuiInputLabel-root.Muifocused":{color: "#c5a059"}, "& .MuiOutlinedInput-input":{color: "#c5a059"},"& .MuiOutlinedInput-root": {"& fieldset": {borderColor: "#c5a059",}, "&:hover fieldset": {borderColor: "#c5a059",}, "&.Mui-focused fieldset": {borderColor: "#c5a059",},}}}/>
                            </div>
                        </div>
                        <br />

                        <div className="flex items-center gap-4">
                            <Button className='btn-org btn-lg w-[100px]'>Save</Button>
                            <Button className='btn-org btn-border btn-lg w-[100px]'>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MyAccount;
