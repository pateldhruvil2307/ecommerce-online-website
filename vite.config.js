import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
})

// import tailwindcss from '@tailwindcss/postcss';
// import autoprefixer from 'autoprefixer';

// export default {
//   plugins: [
//     tailwindcss,
//     autoprefixer,
//   ],
// };
