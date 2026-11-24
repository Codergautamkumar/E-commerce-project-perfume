import React, { useState } from 'react'
import AccountSidebar from '../../components/AccountSidebar';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import Badge from '../../components/Badge';



const Orders = () => {

    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

    const isShowOrderProduct=(index)=>{
        if(isOpenOrderProduct===index){
            setIsOpenOrderProduct(null);
        }else{
            setIsOpenOrderProduct(index);
        }
    };



  return (
    <section className="py-10 w-full">
        <div className="container flex gap-5">
            <div className="col1 w-[20%]">
                <AccountSidebar/>
            </div>

            <div className="col2 w-[80%]">
                 <div className="shadow-md rounded-md bg-black">
                <div className="py-2 px-3 border-b border-[#121212]">
                    <h2 className='text-[#917108]'>My Orders</h2>
                    <p className="mt-0 text-[#c5a059]">There are <span classNameName="font-bold text-[#ff5252]">2</span> Orders</p>

                <div className="relative overflow-x-auto bg-[#121212] mt-5 shadow-xs rounded-base border border-default border-black">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default border-black">
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
            <tr className="bg-neutral-primary border-b border-default border-black">
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
                    <div className="relative overflow-x-auto bg-[#121212] shadow-xs rounded-base border border-default border-black">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default border-black">
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
            <tr className="bg-neutral-primary border-b border-default border-black">
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
            <tr className="bg-neutral-primary border-b border-default border-black">
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

            <tr className="bg-neutral-primary border-b border-default border-black">
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
                    <div className="relative overflow-x-auto bg-[#121212] shadow-xs rounded-base border border-default border-black">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default border-black">
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
            <tr className="bg-neutral-primary border-b border-default border-black">
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
            <tr className="bg-neutral-primary border-b border-default border-black">
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
            </div>
            </div>
        </div>
    </section>
  )
}

export default Orders;