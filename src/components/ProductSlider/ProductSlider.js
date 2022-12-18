import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useQuery } from '@tanstack/react-query';
const ProductSlider = () => {
    const { isLoading, data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: () =>
            fetch('https://book-store-server-theta.vercel.app/books')
                .then(res => res.json())
    })

    if (isLoading) return 'Loading...'
    return (
        <div className='md:w-3/4 mx-auto '>
            <div className='text-center mt-16 mb-10'>
                <h2 className='text-3xl'>Our Top Categories</h2>
                <p>Here are some of the Top Categories of the Books Available.</p>
            </div>
            <div>
                <Swiper
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="myProductSwipper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        }
                    }}
                >

                    {
                        books.map(book => <> <SwiperSlide className='border-r-2'>
                            <img src={book.img} alt="" className='mx-auto h-[35vh] md:w-[12vw] object-cover' />
                        </SwiperSlide></>)
                    }
                </Swiper>
            </div>
        </div>

    );
};

export default ProductSlider;