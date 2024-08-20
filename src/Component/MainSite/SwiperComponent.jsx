import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SwierComponent.css";
import { Navigation } from "swiper/modules";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";
import createPostImg from "../../assets/createPostImg.png";

export default function SwiperComponent({ usersData }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // Ensure Swiper re-renders with correct navigation
    if (prevRef.current && nextRef.current) {
      setTimeout(() => {
        prevRef.current.swiper.update();
      }, 0);
    }
  }, []);

  const firstPerson = {
    username: "Saleh Ahmed",
    user_photo: createPostImg,
    is_active: true,
    last_active: null,
    post: {
      post_id: "g7h8i9",
      post_photo: [
        {
          photo: "https://picsum.photos/id/1059/800/600",
        },
      ],
      post_caption: "Sunset by the beach. #relax",
      post_time: "2d",
      likes_count: 8,
      comments_count: 5,
      share_count: 7,
    },
  };

  const newUserData = [firstPerson, ...usersData];

  console.log(newUserData);

  // useEffect(() => {
  //   const swiperInstance = document.querySelector(".mySwiper").swiper;

  //   if (swiperInstance) {
  //     const handleSlideChange = () => {
  //       setIsBeginning(swiperInstance.isBeginning);
  //       setIsEnd(swiperInstance.isEnd);
  //     };

  //     handleSlideChange(); // Initial check
  //     swiperInstance.on("slideChange", handleSlideChange); // Update on slide change

  //     return () => {
  //       swiperInstance.off("slideChange", handleSlideChange);
  //     };
  //   }
  // }, []);

  return (
    <div className="relative">
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={5.5}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
      >
        {newUserData &&
          Array.isArray(newUserData) &&
          newUserData.map((userData, index) => (
            <SwiperSlide key={index}>
              <div className={`${index === 0 && "relative"}`}>
                <img
                  src={userData.user_photo}
                  alt={`Carousel ${index}`}
                  className="rounded-full border-2 w-full h-auto border-[#377DFF]"
                />
                <div
                  className={`${
                    index !== 0 && "hidden"
                  } absolute -bottom-2 left-1/2 transform -translate-x-1/2 p-1 rounded-full bg-white`}
                >
                  <FaPlus className="h-3 w-3 text-gray-600" />
                </div>
              </div>
              <p className="text-center mt-2 font-medium text-[#4E5D78]">
                {userData &&
                  userData.username &&
                  userData.username.split(" ")[0]}
              </p>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
        className={`custom-prev flex absolute left-0 top-1/2 transform -translate-y-1/2 ${
          isBeginning ? "hidden" : "block"
        }`}
      >
        <HiMiniChevronLeft className="h-6 w-6 cursor-pointer" />
      </div>
      <div
        ref={nextRef}
        className={`custom-next flex absolute right-0 top-1/2 transform -translate-y-1/2 ${
          isEnd ? "hidden" : "block"
        }`}
      >
        <HiMiniChevronRight className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}
