import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carosel = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
    <div className="relative w-full h-full">
        <img src="https://i.ibb.co.com/L5BZfyC/s3.webp" alt="" className="w-full h-96 object-fit" />
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right flex flex-col items-end">
            <h3 className="text-6xl font-extrabold text-white">We are Trusted Institution</h3>
            <h3 className="text-xl font-semibold text-black w-2/3">
                We offer programs designed to meet the needs of individuals from all around the world
            </h3>
        </div>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="relative w-full h-full">
        <img src="https://i.ibb.co.com/MVDgyMJ/s2.webp" alt="" className="w-full h-96 object-fit" />
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right flex flex-col items-end">
            <h3 className="text-6xl font-extrabold text-white">Expand Your Learning Horizons</h3>
            <h3 className="text-xl font-semibold text-black w-2/3">
                Explore innovative programs tailored to enhance your skills and knowledge globally
            </h3>
        </div>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="relative w-full h-full">
        <img src="https://i.ibb.co.com/NZK3fXr/s1.jpg" alt="" className="w-full h-96 object-fit" />
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right flex flex-col items-end">
            <h3 className="text-6xl font-extrabold text-white">Join Our Global Community</h3>
            <h3 className="text-xl font-semibold text-black w-2/3">
                Be a part of a trusted institution that connects learners worldwide
            </h3>
        </div>
    </div>
</SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Carosel;