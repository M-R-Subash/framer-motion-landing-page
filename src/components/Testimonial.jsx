import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { fadeIn } from "../ultils/motion";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-7 sm:px-14 py-16">
      <motion.div 
      variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView="show"
      className="text-center">
        <h2 className="text-3xl font-bold mb-6">What our clients say</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          "This service has changed my life! Highly recommend to everyone."
        </p>
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
      className="relative ">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonialSwiper md:mb-8"
        >
          {
            testimonials.map((testimonial,index)=>(
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img src={testimonial.image} alt="person" className="w-full h-full object-cover rounded-full" />
                  </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{testimonial.name}</h3>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-center">{testimonial.text}</p>
                  
                </div>
              </SwiperSlide>
            ))
          }
          
        </Swiper>

        {/* Navigation Buttons */}

          <div className="flex justify-center gap-4 mt-4">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
                <BsChevronLeft className="size-6" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
                <BsChevronRight className="size-6" />
            </button>
          </div>

      </motion.div>
    </section>
  );
};

export default Testimonial;
