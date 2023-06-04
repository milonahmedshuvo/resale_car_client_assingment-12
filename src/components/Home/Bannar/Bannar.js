import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";







const Bannar = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };




  return (
    <div>
      <>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[400px]"
      >
        <SwiperSlide className="bg-[#191313]">
          <img
          className="w-full h-full"
            src="https://react-assignment-12-6bfe6.web.app/static/media/coroselCar.80d48735e2456f15e360.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="bg-[#14172F]">
          <img
          className="w-full h-full"
            src="https://react-assignment-12-6bfe6.web.app/static/media/coroselCar.80d48735e2456f15e360.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="bg-gray-400">
          <img
          className="w-full h-full"
            src="https://react-assignment-12-6bfe6.web.app/static/media/coroselCar.80d48735e2456f15e360.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="bg-slate-300">
          <img
          className="w-full h-full"
            src="https://react-assignment-12-6bfe6.web.app/static/media/coroselCar.80d48735e2456f15e360.png"
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 18 18" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
    </div>
  )
}

export default Bannar
