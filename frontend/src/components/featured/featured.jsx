import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { featuredData } from "../../data/featuredData";
import FeaturedCard from "../ui/featuredCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./featured.css";


const Featured = () => {

  return (
    <div className="h-full w-full bg-white-100 pb-20">

      {/* Heading */}
      <div className="flex justify-between items-center px-12 py-4 mb-8">
        <div className="heading">
          <h1>
            <span className="text-black font-[650] text-5xl">
              Featured
            </span>
            <span className="text-yellow-400 ml-2 text-5xl font-[600]">
              Works
            </span>
          </h1>
        </div>
        <div className="button">
          <button className="flex items-center gap-1 border border-black px-4 py-2 rounded-3xl hover:bg-black hover:text-white transition duration-300" > See all projects <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>

      {/* main card section */}


        <div className="flex flex-col md:flex-row items-start gap-8 px-12 py-4">
          <div className="flex-1 min-w-0 w-full">
            <Swiper
              className="!pb-12"
              loop={true}
              spaceBetween={20}
              slidesPerView={1.4}
              centeredSlides={false}
              grabCursor={true}

              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              speed={600}

              breakpoints={{
                320: { slidesPerView: 1.1 },
                640: { slidesPerView: 1.3 }
              }}
              
            >
              {featuredData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="h-full">
                    <FeaturedCard
                      image={item.image}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </div>
  );
};

export default Featured;
