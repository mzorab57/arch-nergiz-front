import { create } from 'zustand';
import { getContacts, createContact, updateContact, deleteContact } from '../lib/contactApi';

const useContactsStore = create((set, get) => ({
  items: [],
  loading: false,
  error: null,

  fetchAll: async (params) => {
    set({ loading: true, error: null });
    try {
      const data = await getContacts(params);
      set({ items: Array.isArray(data) ? data : [], loading: false });
    } catch (err) {
      const message = err?.response?.data?.error || err?.message || 'Failed to fetch contacts';
      set({ error: message, loading: false });
    }
  },

  create: async (payload) => {
    set({ loading: true, error: null });
    try {
      const res = await createContact(payload);
      await get().fetchAll();
      set({ loading: false });
      return res;
    } catch (err) {
      const message = err?.response?.data?.error || err?.message || 'Failed to create contact';
      set({ error: message, loading: false });
      throw err;
    }
  },

  update: async (payload) => {
    set({ loading: true, error: null });
    try {
      const res = await updateContact(payload);
      await get().fetchAll();
      set({ loading: false });
      return res;
    } catch (err) {
      const message = err?.response?.data?.error || err?.message || 'Failed to update contact';
      set({ error: message, loading: false });
      throw err;
    }
  },

  remove: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await deleteContact(id);
      set({ items: get().items.filter((c) => String(c.id) !== String(id)), loading: false });
      return res;
    } catch (err) {
      const message = err?.response?.data?.error || err?.message || 'Failed to delete contact';
      set({ error: message, loading: false });
      throw err;
    }
  },
}));

export default useContactsStore;