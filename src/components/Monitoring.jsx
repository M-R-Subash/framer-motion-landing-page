import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import MonitoringImage from '../assets/monitor-card.webp'
import { fadeIn } from '../ultils/motion'
import { motion } from 'framer-motion'

const Monitoring = () => {
  return (
    <section className="max-w-7xl mx-auto px-7 py-5 md:py-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between md:gap-12">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              className="md:w-1/2 w-full"
            >
              <h3 className="text-lg font-bold mb-2 text-blue-500">MONITOR</h3>
              <p className="text-2xl md:text-4xl font-bold mb-3 ">
                Introducing Best Mobile <br />carousels
              </p>
              <p className="text-gray-600 mb-4 text-justify">
                Before you make a purchase, it's essential to monitor and compare
                different options. Our platform provides real-time monitoring of
                prices, features, and user reviews, ensuring you have all the
                information needed to make an informed decision.
              </p>
              <a
                href="#"
                className="text-blue-600 font-bold tracking-wide cursor-pointer flex items-center group"
              >
                Learn more about monitoring{" "}
                <IoIosArrowRoundForward className="size-7 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            <motion.div 
            variants={fadeIn('left',0.2)}
                initial="hidden"
                whileInView="show"
            className="md:w-1/2 w-full">
              <img
                src={MonitoringImage}
                alt="Schedule"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </section>
  )
}

export default Monitoring