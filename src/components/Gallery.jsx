import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';





import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AiOutlineLine } from "react-icons/ai";

const Gallery = () => {
  return (
    <main className="text-center my-20">
        <div className="text-4xl md:text-5xl font-bold text-black py-20 font-kanit">
            <h1>Gallerie</h1>
            <AiOutlineLine className="w-full text-2xl text-green-700 text-center"/>
        </div>

        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={'2'}
        centeredSlides={true}
        spaceBetween={10}
        navigation
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper mx-10 md:mx-20 lg:mx-40"
        >
            <SwiperSlide><img src="/15.jpg" alt="" width={800} height={400} /></SwiperSlide>
            <SwiperSlide><img src="/11.jpg" alt="" width={800} height={400} /></SwiperSlide>
            <SwiperSlide><img src="/6.jpg" alt=""  width={800} height={400}/></SwiperSlide>
            <SwiperSlide><img src="/15.jpg" alt="" width={800} height={400} /></SwiperSlide>
            <SwiperSlide><img src="/5.jpg" alt=""  width={800} height={400}/></SwiperSlide>
            <SwiperSlide><img src="/11.jpg" alt="" width={800} height={400} /></SwiperSlide>
            <SwiperSlide><img src="/6.jpg" alt=""  width={800} height={400}/></SwiperSlide>
            <SwiperSlide><img src="/7.jpg" alt=""  width={800} height={400}/></SwiperSlide>
         
        </Swiper>


    </main>
  )
}

export default Gallery