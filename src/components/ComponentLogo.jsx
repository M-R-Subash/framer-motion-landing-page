import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
import woocommerce from '../assets/woocommerce.png'
import { fadeIn } from '../ultils/motion'
import { motion } from 'framer-motion'

const ComponentLogo = () => {

    const logos = [slack, amazon, meundies, sitepoint, woocommerce];

  return (
    <div className='w-full overflow-hidden container mx-auto  py-20 flex gap-8 sm:flex-row flex-col sm:items-center items-start'>
        <motion.div
        variants={fadeIn('right',0.2)}
                  initial="hidden"
                  whileInView="show"    
        className='w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white px-5 py-2 z-10 sm:text-base text-xl font-semibold text-left'>
            Proud Patner at <br /> Hubspot & Segment
        </motion.div>
        <motion.div
        variants={fadeIn('left',0.2)}
                  initial="hidden"
                  whileInView="show"
        className='flex animate-marquee whitespace-nowrap '>
            {logos.map((logo, index) => (
                <img key={index} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
            ))}

            {logos.map((logo, index) => (
                <img key={`duplicate-${index}`} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
            ))}

        </motion.div>
    </div>
  )
}

export default ComponentLogo