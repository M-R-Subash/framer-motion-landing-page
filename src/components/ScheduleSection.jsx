import React from "react";
import scheduleImage from "../assets/stats.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../ultils/motion";
const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-7 py-16 md:py-14">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-between md:gap-24">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/2 w-full"
        >
          <img
            src={scheduleImage}
            alt="Schedule"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/2 w-full"
        >
          <h3 className="text-lg font-bold mb-2 text-orange-600">SCHEDULE</h3>
          <p className="text-2xl md:text-4xl font-bold mb-3 ">
            Streamline Your Business <br /> With Smart Scheduling Solutions
          </p>
          <p className="text-gray-600 mb-4 text-justify">
            Take control of your time and resources with our intuitive
            scheduling tools. Automate appointment booking and manage your
            calendar effortlessly. Customer satisfaction is our priority.
          </p>
          <a
            href="#"
            className="text-blue-600 font-bold tracking-wide cursor-pointer flex items-center group"
          >
            Explore scheduling features
            <IoIosArrowRoundForward className="size-7 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
