import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';

const HomeBannerV2 = () => {
  return (
    <>
    <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
        className="HomeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
          <img src="/HomeSlider5.jpeg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0"> India best perfume</h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">Unisex fragrance is very unique</h2>
            <h3 className="text-[18px] items-center font-[500] w-full mt-3 mb-3 gap-3 relative -right-[100%] opacity-0"> Start At Only <span className='text-[#ff5052] text-[30px] font-[700]'>1999/-RS</span></h3>

            <div className='w-full relative -right-[100%] opacity-0 btn_'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
          <img src="/HomeSlider2.jpeg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0"> India best perfume</h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">Men fragrance is very attractive</h2>
            <h3 className="text-[18px] items-center font-[500] w-full mt-3 mb-3 gap-3 relative -right-[100%] opacity-0"> Start At Only <span className='text-[#ff5052] text-[30px] font-[700]'>1499/-RS</span></h3>

            <div className='w-full relative -right-[100%] opacity-0 btn_'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
          <img src="/HomeSlider3.jpeg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0"> India best perfume</h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">Women fragrance is cool charming</h2>
            <h3 className="text-[18px] items-center font-[500] w-full mt-3 mb-3 gap-3 relative -right-[100%] opacity-0"> Start At Only <span className='text-[#ff5052] text-[30px] font-[700]'>1199/-RS</span></h3>

            <div className='w-full relative -right-[100%] opacity-0 btn_'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
          <img src="/HomeSlider4.jpeg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0"> India best perfume</h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">Glory Aura is best selling product</h2>
            <h3 className="text-[18px] items-center font-[500] w-full mt-3 mb-3 gap-3 relative -right-[100%] opacity-0"> Start At Only <span className='text-[#ff5052] text-[30px] font-[700]'>3999/-RS</span></h3>

            <div className='w-full relative -right-[100%] opacity-0 btn_'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
          <img src="/HomeSlider1.jpeg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0"> India best perfume</h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">Ocien Tura is high demanding</h2>
            <h3 className="text-[18px] items-center font-[500] w-full mt-3 mb-3 gap-3 relative -right-[100%] opacity-0"> Start At Only <span className='text-[#ff5052] text-[30px] font-[700]'>4499/-RS</span></h3>

            <div className='w-full relative -right-[100%] opacity-0 btn_'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
          <img src="/HomeSlider6.jpeg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0"> India best perfume</h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">Contol-E Fragrance is uncontrol wave perfume</h2>
            <h3 className="text-[18px] items-center font-[500] w-full mt-3 mb-3 gap-3 relative -right-[100%] opacity-0"> Start At Only <span className='text-[#ff5052] text-[30px] font-[700]'>2999/-RS</span></h3>

            <div className='w-full relative -right-[100%] opacity-0 btn_'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeBannerV2;