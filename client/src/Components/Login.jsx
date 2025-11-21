import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user starts typing
        if (error) setError("");
    };
         const navigate = useNavigate();
       
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        console.log("Form submitted", formData);
        
         try {
              const result = await axios.post(`/api/auth/login`,  formData,{
    withCredentials: true,
  });
              const { token } = result.data;
              if (token) {
                localStorage.setItem('authtoken', token);
                console.log(token);
            
                    
                    navigate('/home');

                console.log("Form submitted", result.data);
              } else {
                setError("Token not found in response");
              }
            } catch (error) {
              console.error("Error during login", error);
              
              // Display user-friendly error messages
              if (error.response) {
                if (error.response.status === 401) {
                  setError("Invalid email or password. Please try again.");
                } else if (error.response.status === 404) {
                  setError("User not found. Please sign up first.");
                } else {
                  setError(error.response.data.msg || "Login failed. Please try again.");
                }
              } else if (error.request) {
                setError("Cannot connect to server. Please check your internet connection.");
              } else {
                setError("An unexpected error occurred. Please try again.");
              }
            } finally {
              setLoading(false);
            }

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#16161E]">
            <div className="bg-[#1F1F2E] p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login for Walleto</h2>
                
                {/* Error Message Display */}
                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-md">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}
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
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="text-gray-300 py-3">Don't have an account? <a href="/signup" className="text-indigo-400"> signup </a></p>
            </div>
        </div>
    );
}