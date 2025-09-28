import { div } from "framer-motion/client";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* brand column */}
          <div className="lg:col-span-4 ">
            <div className="flex items-center gap-1 md:w-3/4">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition-opacity -ml-2"></div>
              </div>
              <span className="font-bold text-xl ml-1">The Next Design</span>
            </div>
            <p className="text-gray-600 mt-3 mb-2">The copy warned the little Blind Text, that where it came from it would have been rewritten a thousand times</p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                    <FaFacebookF className="size-5"/>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                    <FaTwitter className="size-5"/>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                    <FaLinkedin className="size-5"/>
                </a>
            </div>
          </div>
            {/* link columns */}
            <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 lg:col-span-8">
                    {Object.entries(footerLinks).map(([category,links],categoryIndex)=>(
                        <div key={category}>
                            <h3 className="text-lg font-bold mb-4 uppercase" >{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link,index)=>(
                                    <li key={index} className="mb-2">
                                        <a className="text-gray-600 hover:text-blue-600" href="#">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6">
            <div className="text-center text-gray-500 text-sm">
                <p >Copyright © {new Date().getFullYear()} All rights reserved.</p>
                <p>Created by Subash M R</p>
            </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
