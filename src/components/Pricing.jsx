import React from "react";
import { useState } from "react";
import { fadeIn, textVariant } from "../ultils/motion";
import { motion } from "framer-motion";

const Pricing = () => {
  const [productCount, setProductCount] = useState(1);

  const starterPrice = Math.round((4000 * productCount) / 50);
  const businessPrice = Math.round((7500 * productCount) / 50);

  return (
    <section className="max-w-7xl mx-auto px-7 sm:px-14 py-16">
      <motion.h4
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        className="text-center font-bold text-4xl md:text-5xl"
      >
        Pricing
      </motion.h4>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 mt-2">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="mt-8 mb-4 shadow-lg p-8 rounded-lg border border-gray-200 md:w-2/5 w-full  "
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">Starter</h2>
          <p className=" text-3xl md:text-4xl font-extrabold mb-4">
            ${starterPrice}
            <span className="text-lg font-medium text-gray-600">/month</span>
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          className="mt-8 mb-4 shadow-lg p-8 rounded-lg border border-gray-200 md:w-2/5 w-full"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">Business</h2>
          <p className=" text-3xl md:text-4xl font-extrabold mb-4">
            ${businessPrice}
            <span className="text-lg font-medium text-gray-600">/month</span>
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center gap-4 mt-8"
      >
        <p className="text-center">{productCount} Products</p>
        <div>
          <input
            type="range"
            min="1"
            max="100"
            value={productCount}
            onChange={(e) => setProductCount(e.target.value)}
            className="w-64 md:w-96"
          />
        </div>
        <p className="text-center">Ready to get started ?</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Pricing;
