import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 بەمەکە گرنگە بۆ routing لە server
})
