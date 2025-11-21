import React from "react";
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls,  } from '@react-three/drei';
import axios from "axios";
import { Link } from 'react-router-dom';

import { useEffect, useState } from "react";

  export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    const toggleProfile = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      // const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
      const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authtoken");
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }
        console.log("Token from storage:", token);

        const response = await axios.get(`/api/transaction/getTransactions`,  { headers: { Authorization: `Bearer ${token}` }});
        setUser(response.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      };

      fetchUserData();
    }, []);

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
                <Link to="/home" className="text-white hover:text-gray-200">Home</Link>
                <Link to="/transaction" className="text-white hover:text-gray-200">Transactions </Link>
              </div>
              <div className="relative flex items-center space-x-4 cursor-pointer" onClick={toggleProfile}>
                <img
                  alt="Profile"
                  src={ "https://www.w3schools.com/howto/img_avatar.png"}
                  className="w-10 h-10 rounded-full"
                />
                {isOpen && user && (
                  <div className="absolute right-0 mt-14 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 origin-top-right z-50">
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700  mt-1"> 
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {user.username}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
                        {user.email}
                      </p>
                    </div>

                    {/* Dropdown Menu Items */}
    <div className="py-1" role="none">
      <a
        href="/profile"
        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
      >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Profile
      </a>
      
      <button
        onClick={() => {
          localStorage.removeItem("authtoken");
          window.location.href = "/login";
        }}
        className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
        role="menuitem"
      >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </button>
    </div>
  </div>
)}
              </div>
            </div>
          </div>
        </motion.nav>
        <div className="pt-16 flex-1 flex justify-end">
          <div>
            <div className="mt-8">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} />
                <OrbitControls />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    );
  };

