import React from "react";
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import  { useState } from "react";
import { Popover } from "./Popover";



const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <meshStandardMaterial color="orange" />
    </Sphere>
  );
};




export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  
  const handleAddExpenseClick = () => {
    setPopoverVisible(true);
   }; 
   

   const handleClosePopover = () => {
    setPopoverVisible(false);
};  


  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 70 }}
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
      <div className="pt-16 flex-1 flex justify-end">
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mx-4 mt-6 px-4 py-2 bg-blue-500 text-white rounded-full"
            onClick= {handleAddExpenseClick}
          >
            Add Expense
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mx-4 mt-6 px-4 py-2 bg-green-500 text-white rounded-full"
          >
            Add Income
          </motion.button>
           
          {isPopoverVisible && <Popover onClose={handleClosePopover} />}

          <div className="mt-8">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 0, 5]} />
              <AnimatedSphere />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
      {/* <AddExpense /> */}
    </div>
  );
};




