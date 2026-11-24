import React, { useState } from 'react'
import DashboardBoxes from '../../components/DashboardBoxes';
import { FaHandsClapping } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { HiOutlinePlus } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from '../../components/Badge';


const Dashboard = () => {

    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

    const isShowOrderProduct=(index)=>{
        if(isOpenOrderProduct===index){
            setIsOpenOrderProduct(null);
        }else{
            setIsOpenOrderProduct(index);
        }
    };

  return (
    <>
    <div className="w-full py-3 px-5 border border-[#8e72ee] bg-[#f1f1f1] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
            <h1 className='text-[35px] font-bold leading-10 mb-3'>Good Morning, <br />
                Cameron <FaHandsClapping className='text-[#917108] text-[40px]'/>
            </h1>
            <p>Here's What happening on your store today. See the statistics at once.</p>
            <br />
            <Button className='btn-blue !capitalize'><HiOutlinePlus />Add Product</Button>
        </div>

        <img src="../../../public/Shopimg.jpg" className='w-[200px] h-[200px] rounded-full overflow-hidden'/>
    </div>
    <DashboardBoxes/>

    <div className="card my-4 shadow-md sm:rounded-lg bg-[#8e72ee]">
        <div className="flex items-center justify-between px-5 py-5">
            <h2 className='text-[18px] font-[600]'>Recent Orders</h2>
        </div>

        <div className="relative overflow-x-auto bg-[#191927] mt-5 shadow-xs rounded-base border border-default border-[#8e72ee]">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default border-[#8e72ee]">
            <tr>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Order Id
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Payment Id
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Address
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Pincode
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Total Amount
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    User Id
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Order Status
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Date
                </th>
            </tr>
                </thead>
                <tbody>
            <tr className="bg-neutral-primary border-b border-default border-[#8e72ee]">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    <Button className='!w-[40px] !h-[40px] !min-h-[40px] !rounded-full !text-[#917108]' onClick={()=>isShowOrderProduct(0)}>
                        {
                            isOpenOrderProduct === 0 ? <FaAngleUp classNameName='text-[16px]'/> : <FaAngleDown classNameName='text-[16px]'/>
                        }
                    </Button>
                </th>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#ff5252]'>67514d9914db2545hjk523</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#ff5252]'>PYMT_5254153725</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    Velflex flip-o-coller
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    9892775235
                </td>
                <td className="px-6 py-4 text-[400] text-[#c5a059] ">
                    <span className='block w-[300px]'>vill & post gurugaon rehra districk intiyathok pakistan</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    201209
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    1999/-RS
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    rashishukla9212@gmail.com
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#ff5252]'>77s1245fg525a2a52254</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <Badge status="pending"/>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    12-29-2027
                </td>
            </tr>
            
            {
                isOpenOrderProduct===0 && (
                    <tr>
                <td className='text-[#c5a059] pl-20' colSpan={6}>
                    <div className="relative overflow-x-auto bg-[#121212] shadow-xs rounded-base border border-default border-[#8e72ee]">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default border-#8e72ee">
            <tr>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Product Id
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Image
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Subtotal
                </th>
            </tr>
                </thead>
                <tbody>
            <tr className="bg-neutral-primary border-b border-default border-[#8e72ee]">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    <span className='text-[#ff5252]'>4d9914db2545hj</span>
                </th>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#c5a059]'>Velflex Perfume dicto jammer</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <img src="../../../public/tempimg.jpg" className='w-[50px] h-[50px] object-cover rounded-md' />
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    2
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    1999/-RS
                </td>
                <td className="px-6 py-4 text-[400] text-[#c5a059] ">
                    1999/-RS
                </td>
            </tr>
            <tr className="bg-neutral-primary border-b border-default border-[#8e72ee]">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    <span className='text-[#ff5252]'>4d9914db2545hj</span>
                </th>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#c5a059]'>Velflex Perfume dicto jammer</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <img src="../../../public/tempimg.jpg" className='w-[50px] h-[50px] object-cover rounded-md' />
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    2
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    1999/-RS
                </td>
                <td className="px-6 py-4 text-[400] text-[#c5a059] ">
                    1999/-RS
                </td>
            </tr>
            

            <tr>
                <td className='bg-[#000] text-[#c5a059]' colSpan={12}></td>
            </tr>
    
        </tbody>
    </table>
</div>
                </td>
            </tr>
            )}

            <tr className="bg-neutral-primary border-b border-default border-[#8e72ee]">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    <Button className='!w-[40px] !h-[40px] !min-h-[40px] !rounded-full !text-[#917108]' onClick={()=>isShowOrderProduct(1)}>
                        {
                            isOpenOrderProduct === 1 ? <FaAngleUp classNameName='text-[16px]'/> : <FaAngleDown classNameName='text-[16px]'/>
                        }
                    </Button>
                </th>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#ff5252]'>67514d9914db2545hjk523</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#ff5252]'>PYMT_5254153725</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    Velflex flip-o-coller
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    9892775235
                </td>
                <td className="px-6 py-4 text-[400] text-[#c5a059] ">
                    <span className='block w-[300px]'>vill & post gurugaon rehra districk intiyathok pakistan</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    201209
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    1999/-RS
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    rashishukla9212@gmail.com
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#ff5252]'>77s1245fg525a2a52254</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <Badge status="pending"/>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    12-29-2027
                </td>
            </tr>
            
            {
                isOpenOrderProduct===1 && (
                    <tr>
                <td className='text-[#c5a059] pl-20' colSpan={6}>
                    <div className="relative overflow-x-auto bg-[#121212] shadow-xs rounded-base border border-default border-[#8e72ee]">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default border-[#8e72ee]">
            <tr>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Product Id
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Image
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 font-[600] text-[16px] text-[#917108] whitespace-nowrap">
                    Subtotal
                </th>
            </tr>
                </thead>
                <tbody>
            <tr className="bg-neutral-primary border-b border-default border-[#8e72ee]">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    <span className='text-[#ff5252]'>4d9914db2545hj</span>
                </th>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#c5a059]'>Velflex Perfume dicto jammer</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <img src="../../../public/tempimg.jpg" className='w-[50px] h-[50px] object-cover rounded-md' />
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    2
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    1999/-RS
                </td>
                <td className="px-6 py-4 text-[400] text-[#c5a059] ">
                    1999/-RS
                </td>
            </tr>
            <tr className="bg-neutral-primary border-b border-default border-[#8e72ee]">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    <span className='text-[#ff5252]'>4d9914db2545hj</span>
                </th>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <span className='text-[#c5a059]'>Velflex Perfume dicto jammer</span>
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    <img src="../../../public/tempimg.jpg" className='w-[50px] h-[50px] object-cover rounded-md' />
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    2
                </td>
                <td className="px-6 py-4 text-[500] text-[#c5a059] whitespace-nowrap">
                    1999/-RS
                </td>
                <td className="px-6 py-4 text-[400] text-[#c5a059] ">
                    1999/-RS
                </td>
            </tr>
            

            <tr>
                <td className='bg-[#000] text-[#c5a059]' colSpan={12}></td>
            </tr>
    
        </tbody>
    </table>
</div>
                </td>
            </tr>
            )}

    
        </tbody>
    </table>
</div>

    </div>
    </>
  )
}

export default Dashboard;
