import React from 'react'
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/feature/books/bookApi';

const Recommened = () => {
  const {data : books= []} = useFetchAllBooksQuery();
  return (
    <div className="py-16">
      <h2 className='text-3xl font-semibold mb-6'>Recommended or You</h2>
      <Swiper
        navigation={true} 
        
        slidesPerView={1}
        spaceBetween={30}
       
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
         {
       books.length > 0 &&  books.slice(8,18).map((book , index) => (
            <div>
            <SwiperSlide><BookCard key={index} book = {book} /></SwiperSlide>
                 
            </div>
        ))
    }
        
      </Swiper>
    </div>
  )
}

export default Recommened
