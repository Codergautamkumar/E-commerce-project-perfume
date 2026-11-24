import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsFillGiftFill } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { GrPieChart } from "react-icons/gr";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";



const DashboardBoxes = () => {
  return (
    <>
          <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
            <div className="box p-5 cursor-pointer hover:bg-[#000] bg-[#191927] rounded-md border border-[#8e72ee] flex items-center gap-4">
                <BsFillGiftFill className='text-[40px] text-[#00d7d4]'/>
                <div className="info w-[70%] text-[#e4e3ec]">
                    <h3>New Orders</h3>
                    <b>1,997</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#917108]'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box p-5 cursor-pointer hover:bg-[#000] bg-[#191927] rounded-md border border-[#8e72ee] flex items-center gap-4">
                <GrPieChart  className='text-[40px] text-[#00d7d4]'/>
                <div className="info w-[70%] text-[#e4e3ec]">
                    <h3>Sales</h3>
                    <b>54948/-Rs</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#7928ca]'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box p-5 cursor-pointer hover:bg-[#000] bg-[#191927] rounded-md border border-[#8e72ee] flex items-center gap-4">
                <BsBank className='text-[40px] text-[#00d7d4]'/>
                <div className="info w-[70%] text-[#e4e3ec]">
                    <h3>Revenue</h3>
                    <b>12380/-RS</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#917108]'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box p-5 cursor-pointer hover:bg-[#000] bg-[#191927] rounded-md border border-[#8e72ee] flex items-center gap-4">
                <RiProductHuntLine className='text-[40px] text-[#00d7d4]'/>
                <div className="info w-[70%] text-[#e4e3ec]">
                    <h3>Total Products</h3>
                    <b>1,912</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#917108]'/>
            </div>
        </SwiperSlide>
    
      </Swiper>
    </>
  )
}

export default DashboardBoxes;