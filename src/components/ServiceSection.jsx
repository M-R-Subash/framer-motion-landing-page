import React from 'react'
import { BsStack } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import { fadeIn } from '../ultils/motion'
import { motion } from 'framer-motion'

const ServiceSection = () => {
    const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]
  return (
    <section id='services' className='py-5 bg-gray-50 px-7 sm:px-14 max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <motion.div 
        variants={fadeIn("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
        className='md:w-1/2 w-full'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5 '>Future of support with <br /> new shape</h2>
            <p className='text-gray-800 text-lg mb-4 md:w-4/5'>Discuss the future of support and shaped by <br /> new technologies and methodologies.</p>
            <div className='space-y-3'>
                <div className='flex items-center gap-3 mb-2'>
                    <div className='w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center'>
                        <div className='w-2.5 h-2.5 bg-indigo-500 rounded-full'></div>
                    </div>
                    <span className='text-gray-800'>UX design content strategy</span>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-3 mb-2'>
                    <div className='w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center'>
                        <div className='w-2.5 h-2.5 bg-indigo-500 rounded-full'></div>
                    </div>
                    <span className='text-gray-800'>Development Bring</span>
                </div>
            </div>
            <button className='mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors'>Get Started</button>
        </motion.div>

        <motion.div 
        variants={fadeIn("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
        className='grid grid-cols-1 md:grid-cols-2  gap-6 md:w-1/2 w-full'>
            {services.map((service, index) => (
                <div key={index} className='bg-white p-6 rounded-lg hover:shadow-xl hover:scale-105  transition-all'>
                    <div className='mb-4'>{service.icon}</div>
                    <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                    <p className='text-gray-600 mb-4'>{service.description}</p>
                    <a href={service.link} className='text-indigo-600 font-semibold hover:underline'>Learn More</a>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceSection