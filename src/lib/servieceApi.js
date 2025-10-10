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

// Fetch all services
export async function getServices(params = {}) {
  const res = await api.get(`${API_BASE_URL}/services`, { params });
  return res.data;
}

// Create a service (admin only)
export async function createService(payload) {
  const res = await api.post(`${API_BASE_URL}/services`, payload);
  return res.data;
}

// Update a service (admin only)
export async function updateService(id, payload) {
  const res = await api.put(`${API_BASE_URL}/services/`, { id, ...payload });
  return res.data;
}

// Delete a service (admin only)
export async function deleteService(id) {
  const res = await api.delete(`${API_BASE_URL}/services/${id}`);
  return res.data;
}

export default api;