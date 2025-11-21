import axios from 'axios'

// Configure axios base URL for the client.
// Use VITE_API_URL when provided (e.g., in .env), otherwise default to localhost:4000
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000'

axios.defaults.baseURL = API_BASE

export default axios
