import React from 'react';
import kidsBooks from '../../assets/1.jpg';
import religiousbooks from '../../assets/2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";


const Slider = ({ content }) => {

    const contents = [
        { id: 1, name: "Kids' favoutite story books", img: kidsBooks },
        { id: 1, name: "Religious Books", img: religiousbooks },
    ]
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    contents.map(content => <SwiperSlide>
                        <div className='relative'>
                            <img src={content.img} alt="" className='w-full md:h-[85vh] object-cover h-[50vh]' />
                            <div className='absolute top-0 left-0 bg-gradient-to-r from-[#00000085] to-[#0000005e] w-full h-full text-white'>
                                <div className='absolute top-1/2 -translate-y-1/2 md:left-[120px] md:w-2/4 md:text-left text-center'>
                                    <h2 className='md:text-5xl uppercase text-2xl'>{content.name}</h2>
                                    <p className='mt-5 mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                                    <button className="btn btn-outline border-white mr-3 text-white">See More</button>
                                    <button className="btn btn-outline border-white text-white">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Slider;