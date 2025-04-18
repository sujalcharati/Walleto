// import React from 'react';
// import { Link } from 'react-router-dom';
// export default function Landingpage(){
//   // const API_BASE_URL = import.meta.env.REACT_APP_BACKEND_URL;
//   // console.log(API_BASE_URL);

//     return(
//       <div>
//         <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
//           <div className="text-lg font-bold">Walleto</div>
//           <div>
//             <Link to="/signup" className="mr-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">Signup</Link>
//             <Link to="/login" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">Login</Link>
//           </div>
//         </nav>
        
//         <div className="flex flex-col justify-center items-center h-screen">
//           <div className="font-extrabold text-6xl animate-pulse">
//             Save your penny through walleto!
//           </div>
//           <a href="/signup" className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"> Get Started
//             </a> 
           
          
//         </div>
//       </div>
//     )
// }



"use client"

import { motion } from "framer-motion"
import { ArrowRight, Wallet, TrendingUp, Shield } from "lucide-react"

function Landingpage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-300 font-medium text-sm mb-6">
              Manage your finances with ease
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Save your penny through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Walleto!</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The smart way to track, save, and grow your money. Join thousands of users who have transformed their
            financial habits with our intuitive platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="text-white border border-gray-700 hover:bg-slate-800 px-8 py-3 rounded-md font-medium">
              Learn More
            </button>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 md:mt-24 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
            <div className="aspect-[16/9] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Wallet className="h-8 w-8 text-blue-400" />
                  </div>
                  <p className="mt-4 text-white font-medium">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            className="absolute -top-6 -left-6 md:top-12 md:-left-12 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl"
            initial={{ x: -20, y: 20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Savings Growth</p>
                <p className="text-green-400 font-bold">+27%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl"
            initial={{ x: 20, y: -20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <p className="text-white font-medium">Secure Savings</p>
                <p className="text-gray-300 text-sm">Bank-level security</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Landingpage
