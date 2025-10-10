import { create } from 'zustand';
import { getPortfolios } from '../lib/portfolioApi';

const usePortfolioStore = create((set) => ({
  items: [],
  loading: false,
  error: null,
  filter: { category: 'All' },

  fetchAll: async (params) => {
    set({ loading: true, error: null });
    try {
      const data = await getPortfolios(params);
      const items = Array.isArray(data) ? data : [];
      console.log(items);
      console.log("items");
      set({ items, loading: false });
    } catch (err) {
      const message = err?.response?.data?.error || err?.message || 'Failed to fetch portfolio';
      set({ error: message, loading: false });
    }
  },

  setFilter: (category) => set({ filter: { category } }),
}));

export default usePortfolioStore;