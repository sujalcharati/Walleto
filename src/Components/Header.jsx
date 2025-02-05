import React from "react";
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls,  } from '@react-three/drei';
import axios from "axios";
import { Link } from 'react-router-dom';

import { useEffect, useState } from "react";

  export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    const toggleProfile = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authtoken");
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }
        console.log("Token from storage:", token);

        const response = await axios.get("http://localhost:4000/api/transaction/getTransactions",  { headers: { Authorization: `Bearer ${token}` }});
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
                {isOpen && user && user.username && user.email && (
                  <div className=" absolute mt-11 w-60 bg-black">
                    <div className="px-4 py-2 text-gray-800">
                      {user.username && <p className="font-medium text-white">{user.username}</p>}
                      {user.email && <p className="text-sm text-white">{user.email}</p>}
                    </div>
                    <div className="px-4 py-2 text-white cursor-pointer hover:bg-gray-100" onClick={() => {
              localStorage.removeItem("authtoken");
              window.location.href = "/login";
            }}>
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





