import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kabir_bagalkot_portfolio/", // ✅ add this line
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
