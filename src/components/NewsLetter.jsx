import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
const NewsLetter = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16' id='newsletter'>
        <div className='bg-blue-600 rounded-xl overflow-hidden'>
            <div className='relative md:px-7 py-7 px-6 md:py-10'>
                {/* gradient-bg */}
                <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>
                <div className='relative flex flex-col md:flex-row items-center justify-between gap-5'>
                        {/* left content */}
                    <div className='max-w-lg text-center md:text-left'>
                        <h2 className='text-3xl font-bold text-white mb-4'>Subscribe to our Newsletter</h2>
                        <p className='text-blue-200 mb-8 text-base'>Stay updated with the latest news and offers from Besnik.</p>
                    </div>
                    {/* right content */}
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                        <input type="text" placeholder="Enter your email" className='w-full sm:w-auto md:w-60 lg:w-80 px-4 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none' />
                        <button className='w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center justify-center'>
                            <span>Discover</span>
                            <HiArrowNarrowRight className='inline-block ml-2 ' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <style>
            {
            `.clip-path-slant{
                clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
            }`
            }
        </style>
    </section>
  )
}

export default NewsLetter