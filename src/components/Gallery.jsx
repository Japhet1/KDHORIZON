import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AiOutlineLine } from "react-icons/ai";

const Gallery = () => {
  return (
    <main className="bg-blue-100 text-center my-20">
        <div className="text-5xl font-bold text-black py-20 font-gruppo">
            <h1 >Gallerie</h1>
            <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>
        </div>

        <Swiper
        // install Swiper modules
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="/15.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/11.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/6.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/15.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/5.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/11.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/6.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/7.jpg" alt="" /></SwiperSlide>
            ...
        </Swiper>

    </main>
  )
}

export default Gallery