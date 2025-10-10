import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nergizkhalid.com/api-nergiz';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all portfolio items (optionally filtered by category_id or type)
export async function getPortfolios(params = {}) {
  const res = await api.get(`${API_BASE_URL}/portfolio`, { params });
  console.log(res.data);
  return res.data;
}

// Fetch portfolio item by ID
export async function getPortfolioById(id) {
  const res = await api.get(`${API_BASE_URL}/portfolio/${id}`);
  return res.data;
}