import React from "react";
import heroImage from "../assets/hero-image.png";
import {motion} from "motion/react"
import { fadeIn, textVariant } from "../ultils/motion";
const Hero = () => {
  return (
    <section id="home" className="container flex flex-col md:flex-row justify-between mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8">
      {/* left column */}
      <div className="w-full md:w-1/2 space-y-8">
      {/* star */}
        <motion.div
          variants={fadeIn('right',0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full group cursor-pointer hover:shadow-md hover:bg-gray-200 transition-colors">
          <span className="group-hover:scale-110 transition-transform">⭐</span>
          <span className="text-sm font-medium ">Jump start your growth</span>
        </div>
        </motion.div>
        <motion.h1
        variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{once:false,amount:0.25}}
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          We boost the growth for
          <span className="text-blue-600 relative inline-block mb-1">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{" "}
          Companies
          <span className="inline-block ml-2 animate-pulse"> ⏰</span>
        </motion.h1>
        <motion.p
        variants={fadeIn('up',0.4)}
          initial="hidden"
          whileInView="show"
        className="text-gray-600 text-lg max-w-xl text-justify">
          Get the most accurate leads , sales people training and
          conversation,tools and more - all within the same one billing.
        </motion.p>

        <motion.div
        variants={fadeIn('up',0.5)}
          initial="hidden"
          whileInView="show"
        className="flex gap-4 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 cursor-pointer transition-all shadow-lg hover: shadow-blue-300 text-lg font-bold ">
            →
          </button>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img src={heroImage} alt="heroImage"  className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"/>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
