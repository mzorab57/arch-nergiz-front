import api from 'axios';



// Fetch all contacts (address, email, phone)
export async function getContacts(params = {}) {
  const res = await api.get('/contacts', { params });
  return res.data;
}

// Create a contact entry (admin-only on backend)
export async function createContact(payload) {
  const res = await api.post('/contacts', payload);
  return res.data;
}

// Update a contact entry (expects { id, address, email, phone })
export async function updateContact(payload) {
  const res = await api.put('/contacts', payload);
  return res.data;
}

// Delete a contact entry by id (ID in JSON body to match backend route behavior)
export async function deleteContact(id) {
  const res = await api.delete('/contacts', { data: { id } });
  return res.data;
}