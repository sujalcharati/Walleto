import React from 'react';
import { Link } from 'react-router-dom';
export default function Landingpage(){
  // const API_BASE_URL = import.meta.env.REACT_APP_BACKEND_URL;
  // console.log(API_BASE_URL);

    return(
      <div>
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <div className="text-lg font-bold">Walleto</div>
          <div>
            <Link to="/signup" className="mr-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">Signup</Link>
            <Link to="/login" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">Login</Link>
          </div>
        </nav>
        
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="font-extrabold text-6xl animate-pulse">
            Save your penny through walleto!
          </div>
          <a href="/signup" className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"> Get Started
            </a> 
           
          
        </div>
      </div>
    )
}