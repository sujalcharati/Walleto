import axios from 'axios'

// Configure axios base URL for the client.
// Use VITE_API_URL when provided (e.g., in .env for production: https://walleto-be.onrender.com)
// If not set, default to localhost:4000 for local development
// In production with Vercel rewrites, you can also leave it empty to use relative URLs
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000'

axios.defaults.baseURL = API_BASE

export default axios
