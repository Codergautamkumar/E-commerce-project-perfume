import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBanerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ProductSlider from '../../components/ProductSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';

import HomeBannerV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/BannerBoxV2';

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

    <section className='py-6'>
      <div className="container flex items-center gap-5">
        <div className="part1 w-[70%]">
          <HomeBannerV2/>
        </div>

        <div className="part2 w-[30%] gap-5 flex items-center justify-between flex-col">
          <BannerBoxV2 info="left" image={'/HomeSlider5.jpeg'}/>

          <BannerBoxV2 info="right" image={'/HomeSlider6.jpeg'}/>
        </div>

      </div>
    </section>

    <HomeCatSlider/>

    <section className="bg-[#121212] py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="leftSec">
            <h2 className='text-[20px] font-[600] text-[#917108]'>Popular Product</h2>
            <p className='text-[14px] font-[400] text-[#917108]'>Do not miss the current offers until the end of Dec 2027.</p>
          </div>

          <div className="rightSec w-[50%]">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example">
              <Tab label="Fragrance" />
              <Tab label="Shirt" />
              <Tab label="Italian-Pants" />
              <Tab label="italian-Jeans" />
              <Tab label="Hand-Made" />
              <Tab label="Item Six" />
              <Tab label="Differ Dry" />
            </Tabs>
          </div>
        </div>

        <ProductSlider items={6}/>


      </div>
    </section>

    <section className="py-4 pt-2 bg-[#121212]">
      <div className="container">
        <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#917108] flex items-center justify-between rounded-md mb-5 bg-black">
          <div className="col1 flex items-center gap-4">
            <FaShippingFast className='text-[40px] text-[#917108]'/> 
            <span className='text-[20px] font-[600] uppercase text-[#917108]'>Free Shipping</span>  
          </div> 

          <div className="col2">
            <p className="mb-0 font-[500] text-[#917108]">Free Delivery Now On Your First Order And Over 200$</p>
          </div>

          <p className="font-bold text-[30px] text-[#917108]">- Only 999RS/-</p>
        </div>  
        <AdsBanerSlider items={4}/>
      </div> 
    </section>

    <section className="py-5 pt-0">
      <div className="container">
        <h2 className='text-[20px] font-[600] text-[#917108]'>Latest Product</h2>
        <ProductSlider items={6}/>
        <AdsBanerSlider items={3}/>
      </div>
    </section>

    <section className="py-5 pt-0">
      <div className="container">
        <h2 className='text-[20px] font-[600] text-[#917108]'>Featured Product</h2>
        <ProductSlider items={6}/>
        <AdsBanerSlider items={3}/>
      </div>
    </section>

    <section className="py-5 pd-8 pt-0 blogSection">
      <div className="container">
        <h2 className='text-[20px] font-[600] mb-4 text-[#917108]'>From The Blog</h2>
        <Swiper
                slidesPerView={4}
                spaceBetween={50}
                navigation={true}
                modules={[Navigation]}
                className="blogSlider">
                <SwiperSlide>
                  <BlogItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <BlogItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <BlogItem/>
                </SwiperSlide>
                <SwiperSlide>
                  <BlogItem/>
                </SwiperSlide>
        </Swiper>
      </div>
    </section>

    </>
  )
}

export default Home;

