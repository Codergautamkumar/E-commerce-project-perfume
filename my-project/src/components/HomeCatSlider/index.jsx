import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
        slidesPerView={8}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Oud Perfume</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Contol-E</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Flip-O-Coller</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Dicto Jammer</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Glory Aura</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Hunter Bets</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Ocien Tura</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Differ Dry</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Hens-O-Mata</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Gury Class</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Fusion Fast</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>Lury Vlex</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>          
          <Link to='/'>
            <div className="item py-8 px-3 bg-black rounded-sm text-center flex items-center justify-center flex-col">
            <img src="/topslider8.jpg" alt="" className='transition-all rounded-md'/>
            <h3 className='text-[#c5a059] text-[15px] font-[500] mt-3'>lux amata</h3>
          </div>
          </Link>
        </SwiperSlide>


      </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider;
