import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nergizkhalid.com/api-nergiz';
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});



// Fetch all contacts (address, email, phone)
export async function getContacts(params = {}) {
  const res = await api.get(`${API_BASE_URL}/contacts`, { params });
  console.log("res.data");
  console.log(res.data);
  
  return res.data;
}

// Create a contact entry (admin-only on backend)
export async function createContact(payload) {
  const res = await api.post(`${API_BASE_URL}/contacts`, payload);
  return res.data;
}

// Update a contact entry (expects { id, address, email, phone })
export async function updateContact(payload) {
  const res = await api.put(`${API_BASE_URL}/contacts`, payload);
  return res.data;
}

// Delete a contact entry by id (ID in JSON body to match backend route behavior)
export async function deleteContact(id) {
  const res = await api.delete(`${API_BASE_URL}/contacts`, { data: { id } });
  return res.data;
}