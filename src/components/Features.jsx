import React from 'react'
import { fadeIn } from '../ultils/motion'
import { motion } from 'framer-motion'
const Features = () => {

    const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]

  return (
    <section className='max-w-7xl mx-auto px-7 sm:px-14 py-16'>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        className='text-center mb-12'
      >
        <h2 className='text-3xl font-bold mb-4'>How can we help your business</h2>
        <p className='text-gray-600'>When you resell besnik,you build trust and increase</p>
      </motion.div>

      <motion.div
      variants={fadeIn('up',0.3)}
                initial="hidden"
                whileInView="show"
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-lg text-center' style={{border: '1px solid #e5e7eb' ,backgroundColor: index === 1 ? '#FEE7E7' : 'FFF3E4'}}>
              <div className='text-4xl mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))} 
        </div>
      </motion.div>
      <motion.div 
      variants={fadeIn('up',0.4)}
                initial="hidden"
                whileInView="show"
      className='text-center mt-12'>
        <button className='bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative shadow-2xl backdrop-blur-2xl '>Become a Partner
          <div className='absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0'></div>
        </button>
      </motion.div>
    </section>
  )
}

export default Features