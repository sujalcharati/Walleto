import React from "react";
import { motion } from "framer-motion";

import  { useState } from "react";

export const Header= ()=>{
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleProfile = () => {
            setIsOpen(!isOpen);
        };
return (
<div>
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="bg-gradient-to-r from-blue-600 to-green-500 fixed w-full z-10 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200"> Walleto</a>
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">Transactions</a>
          </div>
          <div className="relative flex items-center space-x-4 cursor-pointer" onClick={toggleProfile}>
            <img
              alt="Profile"
              src="https://www.w3schools.com/howto/img_avatar.png"
              className="w-10 h-10 rounded-full"
            />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <div className="px-4 py-2 text-gray-800">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm">johndoe@example.com</p>
                </div>
                <div className="border-t border-gray-200"></div>
                <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
</div>
);
}



