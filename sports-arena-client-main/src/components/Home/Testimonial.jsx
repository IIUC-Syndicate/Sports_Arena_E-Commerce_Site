import React, { useEffect, useState } from 'react';
import TestimonialCard from '../../components/Home/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SectionTitle from '../shared/SectionTitle';
import useAxiosPublic from '../../customHooks/useAxiosPublic';

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get(`/reviews`);
                setTestimonial(res.data);
            } catch (error) {
                //console.log(error)
                Swal.fire({
                    title: "Error",
                    text: "Reviews Data Can't be Loaded",
                    icon: "error"
                })
            }
        };
        fetchData();
    }, []);
    return (
        <div className='py-10 md:px-10 bg-base-100 my-10 rounded-2xl'>
            <SectionTitle>What Our Clients Say</SectionTitle>
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
                {
                    testimonial.map((testimonial, index) => <SwiperSlide key={testimonial._id}>
                        <TestimonialCard key={index} testimonial={testimonial}></TestimonialCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;