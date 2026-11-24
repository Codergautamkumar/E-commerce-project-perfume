import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

  return (
    <>
    <div className="flex gap-3">

        <div className="slider w-[15%]">
             <Swiper
                    ref={zoomSliderSml}
                    direction={"vertical"}
                    slidesPerView={4}
                    spaceBetween={0}
                    navigation={true}
                    modules={[Navigation]}
                    className="zoomProductSliderThumbs h-[400px] overflow-hidden">
             <SwiperSlide>
                <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" className='w-full transition-all group-hover:scale-105'/>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" className='w-full transition-all group-hover:scale-105'/>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" className='w-full transition-all group-hover:scale-105'/>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" className='w-full transition-all group-hover:scale-105'/>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===4 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(4)}>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" className='w-full transition-all group-hover:scale-105'/>
                </div>
             </SwiperSlide>
             <SwiperSlide></SwiperSlide>
            
             </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[400px] overflow-hidden rounded-md">
            <Swiper
                    ref={zoomSliderBig}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
            >
             <SwiperSlide>
            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" />
            </SwiperSlide>
            <SwiperSlide>
            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" />
            </SwiperSlide>
            <SwiperSlide>
            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" />
            </SwiperSlide>
            <SwiperSlide>
            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" />
            </SwiperSlide>
            <SwiperSlide>
            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS37ZvcDTHbzkHLG6mRUBxeFaOdSMdWw8SNQj057PVZxPWA4P3uQzg6tuK5NEngFgY6tfyTucTclipmBJb-CnY6u-yXUb-QwJeYTMXIZXIEFw4f3weJPx2Ps38" />
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
    </>
  )
}

export default ProductZoom;