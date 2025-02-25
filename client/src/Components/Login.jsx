import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
         const navigate = useNavigate();
       
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
         try {
              const result = await axios.post('http://localhost:4000/api/auth/login', formData);
              const { token } = result.data;
              if (token) {
                localStorage.setItem('authtoken', token);
                console.log(token);
                navigate('/home');
                console.log("Form submitted", result.data);
              } else {
                console.error("Token not found in response");
              }
            } catch (error) {
              console.error("Error during login", error);
            }

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#16161E]">
            <div className="bg-[#1F1F2E] p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login for Walleto</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    href='/home'>Login</button>
                </form>
                <p className="text-gray-300 py-3">Don't have an account? <a href="/signup" className="text-indigo-400"> signup </a></p>
            </div>
        </div>
    );
}