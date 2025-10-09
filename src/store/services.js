import { create } from 'zustand';
import { getServices } from '../lib/servieceApi';

const useServicesStore = create((set) => ({
  items: [],
  loading: false,
  error: null,

  fetchAll: async (params = {}) => {
    set({ loading: true, error: null });
    try {
      const data = await getServices(params);
      set({ items: Array.isArray(data) ? data : [], loading: false });
    } catch (err) {
      const message = err?.response?.data?.error || err?.message || 'Failed to fetch services';
      set({ error: message, loading: false });
    }
  },
}));

export default useServicesStore;