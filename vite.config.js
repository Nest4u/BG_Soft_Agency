import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins:[
  //   react(),
  //   nodePolyfills(),
  // ],
   
  // define: {
  //   'process.env': {}
  // },
  // resolve: {
  //   alias: {
  //     web3: 'web3/dist/web3.min.js',
  //   },

  //   // or
   
  // },
})
