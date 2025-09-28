import React from 'react'
import { fadeIn } from '../ultils/motion';
import { motion } from 'framer-motion';
const PurposeSection = () => {
    const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];

  return (
    <section id='about' className="w-full bg-gray-50 py-10 px-7 sm:px-14 md:px-14 ">
        <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <motion.div
                variants={fadeIn('right',0.2)}
                          initial="hidden"
                          whileInView="show"
                >
                  <p className='text-sm text-purple-600 font-medium mb-2 '>ARCHIEVE MORE</p>
                  <h2 className='font-bold text-3xl md:w-4/5 w-full md:text-4xl text-gray-900'>Purpose of a convoy is to keep your team</h2>
                </motion.div>
            <motion.div
            variants={fadeIn('left',0.2)}
                      initial="hidden"
                      whileInView="show"
            className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                {features.map((feature, index) => (
                    <div key={index} className='flex items-center space-x-4'>
                        <div className='w-12 h-12 flex items-center justify-start rounded-lg'>{feature.icon}</div>
                        <div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2 '>{feature.title}</h3>
                            <p className='text-gray-600 text-justify'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
            </div>
        </div>
    </section>
  )
}

export default PurposeSection