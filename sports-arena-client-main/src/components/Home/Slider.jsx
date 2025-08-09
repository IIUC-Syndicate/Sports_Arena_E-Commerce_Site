// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/Slider/1.jpg';
import slide2 from '../../assets/Slider/2.png';
import slide3 from '../../assets/Slider/3.jpg';
import slide4 from '../../assets/Slider/4.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            effect={'fade'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

        >
            <SwiperSlide>
                <div className='flex justify-center items-center rounded-box h-[650px] overflow-hidden object-cover relative'>
                    <img src={slide1} alt="" className='w-full object-center h-full' />
                    <div className='absolute'>
                        <h1 className='font-extrabold text-base-100 text-3xl md:text-5xl text-balance text-center'>
                            "Sports teach us resilience, teamwork, and determination, reminding us that every failure is a stepping stone toward ultimate success."
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center rounded-box h-[650px] overflow-hidden object-cover relative'>
                    <img src={slide2} alt="" className='w-full object-center h-full' />
                    <div className='absolute'>
                        <h1 className='font-extrabold text-base-100 text-3xl md:text-5xl text-balance text-center'>
                            "Your body is your greatest asset; train it with care, push its limits, and watch it achieve extraordinary feats."
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center rounded-box h-[650px] overflow-hidden object-cover relative'>
                    <img src={slide3} alt="" className='w-full object-center h-full' />
                    <div className='absolute'>
                        <h1 className='font-extrabold text-base-100 text-3xl md:text-5xl text-balance text-center'>
                            "Success in sports isn’t just about talent; it’s about consistent effort, discipline, and a mindset that refuses to quit."
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center items-center rounded-box h-[650px] overflow-hidden object-cover relative'>
                    <img src={slide4} alt="" className='w-full object-center h-full' />
                    <div className='absolute'>
                        <h1 className='font-extrabold text-base-100 text-3xl md:text-5xl text-balance text-center'>
                            "Fitness is not just about looking good; it’s about feeling stronger, healthier, and more confident in every aspect of life."
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
