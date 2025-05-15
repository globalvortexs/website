import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  base: '/', // Define a base URL como raiz para domínio personalizado
});
