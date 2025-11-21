import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
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
    
    try {
      const result = await axios.post(`/api/auth/signup`, formData);
      const { token } = result.data;
      if (token) {
        localStorage.setItem('authtoken', token);
        navigate('/home');
        console.log("Form submitted", result.data);
      } else {
        setError("Token not found in response");
      }
    } catch (error) {
      console.error("Error during signup", error);
      
      // Display user-friendly error messages
      if (error.response) {
        // Server responded with error
        if (error.response.status === 409) {
          setError(error.response.data.msg || "Email already registered. Please login or use a different email.");
        } else if (error.response.status === 400) {
          setError(error.response.data.msg || "Invalid input. Please check your details.");
        } else {
          setError("Signup failed. Please try again.");
        }
      } else if (error.request) {
        // Request made but no response
        setError("Cannot connect to server. Please check your internet connection.");
      } else {
        // Other errors
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#16161E]">
      <div className="bg-[#1F1F2E] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Signup for Walleto
        </h2>
        
        {/* Error Message Display */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-md">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
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
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-gray-300 py-3">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
