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
const categories = ["Choose a genre" , "business", "fiction", "horror" ,"Adventure" , "books" , "marketing"];
const TopSellers = () => {
   
    const [selectedCategory , setSelectedCategory] = React.useState("Choose a genre");

    const {data : books = []} = useFetchAllBooksQuery();
    console.log(books)
    const filteredBooks = selectedCategory === "Choose a genre" ? books: books.filter(book => book.category === selectedCategory.toLowerCase())
    console.log("Hello")
    console.log(filteredBooks)
     return (
    <div className="py-10">
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/* category filtering */}
        <div className='mb-8 flex items-center'>
            <select name="category" id="category" className='border
             bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
             onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category , index)=>(
       <option key={index} value = {category}>
        {category}
       </option>
                ))
                }
            </select>

           
        </div>
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
        filteredBooks.map((book , index) => (
            <div>
        {  filteredBooks.length > 0 &&   <SwiperSlide><BookCard key={index} book = {book} /></SwiperSlide>} 
                 
            </div>
        ))
    }
        
      </Swiper>
   
    </div>
  )
}

export default TopSellers
