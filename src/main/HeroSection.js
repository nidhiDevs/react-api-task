import React from "react";
import banner from "../assets/banners/banner1.jpeg";
import banner2 from "../assets/banners/banner2.jpeg";
import banner3 from "../assets/banners/banner3.jpeg";
import banner4 from "../assets/banners/banner4.jpeg";
import { Product } from "../constant/Product";
import { MenProduct } from "../constant/Product";
import { kidsProduct } from "../constant/Product";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <div>
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
        <SwiperSlide>
          <div class="">
            <img
              className="w-screen h-[40vh] md:h-[80vh]"
              alt="img"
              src="https://www.purplecreations.com/images/slider/01-img.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="">
            <img
              className="w-screen h-[40vh] md:h-[80vh]"
              alt="img"
              src="https://i.pinimg.com/originals/79/0c/3c/790c3cf681d555d5759f410a578b7399.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="">
            <img
              className="w-screen h-[40vh] md:h-[80vh]"
              alt="img"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/b23f37117518103.60773790202d1.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="">
            <img
              className="w-screen h-[40vh] md:h-[80vh]"
              alt="img"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-banner-design-template-790a7d218286a816f21007acb405f8b5_screen.jpg?ts=1624013808"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <section class="mx-auto w-full max-w-screen-xl p-4 md:px-16">
        <div>
          <h1 className="text-gray-400 text-lg">ALL TIME FAVOURITES</h1>
          <h1 className="text-lg md:text-[45px] font-bold  font-barlow py-4">
            Top Pick listing
          </h1>
          <p className="font-barlow text-lg text-slate-600 md:w-1/2">
            We've sorted through our feed to put together a collection of our
            products perfect for a summer outdoors.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4 pt-5">
          <div className=" cursor-pointer ">
            <img className=" md:h-80 md:w-64" src={banner3} alt="banner" />
          </div>
          <div className=" cursor-pointer">
            <img className="  md:h-80 md:w-64" src={banner2} alt="banner" />
          </div>
          <div className=" cursor-pointer">
            <img className="  md:h-80 md:w-64" src={banner} alt="banner" />
          </div>
          <div className=" cursor-pointer">
            <img className="  md:h-80 md:w-64" src={banner4} alt="banner" />
          </div>
        </div>
        {/* Offer Corner Start */}
        <div className="py-10">
          <h1 className="text-xl md:text-3xl   text-center">OFFER CORNER</h1>
          <div className="flex gap-4 justify-center items-center py-4">
            <div className="w-20 h-20 md:w-36 md:h-36 flex items-center text-center font-bold text-sm md:text-2xl rounded-full p-2 bg-yellow-200">
              <h1>New Arrivals Women</h1>
            </div>
            <div className="w-20 h-20 md:w-36 md:h-36 flex items-center text-center font-bold text-sm md:text-2xl rounded-full p-2 bg-yellow-200">
              <h1>Discount Zone</h1>
            </div>
            <div className="w-20 h-20 md:w-36 md:h-36  flex items-center text-center font-bold text-sm md:text-2xl rounded-full p-2 bg-yellow-200">
              <h1>New Arrivals Men</h1>
            </div>
          </div>
        </div>
        {/* Offer Corner end */}

        {/* Women Product Start */}

        <div>
          <div>
            <h1 className="border-b border-red-500 text-center font-barlow  text-xl md:text-3xl py-2">
              FOR HER
            </h1>
          </div>
          <div className="my-5 grid grid-cols-3 lg:grid-cols-4 ">
            {Product.map((item, index) => (
              <img
                className=" w-20 h-20 md:w-52 md:h-52 cursor-pointer "
                src={item}
                key={index}
                alt="banner"
              />
            ))}
          </div>
        </div>

        {/* Women Product end */}

        {/* Men Product Start */}
        <div>
          <div>
            <h1 className="border-b border-red-500 text-center font-barlow  text-xl md:text-3xl py-2">
              FOR HIM
            </h1>
          </div>
          <div className="my-5 grid grid-cols-3 lg:grid-cols-4 ">
            {MenProduct.map((item, index) => (
              <div className="flex justify-center items-center">
                {" "}
                <img
                  className=" w-20 h-20 md:w-52 md:h-52 cursor-pointer "
                  src={item}
                  key={index}
                  alt="banner"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Men Product End */}

        {/* Kids Product Start */}
        <div>
          <div>
            <h1 className="border-b border-red-500 text-center font-barlow  text-xl md:text-3xl py-2">
              FOR KIDS
            </h1>
          </div>
          <div className="my-5 grid grid-cols-3 lg:grid-cols-4 ">
            {kidsProduct.map((item, index) => (
              <div className="flex justify-center items-center">
                <img
                  className=" w-20 h-20 md:w-52 md:h-52 cursor-pointer "
                  src={item}
                  key={index}
                  alt="banner"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Kids Product End */}
      </section>
      {/* Banner Section Start */}
      <div className="py-4">
        <h1 className="border-b-2 border-red-500 text-center font-barlow  text-xl md:text-3xl py-2">
          V2KART SPOTLIGHT
        </h1>

        <div class="pt-4">
          <img
            className="w-screen h-[40vh] md:h-[80vh]"
            alt="img"
            src="https://ecomm.dotvik.com/dist/images/bannerTemp/leggingsBanner.jpg"
          />
        </div>
      </div>
      {/* Sportlight  banner*/}
      <div className="">
        <h1 className="border-b-2 border-red-500 text-center font-barlow  text-xl md:text-3xl py-2">
          IN THE SPOTLIGHT
        </h1>

        <div class="pt-4 grid grid-cols-2">
          <img
            className=" h-[40vh] md:h-[80vh]"
            alt="img"
            src="https://ecomm.dotvik.com/dist/images/bannerTemp/fit-to-win.jpeg"
          />
          <img
            className=" h-[40vh] md:h-[80vh]"
            alt="img"
            src="https://ecomm.dotvik.com/dist/images/bannerTemp/fashion_essentials.jpeg"
          />
        </div>
        <div class="pt-4">
          <img
            className="w-screen h-[40vh] md:h-[80vh]"
            alt="img"
            src="https://i.pinimg.com/originals/79/0c/3c/790c3cf681d555d5759f410a578b7399.jpg"
          />
        </div>
        <div class="pt-4">
          <img
            className="w-screen h-[40vh] md:h-[80vh]"
            alt="img"
            src="https://ecomm.dotvik.com/dist/images/bannerTemp/men_fashion.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
