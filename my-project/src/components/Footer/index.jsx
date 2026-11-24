import React, { useContext } from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";
import { TfiGift } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Button from "@mui/material/Button"
import { AiOutlineClose } from "react-icons/ai";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaSquareFacebook } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

import Drawer from '@mui/material/Drawer';
import CartPanel from '../CartPanel';
import { Mycontext } from '../../App';




const Footer = () => {

    const context = useContext(Mycontext);

  return (
    <>
    <footer className='py-6 bg-black border-2 border-[#917108]'>
        <div className="conatiner">
            <div className="flex items-center justify-center gap-2 py-8 pb-8">
                <div className="col flex items-center justify-center flex-col group w-[15%]">
                    <LiaShippingFastSolid className='text-[40px] text-[#917108] transition-all duration-300 group-hover:text-red-600 group-hover:-translate-y-2'/>
                    <h3 className='text-[16px] font-[600] mt-3 text-[#917108]'>Free Shipping</h3>
                    <p className='text-[12px] font-[500] text-[#c5a059]'>For all orders over 999/-Rs</p>
                </div>

                <div className="col flex items-center justify-center flex-col group w-[15%]">
                    <GiReturnArrow className='text-[40px] text-[#917108] transition-all duration-300 group-hover:text-red-600 group-hover:-translate-y-2'/>
                    <h3 className='text-[16px] font-[600] mt-3 text-[#917108]'>7 Days Return</h3>
                    <p className='text-[12px] font-[500] text-[#c5a059]'>For an Exchange Product</p>
                </div>

                <div className="col flex items-center justify-center flex-col group w-[15%]">
                    <GiWallet className='text-[40px] text-[#917108] transition-all duration-300 group-hover:text-red-600 group-hover:-translate-y-2'/>
                    <h3 className='text-[16px] font-[600] mt-3 text-[#917108]'>Secured Payment</h3>
                    <p className='text-[12px] font-[500] text-[#c5a059]'>Payment Card Accepted</p>
                </div>

                <div className="col flex items-center justify-center flex-col group w-[15%]">
                    <TfiGift className='text-[40px] text-[#917108] transition-all duration-300 group-hover:text-red-600 group-hover:-translate-y-2'/>
                    <h3 className='text-[16px] font-[600] mt-3 text-[#917108]'>Special Gift</h3>
                    <p className='text-[12px] font-[500] text-[#c5a059]'>Our First Product Order</p>
                </div>

                <div className="col flex items-center justify-center flex-col group w-[15%]">
                    <BiSupport className='text-[40px] text-[#917108] transition-all duration-300 group-hover:text-red-600 group-hover:-translate-y-2'/>
                    <h3 className='text-[16px] font-[600] mt-3 text-[#917108]'>Support 24/7</h3>
                    <p className='text-[12px] font-[500] text-[#c5a059]'>Connect us Anytime</p>
                </div>

            </div>

            <br />
            <hr />

            <div className="footer flex py-8">
                <div className="part1 pl-14 w-[25%] border-r border-[#ff5252]">
                    <h2 className='text-[#917108] text-[18px] font-[600] mb-4'>Contact us</h2>
                    <p className='text-[#c5a059] text-[13px] font-[400] pb-4'>Velflex india private limited - <br /> Noida sector 62 near <br />indus vally school u.p.</p>

                    <Link className='link text-[#c5a059] text-[13px]' to='mailto:someone@example.com'>Support@velflex.com</Link>

                    <span className='text-[22px] font-[600] block w-full mt-3 mb-5 text-[#ff5252]'>(+91) 6307-133-667</span>

                    <div className="flex items-center gap-2">
                        <HiOutlineChatAlt2 className='text-[#ff5252] text-[40px]'/>
                        <span className='text-[16px] font-[600] pl-2 text-[#c5a059]'>Online Chat <br />
                        Get Expert Help</span>
                    </div>
                </div>

                <div className="part2 w-[40%] flex">
                    <div className="part2_col1 w-[50%] pl-5">
                        <h2 className='text-[18px] font-[600] mb-4 text-[#917108]'>Products</h2>

                        <ul className="list">
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Prices drop</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>New products</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Best sales</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Sitemap</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Stores</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Handmade</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Contact us</Link></li>
                            
                        </ul>
                    </div>

                    <div className="part2_col1 pl-5 w-[50%] border-r border-[#ff5252]">
                        <h2 className='text-[18px] font-[600] mb-4 text-[#917108]'>Our Company</h2>

                        <ul className="list">
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Delivery</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Legal Notice</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Terms and condition of use</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>About us</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Secure payment</Link></li>
                            <li className="list-none text-[14px] w-full mb-2 text-[#c5a059]"><Link to='/' className='link'>Quality first priority</Link></li>
                            
                        </ul>
                    </div>
                </div>

                <div className="part2 w-[35%] flex pl-5 pr-14 flex-col">
                    <h2 className="text-[#917108] text-[18px] font-[600] mb-4">Subscribe to newsletter</h2>
                    <p className='text-[#c5a059] text-[13px]'>Subscribe to our latest newsletter to get news about special discount.</p>

                    <form action="" className='mt-5'>
                        <input type="text" className='w-full h-[45px] outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[#917108]' placeholder='Your Email Address' />

                        <Button className='btn-org'>SUBSCRIBE</Button>

                        <FormControlLabel control={<Checkbox sx={{color: '#c5a059', '&.Mui-checked': {color: '#ff5252',},}}/>} label="I agree to the term and conditions and the privacy policy" />
                    </form>
                </div>
            </div>

        </div>
    </footer>

    <div className="bottomStrip border-t border-[#917108] py-3">
        <div className="container flex items-center justify-between">
            <ul className='flex items-center gap-2'>
                <li className="list-none">
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[#917108] flex items-center justify-center hover:bg-primary transition-all'>
                     <FaSquareFacebook className='text-[16px] group-hover:text-white'/>
                    </Link>
                </li>
                <li className="list-none">
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[#917108] flex items-center justify-center hover:bg-primary transition-all'>
                     <ImYoutube2 className='text-[20px] group-hover:text-white'/>
                    </Link>
                </li>
                <li className="list-none">
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[#917108] flex items-center justify-center hover:bg-primary transition-all'>
                     <FiInstagram className='text-[16px] group-hover:text-white'/>
                    </Link>
                </li>
            </ul>

            <p className='text-[#917108]'>@ 2027 - Platform design by Velflex (G.K.)</p>
        </div>
    </div>

      <Drawer open={context.openCartPanel} onClose={context.toggleCartPanel(false)} anchor={"right"} className='cartPanel'>
        <div className="flex items-center justify-between p-3 px-4 gap-3 border-b border-[#917108]">
          <h4 className='text-[#917108]'>Shopping Cart (1)</h4>
          <AiOutlineClose className='text-[20px] text-[#917108] cursor-pointer' onClick={context.toggleCartPanel(false)}/>
        </div>

        <CartPanel/>
      </Drawer>
    </>
  )
}

export default Footer;
